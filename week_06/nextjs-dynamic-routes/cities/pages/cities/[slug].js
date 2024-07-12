import { cities } from "@/lib/data";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function City() {
  const router = useRouter();
  const { slug } = router.query;

  const city = cities.find((city) => city.slug.toLowerCase() === slug);
  // const city = cities.find((city) => city.slug.toLowerCase() === slug) ?? {};

  const handleClick = () => {
    router.push("/cities");
  };

  if (!city) {
    return null;
  }

  const { name, country, population, description, imageUrl } = city;
  return (
    <>
      <h1>{name}</h1>
      <h2>Country: {country}</h2>
      <h3>Population: {population}</h3>
      <h3>Description:</h3>
      <p>{description}</p>
      <Image src={imageUrl} width={640} height={320} alt={name} />
      <button onClick={handleClick}>Go Back to Overview</button>
    </>
  );
}
