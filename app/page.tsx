import { Metadata } from "next"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "components/ui/button"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "components/ui/tabs"
import { LP_GRID_ITEMS } from "lp-items"
import heroPic from 'images/hero.png'
import { HeroSection } from 'components/HeroSection/HeroSection'
import { Logo } from 'components/Logo/Logo'

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <section className="w-full py-12">
        <HeroSection />
      </section>
      <section className="w-full py-12">
        <Logo />
      </section>
      <section className="flex w-full py-12 px-24 h-700px gap-16">
        <Image
          alt="Image"
          className="flex-1 py-16   rounded-xl object-cover object-center"
          height="300"
          src={heroPic}
          width="400"
        />
        <Tabs className="flex-1 w-0.5 " defaultValue="solution-architecture">
          <TabsList className="grid grid-cols-3 gap-4">
            <TabsTrigger value="solution-architecture">Solution Architecture</TabsTrigger>
            <TabsTrigger value="computer-engineering">Computer Engineering</TabsTrigger>
            <TabsTrigger value="3d">3D Technology</TabsTrigger>
          </TabsList>
          <TabsContent value="solution-architecture">
                <div className="flex flex-col space-y-4 h-80">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Future of Computing</h2>
                  </div>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Harness the power of the cloud. Our platform provides scalable solutions for your business. Whether
                    you're a small startup or a large enterprise, we've got you covered. Let us handle the infrastructure so
                    you can focus on innovation.
                  </p>
                </div>
          </TabsContent>
          <TabsContent value="computer-engineering">
                <div className="flex flex-col space-y-4 h-80">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Computer Engineering</h2>
                  </div>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    of perfectly hunter golden basket expect product itself mice avoid clean may plant explain present shirt double handle shine volume rope voyage smooth thou
                    Harness the power of the cloud. Our platform provides scalable solutions for your business. Whether
                    you're a small startup or a large enterprise, we've got you covered. Let us handle the infrastructure so
                    you can focus on innovation.
                  </p>
                </div>
          </TabsContent>
          <TabsContent value="3d">
                <div className="flex flex-col space-y-4 h-80">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">3D Technology</h2>
                  </div>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Harness the power of the cloud. Our platform provides scalable solutions for your business. Whether
                    you're a small startup or a large enterprise, we've got you covered. Let us handle the infrastructure so
                    you can focus on innovation.
                  </p>
                </div>
          </TabsContent>
        </Tabs>
      </section>


      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div key={singleItem.title} className="flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-1.5 text-blue-700 dark:bg-primary-900 lg:h-12 lg:w-12">
                  {singleItem.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">{singleItem.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{singleItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}




