import { UseLogInfo } from "./useLogInfo";

export function HookLogin() {
  const { userName, password, onPassChange, onUserChange } = UseLogInfo();

  return (
    <div>
      <form action="">
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={onUserChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={onPassChange}
        />
      </form>
      <h2>Username: {userName}</h2>
      <h2>Password:{password}</h2>
    </div>
  );
}
