import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  const comments = data.reviews;

  console.log(comments);

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <h2>Reviews:</h2>
      {comments.map((comment) => {
        return (
          <>
            <h3>
              {comment.title} - {comment.rating}/5⭐
            </h3>
            <p>{comment.text}</p>
          </>
        );
      })}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
