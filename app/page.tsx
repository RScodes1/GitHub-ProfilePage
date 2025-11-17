import React from "react";

export default function GitHubProfilePage() {

const repoInfo = [
   {
    repo_name : "Complete-Python-3-Bootcamp",
    forked_from : "Forked from Pierian-Data/Complete-Python-3-Bootcamp",
    description : "Course Files for Complete Python 3 Bootcamp Course on Udemy",
    color : "#DA5B0B",
    tech_stack: "Jupyter Notebook"
   },
   {
    repo_name : "flutter_login_ui",
    forked_from : "Forked from MarcusNg/flutter_login_ui",
    description : "https://youtu.be/6kaEbTfb444",
    color : "#00B4AB",
    tech_stack: "Dart"
   },
      {
    repo_name : "gitignore",
    forked_from : "Forked from github/gitignore",
    description : "A collection of useful .gitignore templates",
    color : "#f0f0f0",
    tech_stack: ""
   },
    {
    repo_name : " node-opcua-logger",
    forked_from : "Forked from coussej/node-opcua-logger",
    description : "An OPCUA Client for logging data to InfluxDB! 🔌 🏭",
    color : "#f1e05a",
    tech_stack: "JavaScript"
   },
     {
    repo_name : "kafkajs",
    forked_from : "Forked from tulios/kafkajs",
    description : "A modern Apache Kafka client for node.js",
    color : "#f1e05a",
    tech_stack: "JavaScript"
   },
    {
    repo_name : " node-opcua-1",
    forked_from : "Forked from node-opcua/node-opcua",
    description : "an implementation of a OPC UA stack fully written in javascript and nodejs - http://node-opcua.github.io/",
    color : "#3178c6",
    tech_stack: "TypeScript"
   }
]
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900">
      <header className="w-full bg-white border-b p-4 flex justify-between items-center">
        <div className="text-xl font-semibold">GitHub</div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>
      </header>

      <main className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <img className="w-32 h-32 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/5489153?v=4" alt="shreeramk"></img>
            <h2 className="mt-4 text-left text-xl font-semibold">Shreeram Kushwaha</h2>
            <p className="text-left text-gray-600">shreeramk</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Bio</h3>
            <p className="text-gray-700 text-sm">Director of Engineering @UptimeAI Python, Angular, Javascript, NodeJS, MongoDB, Influx DB, TimescaleDB, Streamsets, kafka, AWS, Azure, HTML5, CSS</p>
            <div className="text-center w-100 h-20 bg-gray p-4 text-black " >Edit profile</div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="font-medium mb-2">Details</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li className="flex gap-2">
                <svg className="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.75 16A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 0 0 .25-.25V8.285a.25.25 0 0 0-.111-.208l-1.055-.703a.749.749 0 1 1 .832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0 1 14.25 16h-3.5a.766.766 0 0 1-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 0 1-.75-.75V14h-1v1.25a.75.75 0 0 1-.75.75Zm-.25-1.75c0 .138.112.25.25.25H4v-1.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v1.25h2.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM3.75 6h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 3.75A.75.75 0 0 1 3.75 3h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 3.75Zm4 3A.75.75 0 0 1 7.75 6h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 7 6.75ZM7.75 3h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5ZM3 9.75A.75.75 0 0 1 3.75 9h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 3 9.75ZM7.75 9h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5Z"></path></svg>
                <div>UptimeAI</div> 
              </li>

              <li className="flex gap-2">
                <svg className="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path></svg>
                 <div>Bangalore, India</div>
              </li>

              <li className="flex gap-2">
                 <svg className="octicon octicon-mail" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z"></path></svg>
                <div>kushwaha.shreeram@gmail.com</div> 
              </li>

             <li className="flex gap-2">
                 <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-link"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg>
                <div>http://shreeramk.com</div> 
              </li>

              <li className="flex gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" role="img" aria-labelledby="a5vg6xrnqp421t2bs6155uiokeajtre5" className="octicon"><title id="a5vg6xrnqp421t2bs6155uiokeajtre5">LinkedIn</title><g clipPath="url(#clip0_202_91845)"><path d="M14.5455 0H1.45455C0.650909 0 0 0.650909 0 1.45455V14.5455C0 15.3491 0.650909 16 1.45455 16H14.5455C15.3491 16 16 15.3491 16 14.5455V1.45455C16 0.650909 15.3491 0 14.5455 0ZM5.05746 13.0909H2.912V6.18764H5.05746V13.0909ZM3.96291 5.20073C3.27127 5.20073 2.712 4.64 2.712 3.94982C2.712 3.25964 3.272 2.69964 3.96291 2.69964C4.65236 2.69964 5.21309 3.26036 5.21309 3.94982C5.21309 4.64 4.65236 5.20073 3.96291 5.20073ZM13.0938 13.0909H10.9498V9.73382C10.9498 8.93309 10.9353 7.90327 9.83491 7.90327C8.71855 7.90327 8.54691 8.77527 8.54691 9.67564V13.0909H6.40291V6.18764H8.46109V7.13091H8.49018C8.77673 6.58836 9.47636 6.016 10.52 6.016C12.6924 6.016 13.0938 7.44582 13.0938 9.30473V13.0909V13.0909Z" fill="currentColor"></path></g></svg>
               <div>in/shreeramkushwaha</div>
              </li>
              <li className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16" role="img" aria-labelledby="ap27q8c3cphxvth4eexd7syzqsbhrour" className="octicon"><title id="ap27q8c3cphxvth4eexd7syzqsbhrour">X</title><path fill="currentColor" d="M9.332 6.925 14.544 1h-1.235L8.783 6.145 5.17 1H1l5.466 7.78L1 14.993h1.235l4.78-5.433 3.816 5.433H15L9.332 6.925ZM7.64 8.848l-.554-.775L2.68 1.91h1.897l3.556 4.975.554.775 4.622 6.466h-1.897L7.64 8.848Z"></path></svg>
                <div>@pom_fret</div>
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
            <a href="/shreeramk?achievement=pull-shark&amp;tab=achievements" className="position-relative">
             <div className="relative inline-block">
                <img
                  src="https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
                  data-hovercard-type="achievement"
                  data-hovercard-url="/users/shreeramk/achievements/pull-shark/detail?hovercard=1"
                  width="64"
                  alt="Achievement: Pull Shark"
                  data-view-component="true"
                  className="achievement-badge-sidebar"
                  aria-keyshortcuts="Alt+ArrowUp"
                />
                  <span
                    data-view-component="true"
                    className="Label achievement-tier-label achievement-tier-label--gold text-small text-yello text-bold color-shadow-medium px-2 py-0 mb-1 position-absolute right-0 bottom-0"
                  >
                  x4
                </span>
              </div>

            </a>
              </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="md:col-span-3 space-y-6">
          {/* REPO CARDS */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Pinned Repositories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repoInfo.map((repo, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm border">
                <h3 className="font-medium flex items-center gap-2">
                  {repo.repo_name}
                  <span className="text-xs px-2 py-0.5 border rounded-full">Public</span>
                </h3>

                {repo.forked_from && (
                  <p className="text-xs text-gray-500 mt-1">{repo.forked_from}</p>
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
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold mb-4">1,753 contributions in the last year</h3>
            <div className="flex gap-4">
              {/* Heatmap */}
              <div className="flex-1 h-40 border-1 h-90 bg-white-200 rounded-md" />

              {/* Year Selector */}
             <div className="w-28 bg-50 p-2 rounded-md">
      <ul className="space-y-3 text-sm pl-1">
      <li className="bg-blue-600 text-white p-2 rounded-md font-medium text-center">2025</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2024</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2023</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2022</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2021</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2020</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2019</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2018</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2017</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2016</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2015</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2014</li>
      <li className="bg-white-100 p-2 rounded-md text-center">2013</li>
      </ul>
      </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
