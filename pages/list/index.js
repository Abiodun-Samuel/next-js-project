import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/List.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { lists: data },
  };
};

const List = ({ lists }) => {
  return (
    <>
      <Head>
        <title>My List</title>
      </Head>
      <div>
        <h2>List Users</h2>
        {lists.map((list) => (
          <Link href={`/list/${list.id}`} key={list.id}>
            <a className={styles.single}>
              <h3>{list.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default List;
