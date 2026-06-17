"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  User,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "@/lib/firebase";

export interface UserProfile {

  uid: string;

  name: string;

  email: string;

  phone: string;

  role: "customer" | "admin";

  premium: boolean;

  plan: string | null;

  paymentStatus:
    | "pending"
    | "waiting_confirmation"
    | "paid";

  premiumAt?: any;

  expiredAt?: any;

  selectedTheme: string;

  createdAt?: any;

  updatedAt?: any;

}

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  logout: async () => {},
});

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [profile, setProfile] =
    useState<UserProfile | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (currentUser) => {
          try {
            setUser(currentUser);

            if (currentUser) {
              const ref = doc(
                db,
                "users",
                currentUser.uid
              );

              const snapshot =
                await getDoc(ref);

              if (snapshot.exists()) {
                setProfile(
                  snapshot.data() as UserProfile
                );
              } else {
                setProfile(null);
              }
            } else {
              setProfile(null);
            }
          } catch (error) {
            console.error(
              "AuthProvider Error:",
              error
            );
            setProfile(null);
          } finally {
            setLoading(false);
          }
        }
      );

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}