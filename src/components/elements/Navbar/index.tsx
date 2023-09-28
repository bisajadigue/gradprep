import { useAuthContext } from "@/components/contexts";
import Link from "next/link";
import router from 'next/router';
import { Button } from "../Button";
import { type NavbarProps } from "./interface";
import { useEffect } from "react";

export const CustomNavbar: React.FC<NavbarProps> = () => {
  
  const { userData, isAuthenticated, logout } = useAuthContext() || {};

  useEffect(() => {
    window.onscroll = function() {
      const currentScrollPos = window?.pageYOffset;
      if (200 > currentScrollPos) {
        document.getElementById("navbar")!.style.top = "0";
      } else {
        document.getElementById("navbar")!.style.top = "-120px";
      }
    } 
  }, [])

  return (
    <nav id="navbar" className={`flex w-full py-6 z-50 [&>*]:z-50 px-[8vw] fixed mix-blend-plus-lighter transition-all duration-[1s]`}>
      <div className="relative flex w-full text-sky-700 font-bold">
        <Link href="/" className="w-fit inline-block filter grayscale">
          <h3>GradPrep</h3>
        </Link>
        <div className="flex w-full justify-center gap-x-[4vw]">
          <Link href={"/tests"} className="my-auto filter grayscale">
            Mock Test
          </Link>
          <Link href={"/programs"} className="my-auto filter grayscale">
            Programs and Scholarship
          </Link>
          <Link href={"/mentors"} className="my-auto filter grayscale">
            Find a Mentor
          </Link>
        </div>
        <div className="relative inline-flex h-fit my-auto">
          { isAuthenticated && userData ? 
            <div className="inline-flex">
              <Link className=" align-middle my-auto" href="/dashboard">pp user here</Link>
              {/* TODO: DROPDOWN / USER */}
            </div>
            :
            <Button
              onClick={() => {void router.push("/login");} } 
              variant={"primary"} 
              size={"md"}
              className=""
            >
              Daftar
            </Button>
          }
        </div>
      </div>
    </nav>
  );
};