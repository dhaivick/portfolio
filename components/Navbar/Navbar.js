import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  const router = useRouter();

  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  return (
    <Menu inverted color="gray" style={{ borderRadius: 0, width: "100vw" }}>
      <Menu.Item>
        <span style={{ fontFamily: "cursive" }}>Dhaivick</span>
      </Menu.Item>
      <Menu.Menu position="right">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.link}>
            <Menu.Item
              name={link.label}
              active={router.pathname === link.link}
            />
          </Link>
        ))}
      </Menu.Menu>
    </Menu>
  );
}
