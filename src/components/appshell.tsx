"use client";

import { useMemo } from "react";
import { AppShell, rem, Button, NavLink, Box, Burger } from "@mantine/core";
import { useHeadroom, useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

import { Container } from "@/components/container";

import dynamic from "next/dynamic";
const ToggleTheme = dynamic(() => import("./theme"));



export function DefaultAppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const pathname = usePathname();
  const pinned = useHeadroom({ fixedAt: 140 });

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleContacts = () => {
    const contacts = document.getElementById("contacts");
    if (contacts) {
      setTimeout(() => {
        contacts.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }

   
  
  };

  return (
    <AppShell
      header={{ height: 80, collapsed: !pinned, offset: false }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header>
        <div className="flex h-full w-full items-center justify-center bg-zinc-50 transition-colors duration-200 ease-in-out dark:bg-black dark:text-white">
          <div className="relative flex w-full max-w-1xl items-center justify-between px-2">
            {/* b*/}
            <div className="flex items-center space-x-2">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
              />

              <Link
                href={"/"}
                className="flex items-center justify-center gap-3 rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-blue-800 hover:ring-1 hover:ring-blue-900"
              >
             
                <div className="font-semibold text-3xl">DotaJet</div>
              </Link>
            </div>

            <Box
              visibleFrom="sm"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform space-x-4"
            >
              <Button
                component={Link}
                href="/"
                size="l"
                radius="xl"
                variant={pathname === "/" ? "filled" : "subtle"}
                classNames={{
                  label: "text-black dark:text-inherit",
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                href="/portfolio"
                size="m"
                radius="xl"
                variant={
                  pathname.startsWith("/portfolio") ? "filled" : "subtle"
                }
                classNames={{
                  label: "text-black dark:text-inherit",
                }}
              >
                Blog
              </Button>
              {/* <Button
                component={Link}
                href="/blog"
                size="xs"
                radius="xl"
                variant={pathname.startsWith("/blog") ? "filled" : "subtle"}
                classNames={{
                  label: "text-black dark:text-inherit",
                }}
              >
                Blogs
              </Button> */}
              <Button
                component={Link}
                href="#contacts"
                size="m"
                radius="xl"
                variant={"subtle"}
                classNames={{
                  label: "text-black dark:text-inherit",
                }}
                onClick={handleContacts}
              >
                Contacts
              </Button>
            </Box>

            <ToggleTheme />
          </div>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="xs" mt={80}>
        <NavLink
          label="Home"
          onClick={toggle}
          component={Link}
          href="/"
          active={pathname === "/"}
        />

        <NavLink
          label="Portfolio"
          onClick={toggle}
          component={Link}
          href="/portfolio"
          active={pathname.startsWith("/portfolio")}
        />

        {/* <NavLink
          label="Blogs"
          onClick={toggle}
          component={Link}
          href="/blog"
          active={pathname.startsWith("/blog")}
        /> */}

        <NavLink
          label="Contacts"
          onClick={() => {
            toggle();
            handleContacts();
          }}
          component={Link}
          href="#contacs"
        />
      </AppShell.Navbar>

      <AppShell.Main
        className="bg-zinc-50 transition-colors duration-300 ease-in-out text-5xl dark:bg-black dark:text-white"
        pt={`calc(${rem(100)} + var(--mantine-spacing-md))`}
      >
        {children}
      </AppShell.Main>

      <footer className="w-full text-2xl bg-zinc-50 dark:bg-black dark:text-white">
        <Container className="mt-12 space-y-12 p-4">
          {/* socials + contacts  */}
          <div
            id="contacts"
            className="flex flex-col items-center justify-center space-y-6 rounded-lg lg:flex-row lg:space-x-8 lg:space-y-0"
          >
            <Link
              href={"mailto:wjess1010@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 duration-300 hover:text-blue-400"
            >
              <IconMail size={40} />
              <div>wjess1010@gmail.com</div>
            </Link>

            <Link
              href={"https://www.linkedin.com/in/william-jess-4a982a97/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 duration-300 hover:text-blue-400"
            >
              {/* edit the icon so that it resize bigger and glow when hoverring */}
              <IconBrandLinkedin size={40} />
              <div>@William Jess</div>
            </Link>

            <Link
              href={"https://github.com/williamjess"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 duration-300 hover:text-blue-400"
            >
              <IconBrandGithub size={35} />
              <div>@williamjessdev</div>
            </Link>

            <Link
              href={"https://www.dotabuff.com/players/197580949"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 duration-300 hover:text-blue-400"
            >
              
              <div>@DAMAGE</div>
            </Link>
            
            
          </div>

          {/* most bottom */}
          <div className="flex flex-col items-center justify-center space-x-2 sm:flex-row">
            <div>© {currentYear} DAMAGE DOTA </div>
            
            <div>•</div>
            <div>
              Powered by{" "}
              <Link
                href={"https://nextjs.org/"}
                target="_blank"
                rel="noopener noreferrer"
                className="underline duration-300 hover:text-blue-400"
              >
                Next.js
              </Link>{" "}
              and{" "}
              <Link
                href={"https://tailwindcss.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="underline duration-300 hover:text-blue-400"
              >
                Tailwind CSS
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </AppShell>
  );
}
