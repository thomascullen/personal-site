import { motion } from "framer-motion";
import Header from "~/components/Header";
import { ExternalLink } from "~/components/Link";
import Perlin from "~/components/Perlin";
import ContactButton from "~/components/ContactButton";
import {
  InstagramAlt,
  Twitter,
  Github,
  Dribbble,
} from "@styled-icons/boxicons-logos";

export default function Index() {
  return (
    <div>
      <div className="relative z-10 container mx-auto">
        <div className="max-w-[700px] py-20">
          <div>
            <Header />
            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-[42px] md:leading-[52px] text-white tracking-tight font-[700] mb-10"
            >
              Thomas is a designer and developer who is currently writing about
              himself in the third person.
            </motion.h1>
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0 }}
              className="text-white font-serif font-[500] text-xl md:text-2xl text-white leading-relaxed md:leading-relaxed mb-16"
            >
              I'm currently working as a Design Engineer at <ExternalLink href="https://evervault.com">Evervault.</ExternalLink>
              <br />
              <br />
              You can see my latest projects{" "}
              <ExternalLink href="https://dribbble.com/thomascullen">
                here
              </ExternalLink>
              , read my code{" "}
              <ExternalLink href="https://github.com/thomascullen">
                here
              </ExternalLink>{" "}
              and get snippets of my thoughts{" "}
              <ExternalLink href="https://twitter.com/thomasauros">
                here
              </ExternalLink>
              .
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <ContactButton className="mb-14">Say Hello</ContactButton>
            </motion.div>
            <div className="flex gap-3">
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0 }}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://twitter.com/thomasauros"
              >
                <Twitter size={24} />
              </motion.a>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://github.com/thomascullen"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://dribbble.com/thomascullen"
              >
                <Dribbble size={24} />
              </motion.a>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://www.instagram.com/thomascullen"
              >
                <InstagramAlt size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <Perlin />
    </div>
  );
}
