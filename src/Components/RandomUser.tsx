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

import { useEffect, useState } from "react";

export default function RandomUser() {
  const [user, setUser] = useState<null | {
    name: string;
    email: string;
    image: string;
  }>();
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return (
      <>
        <p>Loading</p>
        <div className="action">
          <button disabled={isLoading} onClick={fetchUser}>
            {isLoading ? "Loading..." : "Fetch User"}
          </button>
        </div>
      </>
    );
  } else if (errors) {
    return <div>{errors}</div>;
  } else {
    return (
      <div className="w-2/5 m-auto p-2 flex flex-col align-middle">
        <div>
          <div className="image">
            <img alt="Profile Image" className="rounded" src={user.image} />
          </div>
          <div className="name">{user.name}</div>
          <div>{user.email}</div>
        </div>
        <div className="action">
          <button disabled={isLoading} onClick={fetchUser}>
            {isLoading ? "Loading..." : "Fetch User"}
          </button>
        </div>
      </div>
    );
  }
  //   return (
  //     <>
  //       {errors ? <div>{errors}</div> : ""}
  //       {isLoading ? "Loading" : ""}
  //
  //     </>
  //   );
}
