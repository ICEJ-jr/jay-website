/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aD3xWYSe3XH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image'
import Link from "next/link"
import { buttonVariants } from "components/ui/button"

import heroPic from 'images/hero.png'

export function HeroSection() {
  return (
    // <section className="w-full py-12 px-0 mx-0">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src={heroPic}
              width="550"
            />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Website of Isaac C. E. Johnson 
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Hi! Welcome to my website. This website will give you an insight into my small world.
                What am I? 
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link className={buttonVariants({ variant: "default" }) + " px-8"} href="#">Subcribe to me!</Link>
              <Link className={buttonVariants({ variant: "outline" }) + " px-8"} href="#">Reach out</Link>

            </div>
          </div>
        </div>
      </div>
    // </section>
  )
}

