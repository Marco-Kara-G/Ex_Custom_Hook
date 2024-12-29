import { useState } from "react";

export function UseGithubUser() {
  const [gitUser, setGitUser] = useState(null);
  const [fetchError, setFEtchError] = useState(null);
  const [fetchLoading, setFecthLoading] = useState(false);

  async function fetchFunction(user) {
    try {
      setFecthLoading(true);
      setFEtchError(null); // Reset error on new fetch attempt

      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        throw new Error("Failed to fetch GitHub user data");
      }

      const data = await response.json(); // No need for JSON.parse
      setGitUser(data);
    } catch (error) {
      setFEtchError(error.message);
    } finally {
      setFecthLoading(false);
    }
  }

  return {
    user: gitUser,
    error: fetchError,
    loading: fetchLoading,
    fetchAPIData: fetchFunction,
  };
}
