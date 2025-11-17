'use client';

import React, { useEffect, useState } from "react";
import ECharts from 'echarts-for-react';
import { getUserProfile } from "./lib/github";
import GitHubTabs from "./components/githubTabs";
// import { useGitHub } from "./context/GitHubContext";


export default function GitHubProfilePage() {

  const [githubData, setGithubData] = useState<GithubDataState>({
          heatMapData: [],
          range: ["", ""]
        });
  // const { setUserData, setRepos } = useGitHub();

    const [user, setUser] = useState<any>(null);
    const [active, setActive] = useState("overview");
    const [total, setTotal] = useState(0);
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

  interface ContributionDay {
  date: string;
  contributionCount: number;
}
interface GithubDataState {
  heatMapData: [string, number][];
  range: [string, string];
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  totalContributions: number;
  weeks: ContributionWeek[];
}


 async function getContributions(username: string) {
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            months {
              name
              year
              firstDay
              totalWeeks
            }
            weeks {
              contributionDays {
                date
                weekday
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const json = await res.json();
  return json.data.user.contributionsCollection.contributionCalendar;
}

useEffect(() => {
  async function fetchData() {
    const username = "shreeramk";
    const calendar = await getContributions(username)as ContributionCalendar;
;

    console.log({ calendar });
    setTotal(calendar.totalContributions);

    const heatMapData: [string, number][] = [];

    calendar.weeks.forEach((week: ContributionWeek) => {
      week.contributionDays.forEach((day : ContributionDay ) => {
        heatMapData.push([
          day.date,              // YYYY-MM-DD
          day.contributionCount  // number
        ]);
      });
    });

    const start = heatMapData[0][0];
    const end = heatMapData[heatMapData.length - 1][0];

    setGithubData({
      heatMapData,
      range: [start, end]
    });
  }

  fetchData();
}, []);


 

  useEffect(() => {
    async function fetchData() {
      const data = await getUserProfile("shreeramk");
      setUser(data);
    }
    fetchData();
  }, []);

  if (!user) return <div>Loading...</div>;

const repoInfo = [
   {
    repo_name : "Complete-Python-3-Bootcamp",
    forked_from : "Pierian-Data/Complete-Python-3-Bootcamp",
    description : "Course Files for Complete Python 3 Bootcamp Course on Udemy",
    color : "#DA5B0B",
    tech_stack: "Jupyter Notebook"
   },
   {
    repo_name : "flutter_login_ui",
    forked_from : "MarcusNg/flutter_login_ui",
    description : "https://youtu.be/6kaEbTfb444",
    color : "#00B4AB",
    tech_stack: "Dart"
   },
      {
    repo_name : "gitignore",
    forked_from : "github/gitignore",
    description : "A collection of useful .gitignore templates",
    color : "#f0f0f0",
    tech_stack: ""
   },
    {
    repo_name : " node-opcua-logger",
    forked_from : "coussej/node-opcua-logger",
    description : "An OPCUA Client for logging data to InfluxDB! 🔌 🏭",
    color : "#f1e05a",
    tech_stack: "JavaScript"
   },
     {
    repo_name : "kafkajs",
    forked_from : "tulios/kafkajs",
    description : "A modern Apache Kafka client for node.js",
    color : "#f1e05a",
    tech_stack: "JavaScript"
   },
    {
    repo_name : " node-opcua-1",
    forked_from : "node-opcua/node-opcua",
    description : "an implementation of a OPC UA stack fully written in javascript and nodejs - http://node-opcua.github.io/",
    color : "#3178c6",
    tech_stack: "TypeScript"
   }
]
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <div className="w-full bg-gray-100">
      <header className="w-full bg-gray-100 p-3 flex justify-between items-center">
   
     <div className="flex gap-3" >
            <div className="p-2 border gray-200 border rounded">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-three-bars"><path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path></svg>
            </div>
            <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="octicon octicon-mark-github v-align-middle"><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path></svg>
              <h3 className="text-l hover:bg-gray-200 p-1 rounded text-center justify-center font-semibold">shreeramk</h3>
          </div>
      
        <div className="flex items-center gap-4">
          <div className="flex gap-2" > 
            <div className="relative w-70">
              {/* Search Icon */}
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black-400">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    className="octicon octicon-search"
                  >
                    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
                  </svg>
                </span>

                {/* Input with slash inside placeholder */}
                <input
                  type="text"
                  placeholder="Type to / search"
                  className="w-full pl-10 h-8 py-2 border rounded-md focus:outline-none"
                />
              </div>
            <div className="border-gray-200 p-2 h-8 w-14 rounded border" >
                <span className="flex gap-1 justify-between" >
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-copilot Button-visual">
                            <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
                      </svg>
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down Button-visual">
                          <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
                      </svg>
                  </span>
               </div>
            <div className="border-gray-200 p-2 h-8 w-14 rounded border" >

                <span className=" flex gap-1 justify-between" >
                    <span className="Button-visual Button-leadingVisual">
                      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-plus"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
                      </svg>
                    </span>
                    
                <span className="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-triangle-down">
                    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg>
                  </span>
             </span>
             </div>
            <div className="text-gray-300 border-gray-200 p-2 h-8 w-8 rounded border" >
                   <svg aria-hidden="true" height="16" widths = "16"viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-opened Button-visual"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
            </div>
            <div className="text-gray-300  hover:text-gray-100 border-gray-200 p-2 h-8 w-8 rounded border" >
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-git-pull-request Button-visual"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
          </div>
            <div className="border-gray-200 p-2 h-8 w-8 rounded border" >
                   <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-inbox Button-visual"><path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path></svg>
              </div>
            <img className="w-8 h-8 rounded-full mx-auto" src={user.avatar_url} ></img>
          </div>
        </div>
      </header>
       <GitHubTabs/>
        </div>

      <main className="max-w-6xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 space-y-4">

          <div className="bg-white p-4 rounded-xl">
            <img className="w-60 h-60 rounded-full mx-auto"  src={user.avatar_url}></img>
                <h1 className="mt-3 text-left text-xl font-semibold">{user.name}</h1>
                <p className="text-left text-gray-600">{user.login}</p>
          </div>
          <div className="bg-white p-4 mt-[-30] rounded-xl ">
            <p className="text-gray-800 text-sm">{user.bio}</p>
            <p className="text-center hover:bg-gray-200 h-10 bg-gray-100 border-gray-100 rounded p-2 mt-3 border" >Edit profile</p>
             <div className="flex items-center gap-3 text-sm mt-3">
          <a href={user.followers_url} target="_blank">
            <div className="flex gap-1" >
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-people"><path d="M2 5.5a3.5 3.5 0 1 1 5.898 2.549 5.508 5.508 0 0 1 3.034 4.084.75.75 0 1 1-1.482.235 4 4 0 0 0-7.9 0 .75.75 0 0 1-1.482-.236A5.507 5.507 0 0 1 3.102 8.05 3.493 3.493 0 0 1 2 5.5ZM11 4a3.001 3.001 0 0 1 2.22 5.018 5.01 5.01 0 0 1 2.56 3.012.749.749 0 0 1-.885.954.752.752 0 0 1-.549-.514 3.507 3.507 0 0 0-2.522-2.372.75.75 0 0 1-.574-.73v-.352a.75.75 0 0 1 .416-.672A1.5 1.5 0 0 0 11 5.5.75.75 0 0 1 11 4Zm-5.5-.5a2 2 0 1 0-.001 3.999A2 2 0 0 0 5.5 3.5Z"></path> </svg>
            <b>{user.followers}</b>followers<span className="text-center">.</span>
            </div>
          </a>
          <a href={`${user.html_url}?tab=following`} target="_blank">
            <b>{user.following}</b> following
          </a>
        </div>
          </div>
          <div className="bg-white p-4 mt-[-20] rounded-xl ">
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex gap-2">
                <svg className="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg>
                <div>{user.company}</div> 
              </li>

              <li className="flex gap-2">
                <svg className="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path></svg>
                 <div>{user.location}</div>
              </li>

              <li className="flex gap-2">
                 <svg className="octicon octicon-mail" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>
                  <a
                    className="hover:text-blue-500 text-sm block"
                    href="mailto:kushwaha.shreeram@gmail.com" target="_blank">
                     <div>
                      kushwaha.shreeram@gmail.com
                    </div>       
                  </a>
                 
                   
              </li>

             <li className="flex gap-2">
                 <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-link"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>
                 {user.blog && (
                  <a
                      className="hover:text-blue-500 text-sm block"
                    href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                    target="_blank"
                  >
                    {user.blog}
                  </a>
                )}
              </li>

              <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="a5vg6xrnqp421t2bs6155uiokeajtre5" className="octicon"><title id="a5vg6xrnqp421t2bs6155uiokeajtre5">LinkedIn</title><g clipPath="url(#clip0_202_91845)"><path d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z" fill="currentColor"></path></g></svg>
               <a
                   className="hover:text-blue-500 text-sm block"
               href="https://t.co/wyp2OnWr7e">
                  <div>in/shreeramkushwaha</div>
                </a>
            
              </li>
              <li className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16" role="img" aria-labelledby="ap27q8c3cphxvth4eexd7syzqsbhrour" className="octicon"><title id="ap27q8c3cphxvth4eexd7syzqsbhrour">X</title><path fill="currentColor" d="M9.332 6.925 14.544 1h-1.235L8.783 6.145 5.17 1H1l5.466 7.78L1 14.993h1.235l4.78-5.433 3.816 5.433H15L9.332 6.925ZM7.64 8.848l-.554-.775L2.68 1.91h1.897l3.556 4.975.554.775 4.622 6.466h-1.897L7.64 8.848Z"></path></svg>
                 {user.twitter_username && (
                    <a
                      className="hover:text-blue-500 text-sm block"
                      href={`https://twitter.com/${user.twitter_username}`}
                      target="_blank"
                    >
                   @{user.twitter_username}
                   </a>
                 )}
              </li>
            </ul>
          </div>
          <div className="border-top color-border-muted pt-3 mt-3 d-none d-md-block">
            <h2 className="h4 mb-2">
               <a href="/shreeramk?tab=achievements" className="Link--primary mb-2">Achievements</a>
            </h2>
          <div className="d-flex flex">
            <a href="/shreeramk?achievement=quickdraw&amp;tab=achievements" className="position-relative">
                <img src="https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png" data-hovercard-type="achievement" data-hovercard-url="/users/shreeramk/achievements/quickdraw/detail?hovercard=1" width="64" alt="Achievement: Quickdraw" data-view-component="true" className="achievement-badge-sidebar" aria-keyshortcuts="Alt+ArrowUp"></img>
             </a>
            <a href="/shreeramk?achievement=yolo&amp;tab=achievements" className="position-relative">
                <img src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png" data-hovercard-type="achievement" data-hovercard-url="/users/shreeramk/achievements/yolo/detail?hovercard=1" width="64" alt="Achievement: YOLO" data-view-component="true" className="achievement-badge-sidebar" aria-keyshortcuts="Alt+ArrowUp"></img>
          </a>
             <a href="/shreeramk?achievement=pull-shark&amp;tab=achievements" className="position-relative"><img src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" data-hovercard-type="achievement" data-hovercard-url="/users/shreeramk/achievements/pull-shark/detail?hovercard=1" width="64" alt="Achievement: Pull Shark" data-view-component="true" className="achievement-badge-sidebar" aria-keyshortcuts="Alt+ArrowUp"></img>
             <span data-view-component="true" className="Label achievement-tier-label achievement-tier-label--gold text-small text-bold color-shadow-medium px-2 py-0 mb-1 position-absolute right-0 bottom-0">x4</span></a>
              </div>
          </div>
           <div>
               <h2 className="h4 mb-2">
               <a href="/shreeramk?tab=achievements" className="Link--primary mb-2">Organisations</a>
            </h2>
           </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="md:col-span-3 space-y-6">
          {/* REPO CARDS */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Popular repositories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repoInfo.map((repo, index) => (
                  <div key={index} className="bg-white border-gray-200 p-4 rounded-xl  border">
                <div className="flex"> 
                   <h3 className="font-medium text-blue-800  hover:underline underline-offset-2 cursor-pointer flex items-center gap-2">
                  {repo.repo_name}
                  </h3>
                  <div className="ml-auto">
                      <span className="pointer-events-none text-xs text-black px-2 py-0.5 border-gray-200 rounded-full border">Public</span>
                  </div>
                </div>

                {repo.forked_from && (
                 <p className="text-xs text-gray-500 mt-1">
                  forked from{" "}
                  <a
                    href={repo.forked_from}
                    className="underline text-gray-500 hover:text-blue-700 "
                  >
                    {repo.forked_from}
                  </a>
                </p>

                )}

                <p className="text-sm text-gray-600 mt-2">{repo.description}</p>

                <div className="flex items-center gap-2 mt-3">
                  <span
                    className="inline-block w-3 h-3 rounded-full"
                    style={{ backgroundColor: repo.color }}
                  ></span>
                  <span className="text-xs text-gray-700">{repo.tech_stack || "Unknown"}</span>
                </div>
              </div>
              ))}

            </div>
          </div>

          {/* CONTRIBUTION GRAPH */}
          <div className="bg-white p-4 rounded-xl "> 
              <h2 className="text-m mt-5"> 
                  {total && (
                <span>
                  {total}
                </span>
              )} contributions in the last year</h2>
  
          <div className="flex gap-6 items-start">
          {/* LEFT: Heatmap card */}
           <div className="flex-1 max-w-[750px] flex flex-col">

  {/* RIGHT-ALIGNED DROPDOWN */}
  <div className="inline-flex items-center px-2 py-1 ml-auto mt-[-20] hover:text-blue-400 rounded-md">
    <p className="mr-2 text-right text-gray-600 text-sm">
      Contribution settings
    </p>
    <svg
      aria-hidden="true"
      height="16"
      width="16"
      viewBox="0 0 16 16"
      className="octicon octicon-triangle-down"
    >
      <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"/>
    </svg>
  </div>

  {/* MAIN BOX */}
  <div className="border rounded-md border-gray-100 flex flex-col gap-3 mt-3">

    {/* CHART */}
    <div className="w-full h-[220px] mt-[-70] p-1">
      <ECharts
        style={{ width: "100%", height: "100%" }}
        option={{
          tooltip: {
            position: "top",
            formatter: (p: { data: [string, number] }) => {
              const [date, count] = p.data;
              const [y, m, d] = date.split("-");
              const day = parseInt(d, 10);
              const monthName = [
                "January","February","March","April","May","June",
                "July","August","September","October","November","December"
              ][parseInt(m, 10) - 1];
              const suffix =
                day % 10 === 1 && day !== 11 ? "st" :
                day % 10 === 2 && day !== 12 ? "nd" :
                day % 10 === 3 && day !== 13 ? "rd" : "th";
              return `${count} contributions on ${monthName} ${day}${suffix}`;
            }
          },

          visualMap: {
            min: 0,
            max: 20,
            show: false,
            inRange: {
              color: ["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"]
            }
          },

          calendar: {
            top: 125,
            left: 40,
            right: 10,
            bottom: 10,
            cellSize: [12, 12],
            range: githubData.range || ['2024-01-01','2024-12-31'],
            orient: "horizontal",
            splitLine: { show: false },
            itemStyle: { borderWidth: 1, borderColor: "#fff" },
            yearLabel: { show: false },
            monthLabel: { nameMap: "en", margin: 10, fontSize: 11 },
            dayLabel: {
              margin: 8,
              fontSize: 12,
              nameMap: ["", "Mon", "", "Wed", "", "Fri", ""],
            }
          },

          series: [
            {
              type: "heatmap",
              coordinateSystem: "calendar",
              data: githubData.heatMapData,
            }
          ]
        }}
      />
    </div>

    <p className="text-xs ml-11 mt-[-14] mb-5 hover:text-blue-400 text-gray-600">
      Learn how we count contributions
    </p>
       <p className="text-xs mt-[-48] mr-18 mb-5 hover:text-blue-400 text-right text-gray-600">
      Less More
    </p>

  </div>
</div>


          {/* RIGHT: Year selector */}
          <div className="w-28 mt-[-25] ">
            <div className="p-2">
              <ul className="space-y-3 text-sm pl-1">
                {["2025","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013"].map((y, idx) => (
                    <li
                      key={y}
                      className={`text-center px-2 py-2 rounded-md text-sm ${
                        idx === 0 ? "bg-blue-600 text-white font-medium" : "bg-white hover:bg-gray-100 text-gray-700"
                      }`}
                        >
                          {y}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

          </div>
        </section>
      </main>
      <footer className="mt-10 py-6 border-t border-gray-200 text-gray-500">
  <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 text-sm">

    {/* GitHub logo */}
   <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github">
    <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path>
</svg>

    <span>© 2025 GitHub, Inc.</span>

    {/* Links */}
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Terms</a>
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Privacy</a>
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Security</a>
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Status</a>
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Community</a>
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Docs</a>
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Contact</a>
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Manage cookies</a>
    <a className="hover:text-blue-700 hover:underline underline-offset-2 cursor-pointer" href="#">Do not share my personal information</a>
  </div>
</footer>

    </div>
  );
}
