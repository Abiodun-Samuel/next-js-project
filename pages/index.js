import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        aliquid necessitatibus consequatur? Modi eum quasi ut? Iste, corrupti
        animi. Veritatis at ipsa ex pariatur sunt provident tempora similique.
        Consequatur omnis ipsam vero nihil voluptate suscipit? Deserunt deleniti
        quia et, commodi, laborum doloremque adipisci perspiciatis vel beatae,
        molestiae magnam hic vitae temporibus.
      </div>
      <Link href="/list">
        <a>List</a>
      </Link>
    </>
  );
}
