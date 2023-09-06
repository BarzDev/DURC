import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Bar&rsquo;z CRUD
      </Link>
      <Link className="bg-white p-2 font-bold" href={"/addTopic"}>
        Add New
      </Link>
    </nav>
  );
};

export default Navbar;
