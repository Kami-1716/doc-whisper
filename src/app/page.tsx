import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Welcome to DocWhisper
          </p>
        </div>
        <h1 className="max-w-4xl text-4xl font-bold md:text-5xl">
          Unleash the Power of Your PDFs with{" "}
          <span className="text-blue-600">Intelligent Insights</span> and{" "}
          <span className="text-blue-600">Seamless Reading Experience</span>
        </h1>
        <p className="max-w-prose mt-5 text-zinc-600 sm:text-lg">
          With DocWhisper, effortlessly transform your PDF documents into
          actionable insights. Harness the power of advanced AI to read,
          analyze, and understand your content like never before.
        </p>
        <Link
          href="/dashboard"
          target="_blank"
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
    </>
  );
}
