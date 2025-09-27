import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { lusitana } from "./ui/fonts";
import Image from "next/image";

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/business-bg-light.png" // save the generated image here in public folder
          alt="Business dashboard background"
          fill
          className="object-cover"
          priority
        />
        {/* Optional light overlay for contrast */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 rounded-xl bg-white px-8 py-10 shadow-2xl w-full max-w-md border border-gray-200">
        <h1
          className={`text-2xl font-semibold text-gray-900 md:text-3xl ${lusitana.className}`}
        >
          Welcome To Bizflow
        </h1>
        <p className="text-gray-700 text-center text-base leading-relaxed">
          A <strong>Business Management System</strong> to manage your business activities.
        </p>

        <Link
          href="/login"
          className="flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 
                     text-sm font-medium text-white transition-all duration-200 
                     hover:bg-blue-500 hover:scale-105 md:text-base shadow-md"
        >
          <span>Log In</span>
          <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>
    </main>
  );
}
