"use client";

import Link from "next/link";
import React, { useEffect } from "react";

export default function GithubInfo({ username }: { username: string }) {
  type GithubInfoType = {
    avatar_url: string;
    html_url: string;
    location: string;
    name: string;
  };

  const githubApiUrl = `https://api.github.com/users/${username}`;
  const [githubInfo, setGithubInfo] = React.useState({} as GithubInfoType);

  useEffect(() => {
    fetch(githubApiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        setGithubInfo(data);
        console.log({ githubInfo });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [githubApiUrl]);

  return (
    <div className="md:flex md:items-center md:justify-between md:space-x-5 pb-5">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              className="h-16 w-16 rounded-full"
              src={githubInfo?.avatar_url}
              alt={githubInfo?.name}
            />
            <span
              className="absolute inset-0 rounded-full shadow-inner"
              aria-hidden="true"
            />
          </div>
        </div>
        {/*
          Use vertical padding to simulate center alignment when both lines of text are one line,
          but preserve the same layout if the text wraps without making the image jump around.
        */}
        <div className="pt-1.5">
          <h1 className="text-2xl font-bold text-gray-900">
            {githubInfo?.name}
          </h1>
          <p className="text-sm font-medium text-gray-500">
            {githubInfo?.location}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <Link href={githubInfo?.html_url || "https://github.com"}>
            View Profile
          </Link>
        </button>
      </div>
    </div>
  );
}
