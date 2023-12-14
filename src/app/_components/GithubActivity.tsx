"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface Activity {
  username: string;
  year: number | "last" | undefined;
}

export default function GithubActivity({ username, year }: Activity) {
  return (
    <>
      <GitHubCalendar
        username={username}
        hideColorLegend={true}
        hideMonthLabels
        hideTotalCount
        year={year}
        style={{
          padding: "0px",
          marginBottom: "20px",
        }}
        colorScheme="light"
        renderBlock={(block, activity) =>
          React.cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-html": `${activity.count} commits on ${activity.date}`,
          })
        }
      />
      <ReactTooltip id="react-tooltip" />
    </>
  );
}
