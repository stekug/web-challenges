import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

// const fetcher = async (url) => {
//   console.log("fetch start");
//   const res = await fetch(url);
//   console.log("fetch complete");
//   // If the status code is not in the range 200-299,
//   // we still try to parse and throw it.
//   if (!res.ok) {
//     const error = new Error("MY ERROR!");
//     console.log("1");
//     // Attach extra info to the error object.
//     const contentType = res.headers.get("content-type");
//     if (contentType && contentType.includes("application/json")) {
//       try {
//         error.info = await res.json();
//         console.log("2");
//       } catch (err) {
//         console.log("failed to parse json", err);
//         error.info = null;
//       }
//     } else {
//       console.log("response is not JSON");
//       error.info = { message: "Response is not JSON" };
//     }

//     error.status = res.status;
//     console.log("3", error.message);
//     throw error;
//   }

//   return res.json();
// };

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function Character() {
  // Router
  const router = useRouter();
  const id = router.query.id;
  // SWR Fetch

  const { data, error, isLoading, isValidating } = useSWR(
    `https://swapi.dev/api/peopleZ/${id}`,
    fetcher
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Ups, error occured, try again later! Error: {error.message}</h1>;
  }
  const { name, height, eye_color, birth_year } = data;

  return (
    <Layout>
      <Card
        id={id}
        name={name}
        height={height}
        eyeColor={eye_color}
        birthYear={birth_year}
      />
    </Layout>
  );
}
