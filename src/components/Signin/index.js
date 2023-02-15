import { useState } from "react";
export default function Signin() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signin">
      <input
        type="text"
        placeholder="enter name"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        placeholder="enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button> Submit</button>
    </div>
  );
}
