"use client";
import {
  Box,
  Burger,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { Iconify } from "./icon";
import Link from "next/link";
import BookButton from "./bookButton";
import { paths } from "@/lib/route";

const services = [
  {
    title: "All Services",
    link: paths.SERVICES,
  },
  {
    title: "Digital Transformation",
    link: "#",
  },
  {
    title: "IT Support",
    link: "#",
  },
  {
    title: "Data & Automation",
    link: "#",
  },
  {
    title: "Consulting",
    link: "#",
  },
  {
    title: "Application Service",
    link: "#",
  },
  {
    title: "Artificial Intelligence",
    link: "#",
  },
  {
    title: "Enterprise Networking",
    link: "#",
  },
  {
    title: "Cyber Security",
    link: "#",
  },
  {
    title: "IT Infrastructure",
    link: "#",
  },
];

const products = [
  {
    title: "All Products",
    link: "#",
  },
  {
    title: "Dominion Digital",
    link: "#",
  },
  {
    title: "Pension Pilot",
    link: "#",
  },
];

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [servicesOpened, { toggle: toggleServices }] = useDisclosure(false);
  const [productsOpened, { toggle: toggleProducts }] = useDisclosure(false);

  return (
    <Box className="bg-grey">
      <header className="container mx-auto px-3 h-24">
        <Group justify="space-between" h="100%">
          <Link href={paths.HOME}>
            <Image
              alt="Dominion Logo"
              src="/images/logo.svg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-44"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            <Link href={paths.ABOUT}>About</Link>
            <HoverCard
              width={500}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
              withArrow
            >
              <HoverCard.Target>
                <Center inline>
                  <Box component="span" mr={5} className="cursor-pointer">
                    Services
                  </Box>
                  <Iconify
                    icon="iconamoon:arrow-down-2-light"
                    className="text-2xl"
                  />
                </Center>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid cols={2} spacing={16}>
                  {services.map((service) => (
                    <Link key={service.link} href={service.link}>
                      {service.title}
                    </Link>
                  ))}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>

            <HoverCard
              width={"max-content"}
              position="bottom"
              radius="md"
              shadow="md"
              withArrow
              withinPortal
            >
              <HoverCard.Target>
                <Center inline>
                  <Box component="span" mr={5} className="cursor-pointer">
                    Products
                  </Box>
                  <Iconify
                    icon="iconamoon:arrow-down-2-light"
                    className="text-2xl"
                  />
                </Center>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <SimpleGrid cols={1} spacing={16}>
                  {products.map((service) => (
                    <Link key={service.link} href={service.link}>
                      {service.title}
                    </Link>
                  ))}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="#">Contact</Link>
          </div>

          <Group visibleFrom="sm">
            <BookButton />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={
          <Image
            alt="Dominion Logo"
            src="/images/logo.svg"
            width={0}
            height={0}
            sizes="100vw"
            className="w-44"
          />
        }
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Divider my="sm" />

        <ScrollArea h="calc(100vh - 200px)" mx="-md" px={16}>
          <div className="space-y-8">
            <Link className="block" href={paths.ABOUT}>
              About
            </Link>

            <Box className="space-y-4">
              <UnstyledButton onClick={toggleServices}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Services
                  </Box>
                  <Iconify
                    icon="iconamoon:arrow-down-2-light"
                    className="text-xl"
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={servicesOpened}>
                <SimpleGrid cols={1} spacing={16} px={16}>
                  {services.map((service) => (
                    <Link key={service.link} href={service.link}>
                      {service.title}
                    </Link>
                  ))}
                </SimpleGrid>
              </Collapse>
            </Box>

            <Box className="space-y-4">
              <UnstyledButton onClick={toggleProducts}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Products
                  </Box>
                  <Iconify
                    icon="iconamoon:arrow-down-2-light"
                    className="text-xl"
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={productsOpened}>
                <SimpleGrid cols={1} spacing={16} px={16}>
                  {products.map((service) => (
                    <Link key={service.link} href={service.link}>
                      {service.title}
                    </Link>
                  ))}
                </SimpleGrid>
              </Collapse>
            </Box>

            <Link className="block" href="#">
              Contact
            </Link>
          </div>
        </ScrollArea>

        <Divider my="sm" />

        <Group justify="center" grow pb="xl" px="md">
          <BookButton />
        </Group>
      </Drawer>
    </Box>
  );
};
export default Navbar;
