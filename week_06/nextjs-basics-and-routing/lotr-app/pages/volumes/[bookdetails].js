import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const volume = volumes.find(({ slug }) => slug === "the-two-towers");

export default function Bookdetails() {
  const router = useRouter();
  const book = router.query.bookdetails;

  return (
    <>
      <h1>Title: {book}</h1>
      <p>Description: {volume.description}</p>
      <ul>
        <li>
          {volume.books[0].ordinal}: {volume.books[0].title}
        </li>
        <li>
          {volume.books[1].ordinal}: {volume.books[1].title}
        </li>
      </ul>
      <Image src={volume.cover} width={140} height={230} alt={volume.title} />
      <Link href="/">Overview</Link>
    </>
  );
}
