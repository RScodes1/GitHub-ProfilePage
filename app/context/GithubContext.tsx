// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// interface UserData {
//   login: string;
//   id: number;
//   avatar_url: string;
//   [key: string]: any;
// }

// interface RepoData {
//   id: number;
//   name: string;
//   html_url: string;
//   [key: string]: any;
// }

// interface GitHubContextType {
//   userData: UserData | null;
//   setUserData: (data: UserData | null) => void;

//   repos: RepoData[];
//   setRepos: (data: RepoData[]) => void;
// }

// interface GitHubProviderProps {
//   children: ReactNode;
// }

// const GitHubContext = createContext<GitHubContextType | null>(null);

// export function GitHubProvider({ children }: GitHubProviderProps) {
//   const [userData, setUserData] = useState<UserData | null>(null);
//   const [repos, setRepos] = useState<RepoData[]>([]);

//   return (
//     <GitHubContext.Provider value={{ userData, setUserData, repos, setRepos }}>
//       {children}
//     </GitHubContext.Provider>
//   );
// }

// export function useGitHub() {
//   const ctx = useContext(GitHubContext);
//   if (!ctx) throw new Error("useGitHub must be inside GitHubProvider");
//   return ctx;
// }
