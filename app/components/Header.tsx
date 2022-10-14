import Logo from "~/components/Logo";
import { motion } from "framer-motion";
import { ExternalLink, Link } from "~/components/Link";

function HeaderLink({ active, children, ...props }) {
  return (
    <a {...props} data-active={active} className="nav-link text-lg font-[500]">
      <span className="nav-link-label">{children}</span>
      {active && <div className="nav-link-active" />}
    </a>
  );
}

function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "auto" }}
      transition={{ duration: 1 }}
      className="nav"
    >
      <HeaderLink active href="#">
        About
      </HeaderLink>
      <HeaderLink href="#">Posts</HeaderLink>
      <HeaderLink href="#">Contact</HeaderLink>
    </motion.nav>
  );
}

export default function Header() {
  return (
    <header className="header">
      <div className="mx-auto flex items-center gap-4">
        <div className="flex gap-5 items-center text-white">
          <Logo />
        </div>
      </div>
    </header>
  );
}
