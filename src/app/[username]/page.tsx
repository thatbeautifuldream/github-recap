"use client";

import React from "react";
import GithubActivity from "@/app/_components/GithubActivity";
import GithubInfo from "@/app/_components/GithubInfo";

export default function Page({ params }: { params: { username: string } }) {
  const username = params.username;
  const currentYear = new Date().getFullYear();
  return (
    <>
      <GithubInfo username={username} />
      <GithubActivity username={username} year={"last"} />
      <GithubActivity username={username} year={currentYear - 1} />
      <GithubActivity username={username} year={currentYear - 2} />
    </>
  );
}
