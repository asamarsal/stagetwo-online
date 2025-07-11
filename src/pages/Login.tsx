import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "user" && password === "user") {
      login("simulated_token_abc");
      navigate("/");} 
    else {
      setErrorMsg("Username atau password salah");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-svh p-4">

      <h1 className="text-2xl font-bold mb-4 text-center">Username & Password</h1>
      <h1 className="text-2xl font-light mb-4 text-center underline">user</h1>

      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white dark:bg-zinc-900 p-4 border border-green-400 rounded-2xl shadow space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <div>
          <Label htmlFor="username" className="pb-2">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Username Anda"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required/>
        </div>

        <div>
          <Label htmlFor="password" className="pb-2">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Password Anda"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {errorMsg && (
          <p className="text-red-500 text-sm text-center">{errorMsg}</p>
        )}

        <Button type="submit" className="w-full bg-green-600 hover:bg-green-800 text-white">
          Login
        </Button>
      </form>
    </div>
  );
}
