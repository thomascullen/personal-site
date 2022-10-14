import me from "~/assets/me.gif";
import mehit from "~/assets/me-hit.gif";
import mehover from "~/assets/me-hover.gif";
import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Logo() {
  const [hit, setHit] = useState(false);
  const [face, setFace] = useState(me);

  const handleHover = (e) => {
    setFace(mehover);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (hit) return;
    setHit(true);
    setTimeout(() => {
      setHit(false);
    }, [3500]);
  };

  const gif = hit ? mehit : face;

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseOut={() => setFace(me)}
    >
      <Link
        to="/"
        className="-ml-2 flex items-center gap-3 text-white hover:text-indigo-600"
      >
        <img src={gif} className="h-[80px]" />
      </Link>
    </div>
  );
}
