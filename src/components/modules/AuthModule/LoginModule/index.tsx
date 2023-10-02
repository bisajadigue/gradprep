import { Button, GenericCard } from "@/components/elements";
import Head from "next/head";
import Image from "next/image";
import { RiGoogleFill } from "react-icons/ri";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const { data: sessionData } = useSession();
  const router = useRouter()

  useEffect(() => {
    sessionData ? setTimeout(() => {void router.push("/")}, 3000) : ''
  }, [router, sessionData])

  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero */}
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-primary">
        <GenericCard className="min-w-[40vh] min-h-[60vh] flex flex-col items-center justify-center gap-y-3">
          <Image 
            src="/gradprep.png"
            width={120}
            height={120}
            alt="gradprep logo"
            className="mb-7"
          />
          <p>Selamat datang kembali!</p>
          {sessionData ? <p>Anda sudah logged in.</p> : <Button 
            variant={"white"} 
            size={"md"} 
            className="w-fit"
            onClick={() => void signIn()}
          >
            <p>Login dengan Google</p>
            <RiGoogleFill />
          </Button>}
        </GenericCard>
      </main>
    </>
  );
}
