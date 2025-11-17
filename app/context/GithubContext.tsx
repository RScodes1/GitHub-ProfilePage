// "use client";

// import { createContext, useContext, useState } from "react";

// const GitHubContext = createContext(null);

// export function GitHubProvider({ children }) {
//   const [userData, setUserData] = useState(null);   // stores user info
//   const [repos, setRepos] = useState([]);           // stores repo list

//   return (
//     <GitHubContext.Provider value={{ userData, setUserData, repos, setRepos }}>
//       {children}
//     </GitHubContext.Provider>
//   );
// }

// export function useGitHub() {
//   return useContext(GitHubContext);
// }
