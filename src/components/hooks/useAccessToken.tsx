import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import useIsRendered from "./useIsRendered";

interface UseAccessTokenFeatures {
  setAccessToken: (new_access_token: string) => void;
  forceGetAccessToken: () => string;
  getAccessToken: () => string | undefined;
  removeAccessToken: () => void;
}

export default function useAccessToken(): UseAccessTokenFeatures {
  const isRendered = useIsRendered();
  const router = useRouter();
  const setAccessToken = useCallback((new_access_token: string) => {
    const inOneHour = 1 / 24;
    Cookies.set("access-token", new_access_token, { expires: inOneHour * 3 });
  }, []);
  const forceGetAccessToken = useCallback(() => {
    if (Cookies.get("access-token")) {
      return String(Cookies.get("access-token") ?? "");
    }
    void router.push("/login");
    return "";
  }, [router]);
  const getAccessToken = useCallback(() => {
    return Cookies.get("access-token");
  }, []);
  const removeAccessToken = useCallback(() => {
    Cookies.remove("access-token");
  }, []);

  return useMemo(
    () => ({
      setAccessToken,
      forceGetAccessToken: isRendered ? forceGetAccessToken : () => "",
      getAccessToken: getAccessToken,
      removeAccessToken,
    }),
    [
      setAccessToken,
      forceGetAccessToken,
      getAccessToken,
      removeAccessToken,
      isRendered,
    ],
  );
}
