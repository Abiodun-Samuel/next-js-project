import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.jpg" alt="logo" width={100} height={50} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a> About</a>
      </Link>
      <Link href="/list">
        <a> List </a>
      </Link>
    </nav>
  );
};

export default Navbar;
