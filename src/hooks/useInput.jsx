import { useState } from "react";

export const useInput = () => {
  const [query, setQuery] = useState("");

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return { query, updateQuery };
};
