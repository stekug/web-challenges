import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>Volumes</h1>
      <Link href="/volumes/the-fellowship-of-the-ring">
        The Fellowship of the Ring
      </Link>
      <Link href="/volumes/the-two-towers">The two Towers</Link>
      <Link href="/volumes/the-return-of-the-king">The Return of the King</Link>
    </>
  );
}
