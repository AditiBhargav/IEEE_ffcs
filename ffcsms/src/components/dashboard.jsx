import React from "react";
import Link from "next/link";
const Content = () => {
  return (
    <div className="container max-w-screen ">
      <h1 className="text-3xl font-bold">Welcome, Name</h1>
      <div className="grid grid-cols-3 gap-3 m-5">
        <div className="rounded-md border-white border-2 bg-neutral-800 text-white h-15 p-4 hover:bg-neutral-700">
          <Link href={"#"}>
            <h2 className="font-sans text-2xl underline decoration-solid ">Profile</h2>
            <div className="text-lg ">NAME: Name<br />
              EMAIL ID: xyz<br />
              GRADE: grade</div>
          </Link>
        </div>
        <div className="rounded-md border-white border-2 bg-neutral-800 text-white h-15 p-4 hover:bg-neutral-700">
          <Link href={"#"}>
            <h2 className="font-sans text-2xl underline decoration-solid ">Contributions</h2>
            <div className="text-lg ">
              <ul>
                <li>1: Name</li>
                <li>2: Name</li>
                <li>3: Name</li></ul>
            </div>
          </Link>
        </div>
        <div className="rounded-md border-white border-2 bg-neutral-800 text-white h-15 p-4 hover:bg-neutral-700">
          <Link href={"#"}>
            <h2 className="font-sans text-2xl underline decoration-solid ">Assignments</h2>
            <div className="text-lg ">
              <ul>
                <li>1: Name dd</li>
                <li>2: Name dd</li>
                <li>3: Name dd</li></ul>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;