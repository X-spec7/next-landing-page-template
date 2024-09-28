"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div className="text-xl font-semibold">Pull Cards</div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base lg:text-lg font-normal">
            <Link href="/#" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline underline-offset-4">Home</Link>
            <Link href="/#" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline underline-offset-4">Marketplace</Link>
            <Link href="/#" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline underline-offset-4">Booster Packs</Link>
            <Link href="/#" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline underline-offset-4">Inventory</Link>
            <Link href="/#" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline underline-offset-4">FAQ</Link>
            <Link href="/#" className="hover:text-gray-600 dark:hover:text-gray-300 hover:underline underline-offset-4">Terms of Service</Link>
          </nav>
          <div className="text-sm md:text-base">&copy; 2024 Pull Labs</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;