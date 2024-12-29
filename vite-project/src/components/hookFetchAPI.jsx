import { act, useState } from "react";
import { UseGithubUser } from "./useGithubUser";

export function HookFEtchAPI() {
  const { user, error, loading, fetchAPIData } = UseGithubUser();
  const [actualUser, setActualUser] = useState();
  const handleuserChange = (event) => {
    setActualUser(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        id="username"
        onChange={handleuserChange}
      />
      <button
        onClick={() => {
          fetchAPIData(actualUser);
        }}
      >
        Search
      </button>
      {user && (
        <div>
          <h2>Username: {user.login}</h2>
          <h2>Id: {user.id}</h2>
          <img src={user.avatar_url} alt="GitHub user profile picture" />
        </div>
      )}
    </div>
  );
}
