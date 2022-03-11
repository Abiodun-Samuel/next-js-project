import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My NextJs Project</title>
      </Head>
      <div>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          idem.
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          consequatur ea, est laboriosam excepturi nostrum perspiciatis nam
          deserunt voluptas quam magni voluptatibus, sit nemo soluta, at magnam.
          Repudiandae, ab. Quidem?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
          consequatur ea, est laboriosam excepturi nostrum perspiciatis nam
          deserunt voluptas quam magni voluptatibus, sit nemo soluta, at magnam.
          Repudiandae, ab. Quidem?
        </p>
      </div>
      <Link href="/list">
        <a className={styles.btn}>List</a>
      </Link>
    </>
  );
}
