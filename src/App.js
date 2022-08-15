import { useState } from "react";
import "./App.css";
import { login } from "./services/handler";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const data = {
        [event.target[0].name]: event.target[0].value,
        [event.target[1].name]: event.target[1].value,
      };

      const resPromise = await login(data);
      const res = await resPromise.json();
    } catch (error) {}
  };
  return (
    <div>
      <form onSub onSubmit={handleSubmit}>
        <label>Username</label>
        <div>
          <input type="text" name="username" />
        </div>

        <label>Password</label>
        <div>
          <input type="password" name="password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
