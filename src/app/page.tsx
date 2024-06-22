import Image from "next/image";
import Link from "next/link";

import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";

import { Highlight, HeroHighlight } from "@/components/hero-highlight";
import { Meteors } from "@/components/meteors";
import { Container } from "@/components/container";
import { PortfolioCard } from "@/components/portfolio";

import photoYudis from "@/assets/images/photo_yudis.jpg";

import { portfolioData } from "@/data/portfolio";
import { workData, monthNames } from "@/data/work";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero section */}
      <HeroHighlight>
        <Container>
          <div className="relative grid h-full min-h-[40rem] gap-4 overflow-clip py-4 lg:grid-cols-5">
            <Meteors number={30} />

            <div className="flex flex-col justify-center  lg:col-span-3">
             

              <h1 className="mb-16 text-3xl font-bold lg:text-7xl">
                
                <Highlight>
                  <span className="lg:px-5">DotaJet</span>
                </Highlight>
              </h1>

              <h2 className="mb-4 text-xl font-bold lg:text-5xl">
                
                Players power the future of Dota. <br></br>
                We're here to elevate yours.<br></br>
                 <br></br>
                <br>
                </br>
                
              </h2>
              &nbsp;
              <p className="text-sm lg:text-3xl">
                <br></br>
               
                
              </p>
              <p className="text-sm lg:text-2xl">
             

              </p>

              {/* socials  */}
             
            </div>

           
            
          </div>
        </Container>
      </HeroHighlight>

      {/* intro */}
      <Container className="space-y-12 overflow-hidden rounded-lg border-2 border-[#eaeaea] bg-zinc-90 p-20 dark:border dark:border-blue-300 dark:bg-zinc-900">
        <h2 className="text-3xl font-bold lg:text-7xl">Game Analysis</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-1 ">
          {workData.slice(0, 4).map((work) => (
            <div key={work.companyName} className="flex flex-col space-y-4">
              <div className="flex space-x-4">
              
                <div>
                 
                  <p className=" font-bold text-3xl">{work.jobTitle}</p>
                </div>
              </div>

           
            </div>
          ))}
        </div>

        {/* go to stratz button */}
        <Link
          href={"https://stratz.com/"}
          target="_blank"
          rel="noopener"
          className="flex w-full items-center justify-center rounded-lg border border-blue-900 p-8 font-bold text-blue-300 duration-300 hover:bg-blue-800 hover:text-neutral-200 hover:underline"
        >
          Go to Stratz &rarr;
        </Link>
      </Container>

      {/* Latest posts */}
      <Container className="space-y-12 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold lg:text-6xl">Latest Posts</h2>

          <Link
            href="/portfolio"
            className="flex-shrink-0 text-sm font-semibold lg:text-2xl text-blue-500 hover:underline"
          >
            View all posts &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {portfolioData.slice(0, 4).map((portfolio) => (
            <PortfolioCard
              key={portfolio.title}
              portfolio={portfolio}
              className="min-h-[30rem]"
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
