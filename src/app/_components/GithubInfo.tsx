"use client";

import React, { useEffect } from "react";

export default function GithubInfo({ username }: { username: string }) {
  const githubApiUrl = `https://api.github.com/users/${username}`;
  const [githubInfo, setGithubInfo] = React.useState({});

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
    <>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <h2 className="sr-only" id="profile-overview-title">
          Profile Overview
        </h2>
        <div className="bg-white p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5">
              <div className="flex-shrink-0">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={githubInfo?.avatar_url}
                  alt="github avatar"
                />
              </div>
              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {githubInfo?.name}
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {githubInfo?.bio}
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {githubInfo?.location}
                </p>
              </div>
            </div>
            <div className="mt-5 flex justify-center sm:mt-0">
              <a
                href={githubInfo?.html_url}
                className="flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                View profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
