import me from "~/assets/me.gif";
import { motion } from "framer-motion";
import mehit from "~/assets/me-hit.gif";
import mehover from "~/assets/me-hover.gif";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

function preloadImage(url, callback = () => {}) {
  var img = new Image();
  img.src = url;
  img.onload = callback;
}

export default function Logo() {
  const [loaded, setLoaded] = useState(false);
  const [hit, setHit] = useState(false);
  const [face, setFace] = useState(me);

  useEffect(() => {
    preloadImage(me, () => {
      setLoaded(true);
    });
    preloadImage(mehit);
    preloadImage(mehover);
  }, []);

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
    <motion.div
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseOut={() => setFace(me)}
      animate={{
        opacity: loaded ? 1 : 0,
        scale: loaded ? 1 : 0,
      }}
    >
      <Link
        to="/"
        className="-ml-2 flex items-center gap-3 text-white hover:text-indigo-600"
      >
        <img src={gif} className="h-[80px]" />
      </Link>
    </motion.div>
  );
}
