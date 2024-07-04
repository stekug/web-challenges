import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data.js";
import Router, { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  const handleClick = () => {
    const randomSlug = volumes[Math.floor(Math.random() * volumes.length)].slug;
    router.push(`/volumes/${randomSlug}`);
  };
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={crypto.randomUUID()}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Random Book</button>
    </>
  );
}
