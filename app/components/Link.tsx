import { Link as RemixLink } from "@remix-run/react";

const classes = `underline decoration-[#5CEEC8] underline-offset-4 text-[#5CEEC8] hover:text-indigo-500 hover:decoration-indigo-200`;

export function Link(props) {
  return <RemixLink className={classes} {...props} />;
}

export function ExternalLink(props) {
  return <a className={classes} {...props} />;
}
