
import React, {
  type Dispatch,
  type SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { useRouter } from "next/router";
import useAccessToken from "@/components/hooks/useAccessToken";
import useIsRendered from "@/components/hooks/useIsRendered";

interface IAuthContext {
  logout?: () => void;
  isAuthenticated?: boolean;
  userData?: unknown; // TODO
  role?: string;
  active?: boolean;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>
  teamName?: string;
  saveToken?: (token: string) => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthContextProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const isRendered = useIsRendered();
  const [userData, setUserData] = useState<string | undefined>(undefined);
  const [role, setRole] = useState<"MENTOR" | "CUSTOMER" | undefined>(undefined);
  const [active, setActive] = useState<boolean | undefined>(undefined);
  const {
    getAccessToken,
    removeAccessToken,
    setAccessToken,
    forceGetAccessToken,
  } = useAccessToken();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    Boolean(getAccessToken())
  );
  const [error, setError] = useState<string | undefined>();

  const saveToken = useCallback((token: string) => {
    setAccessToken(token);
    setIsAuthenticated(true);
    void router.push('/');
  }, [router, setAccessToken])

  useEffect(() => {
    if (Boolean(getAccessToken())) {
      // TODO: fetch user Data
    } else {
      setUserData(undefined);
      setRole(undefined);
      setActive(undefined);
      setIsAuthenticated(false);
    }
  }, [forceGetAccessToken, getAccessToken, isAuthenticated]);

  const logout = useCallback(() => {
    removeAccessToken();
    setIsAuthenticated(false);
  }, [removeAccessToken, setIsAuthenticated]);

  const authContextProviderValue = useMemo(
    () => ({
      ...(isRendered && {
        userData,
        role,
        active,
        isAuthenticated,
        logout,
        error,
        saveToken
      }),
    }),
    [
      isRendered,
      userData,
      role,
      active,
      logout,
      isAuthenticated,
      error,
      saveToken,
    ]
  );

  return (
    <AuthContext.Provider value={authContextProviderValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};