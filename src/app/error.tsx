"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div
      className="px-8 py-48 flex flex-col items-center bg-black
    h-max
    "
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Error
      </h1>
      <p className="text-gray-700 dark:text-gray-400">Something went Wrong</p>
    </div>
  );
}
