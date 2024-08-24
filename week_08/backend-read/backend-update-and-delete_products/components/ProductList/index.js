import useSWR from "swr";
import { StyledHeading, StyledList } from "./ProductList.styled";
import { StyledLink } from "../Link/Link.styled";

export default function ProductList({ onDeleteAll }) {
  const { data, isLoading, mutate } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleDeleteAll() {
    const respone = await fetch("/api/products/", {
      method: "DELETE",
    });

    if (respone.ok) {
      mutate();
    }
  }

  return (
    <>
      <StyledHeading>Available Fishes</StyledHeading>
      <button type="button" onClick={handleDeleteAll}>
        Delete All
      </button>
      <StyledList>
        {data.map((product) => (
          <li key={product._id}>
            <StyledLink href={`/${product._id}`}>{product.name}</StyledLink>
          </li>
        ))}
      </StyledList>
    </>
  );
}
