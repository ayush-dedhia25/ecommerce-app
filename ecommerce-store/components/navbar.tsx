import Link from "next/link";

import { getCategories } from "@/actions/get-categories";

import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";
import Container from "./ui/container";

type NavbarProps = {};

async function Navbar(props: NavbarProps) {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-4 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
