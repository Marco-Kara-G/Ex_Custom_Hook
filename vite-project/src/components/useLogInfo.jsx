import { useState } from "react";

export function UseLogInfo(userValue, passValue) {
  const [passwordValue, setPasswordValue] = useState(passValue);
  const [usernameValue, setUsernameValue] = useState(userValue);
  const handlePassChange = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleUserChange = (event) => {
    setUsernameValue(event.target.value);
  };

  return {
    userName: usernameValue,
    password: passwordValue,
    onPassChange: handlePassChange,
    onUserChange: handleUserChange,
  };
}
