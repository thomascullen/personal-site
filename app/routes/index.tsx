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
              className="font-serif text-3xl md:text-[42px] md:leading-[52px] text-white tracking-tight font-[600] mb-10 words-loose"
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
              I've spent the last 4 years at{" "}
              <ExternalLink href="https://advisable.com">
                Advisable
              </ExternalLink>{" "}
              building a network of top freelancers. Unfortunately that journey
              has{" "}
              <ExternalLink href="https://www.schlupfloch.xyz/explaining-advisables-failure/">
                ended
              </ExternalLink>{" "}
              and I am looking for new opportunities.
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
            <ContactButton className="mb-14">Say Hello</ContactButton>
            <div className="flex gap-3">
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://twitter.com/thomasauros"
              >
                <Twitter size={24} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://github.com/thomascullen"
              >
                <Github size={24} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://dribbble.com/thomascullen"
              >
                <Dribbble size={24} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="social-link"
                href="https://www.instagram.com/thomascullen"
              >
                <InstagramAlt size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Perlin />
    </div>
  );
}
