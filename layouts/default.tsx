import { Link } from "@nextui-org/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { HeartFilledIcon } from "@/components/icons";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 z-[100]">
        <div
          className="flex items-center gap-1 text-current"
        >
          <span className="text-default-600">Made with</span>
          <HeartFilledIcon className="text-red-500" />
          <p className="text-default-600">by Pratyush and Aryan</p>
        </div>
      </footer>
    </div>
  );
}
