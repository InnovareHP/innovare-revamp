import Image from "next/image";
import Link from "next/link";

const SimpleFooter = () => {
  return (
    <footer className="bg-gray-50 border-t py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="InnovareHP"
            width={50}
            height={50}
            className="mb-2"
          />
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-500 max-w-md">
          InnovareHP helps hospitals grow with digital marketing and community
          outreach. We craft campaigns that attract patients and build lasting
          trust.
        </p>

        {/* Links */}
        <nav className="flex gap-6 text-sm font-medium mt-4">
          <Link href="/about" className="text-gray-600 hover:text-primary">
            About
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary">
            Services
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-primary">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} InnovareHP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SimpleFooter;
