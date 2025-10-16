"use client";
import { useAuth } from "@clerk/nextjs";
import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const { isLoaded, isSignedIn, userId, sessionId, getToken } = useAuth();

  if(!isLoaded) return <div>Loading...</div>;
    if(!userId) return <div>Please sign in to use the counter.</div>;

  return (
    <>
      <p>Counter:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
