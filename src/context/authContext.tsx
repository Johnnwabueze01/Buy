import { createContext, useContext, ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

type User = {
  name?: string;
  email?: string;
  image?: string;
};

const AuthContext = createContext({
  user: null as User | null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  return (
    <AuthContext.Provider value={{ user: session?.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);



/*import { createContext, useContext, ReactNode } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const AuthContext = createContext({
  user: null as any,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  return (
    <AuthContext.Provider value={{ user: session?.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
*/