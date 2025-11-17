"use client";

import { useState } from "react";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "repositories", label: "Repositories" },
  { key: "projects", label: "Projects" },
  { key: "stars", label: "Stars" },
  { key: "packages", label: "Packages" },
];

export default function GitHubTabs() {
  const [active, setActive] = useState("overview");

  return (
    <div>
      <ul className="flex gap-8 ml-5 text-sm">
        {tabs.map((tab) => (
          <li
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className="
              relative py-3 cursor-pointer 
              text-gray-700 hover:text-gray-900
            "
          >
            {tab.label}

            {/* underline */}
            {active === tab.key && (
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-orange-500"></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
