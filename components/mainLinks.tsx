import {
  BookImage,
  CircleUserRound,
  Home,
  Loader2,
  LogIn,
  Menu,
  SwatchBook,
} from "lucide-react";
import NavLinks from "./navLinks";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  ClerkLoaded,
  ClerkLoading,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  {
    label: "Home",
    icon: <Home className=" w-5" />,
    url: "/",
  },
  {
    label: "About",
    icon: <CircleUserRound className=" w-5" />,
    url: "/about",
  },
  {
    label: "Projects",
    icon: <BookImage className=" w-5" />,
    url: "/projects",
  },
  {
    label: "Blog",
    icon: <SwatchBook className=" w-5" />,
    url: "/blog",
  },
];

export default function MainLinks() {
  return (
    <>
      <div className=" flex items-center justify-center md:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className=" w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-start mt-[3rem] ">
              {links.map((link) => (
                <NavLinks
                  key={link.label}
                  label={link.label}
                  icon={link.icon}
                  url={link.url}
                />
              ))}
              <ClerkLoading>
                <Loader2 className=" h-4 w-4 animate-spin" />
              </ClerkLoading>
              <ClerkLoaded>
                <SignedOut>
                  <SignInButton>
                    <Button size="icon" variant="ghost">
                      <LogIn className=" w-5 " />
                      <span className=" sr-only ">sign in</span>
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </ClerkLoaded>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className=" hidden md:flex items-center gap-2 ">
        {links.map((link) => (
          <NavLinks
            key={link.label}
            label={link.label}
            icon={link.icon}
            url={link.url}
          />
        ))}
        <ClerkLoading>
          <Loader2 className=" h-4 w-4 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignInButton>
              <Button size="icon" variant="ghost">
                <LogIn className=" w-5 " />
                <span className=" sr-only ">sign in</span>
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkLoaded>
      </div>
    </>
  );
}
