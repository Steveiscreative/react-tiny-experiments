/**
 * ## 4. Fetch & Display Data from a Public API

**Concepts:** `useEffect`, asynchronous data fetching, conditional rendering

**Instructions:**

- Create a `RandomUser` component that:

  - On mount, fetches a random user from the [Random User API](https://randomuser.me/api/).
  - Shows a “Loading…” indicator while the request is in progress.
  - Once data arrives, displays the user’s name, email, and profile picture.
  - Includes a “Fetch Another” button that re-runs the API call and updates the displayed user.
  - Handles fetch errors by showing a friendly error message (e.g., “Something went wrong. Try again.”).

**Goal:**
Learn how to use `useEffect` for side effects, handle asynchronous fetch logic inside a React component, and conditionally render loading, error, and data states.
 */

"use strict";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";

function LoadingUI() {
  return <div>Loading</div>;
}

function ErrorUI({ error }) {
  return <div className="bg-red-500 text-white p-3">{error}</div>;
}

function DataUI({ user, loading, fn }) {
  return (
    <div className="w-2/5 m-auto p-2 flex flex-col align-middle">
      <div className="flex flex-col gap-1">
        <div className="flex justify-center">
          <img alt="Profile Image" className="rounded" src={user.image} />
        </div>
        <div className="name">{user.name}</div>
        <div>{user.email}</div>
      </div>
      <div className="action mt-2">
        <button
          disabled={loading}
          onClick={fn}
          className="bg-blue-700 px-4 py-3  cursor-pointer hover:bg-blue-500 rounded transition-all"
        >
          {loading ? "Loading..." : "Fetch User"}
        </button>
      </div>
    </div>
  );
}

export default function RandomUser() {
  const [user, setUser] = useState<null | {
    name: string;
    email: string;
    image: string;
  }>();
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  const fetchUser = async () => {
    setErrors("");
    setIsLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      const result = json.results[0];

      setUser({
        name: `${result.name.first} ${result.name.last}`,
        email: result.email,
        image: result.picture.medium,
      });
    } catch (error) {
      setErrors(error.message);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <section className={`section section-${theme}`}>
      <div>Day 4</div>
      {isLoading ? (
        <LoadingUI />
      ) : errors ? (
        <ErrorUI error={errors} />
      ) : (
        <DataUI user={user} loading={isLoading} fn={fetchUser} />
      )}
    </section>
  );
  // if (isLoading) {
  //   return (
  //     <div>
  //       <p>Loading</p>
  //       <div className="action">
  //         <button disabled={isLoading} onClick={fetchUser}>
  //           {isLoading ? "Loading..." : "Fetch User"}
  //         </button>
  //       </div>
  //     </div>
  //   );
  // } else if (errors) {
  //   return <div>{errors}</div>;
  // } else {
  //   return (
  //     <div className={`section section-${theme}`}>
  // <div className="w-2/5 m-auto p-2 flex flex-col align-middle">
  //   <div className="flex flex-col gap-1">
  //     <div className="flex justify-center">
  //       <img alt="Profile Image" className="rounded" src={user.image} />
  //     </div>
  //     <div className="name">{user.name}</div>
  //     <div>{user.email}</div>
  //   </div>
  //   <div className="action mt-2">
  //     <button
  //       disabled={isLoading}
  //       onClick={fetchUser}
  //       className="bg-blue-700 px-4 py-3  cursor-pointer hover:bg-blue-500 rounded transition-all"
  //     >
  //       {isLoading ? "Loading..." : "Fetch User"}
  //     </button>
  //   </div>
  // </div>
  //     </div>
  //   );
  // }
  //   return (
  //     <>
  //       {errors ? <div>{errors}</div> : ""}
  //       {isLoading ? "Loading" : ""}
  //
  //     </>
  //   );
}
