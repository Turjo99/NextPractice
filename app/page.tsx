import Image from "next/image";
import Nav from "./Nav/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <Link href="/users">Click hereee</Link>
      <Nav></Nav>
    </>
  );
}
