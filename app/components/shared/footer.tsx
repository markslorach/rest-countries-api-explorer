import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 border-t h-20 mt-20">
      <div className="md:container flex h-20 items-center text-sm justify-between text-black/60">
        <span className="hidden md:inline">
          Built using the{" "}
          <Link
            className="text-blue-500 underline underline-offset-2"
            href="https://restcountries.com/"
            target="_blank"
          >
            REST Countries API
          </Link>{" "}
          by{" "}
          <Link
            className="text-blue-500 underline underline-offset-2"
            href="https://www.markslorach.com/"
            target="_blank"
          >
            Mark Slorach
          </Link>
          .
        </span>

        <span className="md:hidden">
          Built by{" "}
          <Link
            className="text-blue-500 underline underline-offset-2"
            href="https://www.markslorach.com/"
            target="_blank"
          >
            Mark Slorach
          </Link>
          .
        </span>
        <Link
          href="https://github.com/markslorach/countries-db.git"
          target="_blank"
        >
          <Github className="h-5 w-5 text-black" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
