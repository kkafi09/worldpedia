import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navigation = () => {
  const router = useRouter();
  const pathWithoutQuery = router.asPath.split("?")[0];
  let pathArray = pathWithoutQuery.split("/");
  pathArray.shift();

  let path = pathArray.pop();
  return (
    <>
      <div className="bg-primary-content w-1/3 ml-3 mr-2 h-72 rounded-md">
        <h1 className="text-2xl font-bold pt-3 px-4">Time</h1>
        <ul className="mx-6">
          <li className="my-2">
            <div
              className={`flex items-center ${
                path == "clock" ? "underline" : ""
              }`}
            >
              <i className="fa-solid fa-clock mr-2"></i>
              <Link href="/time/clock">Clock</Link>
            </div>
          </li>
          <li className="my-2">
            <div
              className={`flex items-center ${
                path == "stopwatch" ? "underline" : ""
              }`}
            >
              <i className="fa-solid fa-stopwatch mr-2"></i>
              <Link href="/time/stopwatch">Stopwatch</Link>
            </div>
          </li>
          <li className="my-2">
            <div
              className={`flex items-center ${
                path == "timer-online" ? "underline" : ""
              }`}
            >
              <i className="fa-regular fa-clock mr-2"></i>
              <Link href="/time/timer-online">Timer Online </Link>
            </div>
          </li>
          <li className="my-2">
            <div
              className={`flex items-center ${
                path == "countdown" ? "underline" : ""
              }`}
            >
              <i className="fa-solid fa-hourglass-end mr-3"></i>
              <Link href="/time/countdown">Countdown</Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
