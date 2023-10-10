import Link from "next/link";
import router, { useRouter } from "next/router";
import { Button } from "../Button";
import { type NavbarProps } from "./interface";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { RiArrowDropDownFill, RiArrowDropRightFill } from "react-icons/ri";

export const CustomNavbar: React.FC<NavbarProps> = () => {
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  const { data: sessionData } = useSession();
  const router = useRouter()

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

  useEffect(() => {
    setIsShowDropdown(false);
  }, [router.pathname])

  return (
    <nav
      id="navbar"
      className={`absolute z-50 flex w-[95vw] md:w-[90vw] px-[2vw] md:px-[4vw] mx-[5vw] py-3 my-6 transition-all duration-[1s] [&>*]:z-50 bg-white/90 rounded-[15px] shadow-md`}
    >
      <div className="relative flex w-full">
        <Link href="/" className="hidden md:inline-block w-fit text-primary drop-shadow-lg mx-[1vw]">
          <h3>GradPrep</h3>
        </Link>
        <div className="flex w-full justify-center gap-x-[4vw] font-bold">
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
            <div className="inline-flex items-center">
              <Image
                src={sessionData.user.image!}
                width={36}
                height={36}
                alt="profile picture"
                className="rounded-full w-[36px] h-[36px]"
              />
              <div className="relative inline-block text-left">
                <button type="button" className="flex px-2 items-center transition-all" onClick={() => setIsShowDropdown(prev => !prev)}>
                  { isShowDropdown? <RiArrowDropRightFill size={36} /> : <RiArrowDropDownFill size={36}/> }
                </button>
                
                { isShowDropdown ? <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <div className="py-3 px-6 gap-y-2 flex flex-col" role="none">
                    <p className="font-bold">{sessionData.user.name}</p>
                    <hr />
                    <Link href={'/user/profile'}>
                      <p>Profile</p>
                    </Link>
                    <Link href={'/logout'}>
                      <p>Sign Out</p>
                    </Link>
                  </div>
                </div> : <></> }
              </div>

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
