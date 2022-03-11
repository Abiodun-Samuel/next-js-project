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
    <div>
      <h2>List Users</h2>
      {lists.map((list) => (
        <div key={list.id}>
          <a className={styles.single}>
            <h3>{list.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default List;
