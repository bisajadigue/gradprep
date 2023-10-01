import Link from "next/link";
import router from "next/router";
import { Button } from "../Button";
import { type NavbarProps } from "./interface";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export const CustomNavbar: React.FC<NavbarProps> = () => {
  const { data: sessionData } = useSession();

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
      className={`fixed z-50 flex w-[90vw] mx-[5vw] my-6 px-[4vw] py-3 transition-all duration-[1s] [&>*]:z-50 bg-white rounded-[15px] shadow-md`}
    >
      <div className="relative flex w-full font-bold">
        <Link href="/" className="inline-block w-fit text-primary drop-shadow-lg">
          <h3>GradPrep</h3>
        </Link>
        <div className="flex w-full justify-center gap-x-[4vw]">
          <Link href={"/tests"} className="my-auto text-primary drop-shadow-lg">
            Mock Test
          </Link>
          <Link href={"/programs"} className="my-auto text-primary drop-shadow-lg">
            Programs and Scholarship
          </Link>
          <Link href={"/mentors"} className="my-auto text-primary drop-shadow-lg">
            Find a Mentor
          </Link>
        </div>
        <div className="relative my-auto inline-flex h-fit">
          {sessionData ? (
            <div className="inline-flex">
              <Link className="my-auto align-middle flex items-center gap-x-2" href="/user/profile">
                <Image
                  src={sessionData.user.image!}
                  width={50}
                  height={50}
                  alt="profile picture"
                  className="rounded-full"
                />
              </Link>
              <Link href={'/logout'}>
                sign out (temp)
              </Link>
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
