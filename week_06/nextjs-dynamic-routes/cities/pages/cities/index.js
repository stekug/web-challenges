import { cities } from "@/lib/data";
import Link from "next/link";

export default function Cities() {
  return (
    <>
      <div>
        <h1>Cities List</h1>
        <ul>
          {cities.map(({ slug, name, id }) => (
            <li key={id}>
              <Link href={`/cities/${slug}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
