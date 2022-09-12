import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as auth from "../services/auth";
import { api } from "../services/axios";

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  isSigned: boolean;
  user: User | null;
  loading: boolean;
  signIn(a: string, b: string): Promise<void>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@appoffline:user");
      const storagedToken = await AsyncStorage.getItem("@appoffline:token");

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.common.Authorization = `Baerer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn(email: string, password: string) {
    const response = await auth.signIn(email, password);
    setUser(response.user);

    api.defaults.headers.common.Authorization = `Baerer ${response.token}`;

    await AsyncStorage.setItem(
      "@appoffline:user",
      JSON.stringify(response.user)
    );
    await AsyncStorage.setItem("@appoffline:token", response.token);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ isSigned: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
