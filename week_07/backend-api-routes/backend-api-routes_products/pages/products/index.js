import useSWR from "swr";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

export default function ListingPage() {
  const { data, error, isLoading } = useSWR("/api/products/");

  if (error) return <h1>an error occured, plz try again later</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.map((element) => {
        const { name, currency, price, category, description, id } = element;
        return (
          <li key={id}>
            <StyledLink href={`/products/${id}`}>
              <h2>{name}</h2>
            </StyledLink>
            <p>
              Price: <strong>{price}</strong>
              {currency}
            </p>
            <p>
              <strong>{category}</strong>
            </p>
            <p>{description}</p>
          </li>
        );
      })}
    </ul>
  );
}
