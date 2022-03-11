import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <h2>Home</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="list">
        <a>List</a>
      </Link>
    </div>
  );
};

export default Navbar;
