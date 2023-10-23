import Link, { LinkProps } from "next/link";
import { flex, stack } from "../../../styled-system/patterns";
import { css } from "../../../styled-system/css";

type SidebarMenu = {
  title: string;
  href: LinkProps["href"];
};

export type SidebarProps = {
  menus: Array<SidebarMenu>;
};

export const Sidebar = (props: SidebarProps) => {
  return (
    <div
      className={stack({
        direction: "column",
        h: "100vh",
        w: "20rem",
        bg: "#2f333c",
        alignItems: "center",
        py: "3rem",
        gap: "1rem",
      })}
    >
      {props.menus.map((menu, i) => (
        <Link key={i} passHref href={menu.href}>
          <div
            className={flex({
              bg: { base: "inherit", _hover: "gray.900" },
              w: "20rem",
              py: "0.5rem",
              px: "3rem",
            })}
          >
            <span
              className={css({
                color: "white",
                w: "100%",
              })}
            >
              {menu.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
