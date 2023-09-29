import { useAuthContext } from "@/components/contexts";
import Link from "next/link";
import router from "next/router";
import { Button } from "../Button";
import { type NavbarProps } from "./interface";
import { useEffect } from "react";

export const CustomNavbar: React.FC<NavbarProps> = () => {
  const { userData, isAuthenticated, logout } = useAuthContext() || {};

  useEffect(() => {
    window.onscroll = function () {
      const currentScrollPos = window?.pageYOffset;
      if (200 > currentScrollPos) {
        document.getElementById("navbar")!.style.top = "0";
      } else {
        document.getElementById("navbar")!.style.top = "-120px";
      }
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed z-50 flex w-full px-[8vw] py-6 mix-blend-plus-lighter transition-all duration-[1s] [&>*]:z-50`}
    >
      <div className="relative flex w-full font-bold text-sky-700">
        <Link href="/" className="inline-block w-fit grayscale filter">
          <h3>GradPrep</h3>
        </Link>
        <div className="flex w-full justify-center gap-x-[4vw]">
          <Link href={"/tests"} className="my-auto grayscale filter">
            Mock Test
          </Link>
          <Link href={"/programs"} className="my-auto grayscale filter">
            Programs and Scholarship
          </Link>
          <Link href={"/mentors"} className="my-auto grayscale filter">
            Find a Mentor
          </Link>
        </div>
        <div className="relative my-auto inline-flex h-fit">
          {isAuthenticated && userData ? (
            <div className="inline-flex">
              <Link className=" my-auto align-middle" href="/dashboard">
                pp user here
              </Link>
              {/* TODO: DROPDOWN / USER */}
            </div>
          ) : (
            <Button
              onClick={() => {
                void router.push("/login");
              }}
              variant={"primary"}
              size={"md"}
              className=""
            >
              Daftar
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};
