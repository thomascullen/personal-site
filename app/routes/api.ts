import { json } from "@remix-run/node";

export async function action({ request }) {
  const asJson = await request.json();
  console.log({ asJson });
  return json(asJson);
}

export function loader() {}
