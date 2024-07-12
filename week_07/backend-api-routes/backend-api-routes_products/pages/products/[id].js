import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetails() {
  const router = useRouter();
  const id = router.query.id;

  const { data, error, isLoading } = useSWR(`/api/products/${id}`);
  if (error) return <h1>an error occured, plz try again later</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  if (!data) {
    return null;
  }

  const { name, currency, price, category, description } = data;

  return (
    <>
      <h2>{name}</h2>
      <p>
        Price: {price}
        {currency}
      </p>
      <p>
        <strong>{category}</strong>
      </p>
      <p>{description}</p>
    </>
  );
}
