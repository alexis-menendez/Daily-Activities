import { useState } from "react";
import User from "../interfaces/User";

export default function FormElement() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [user, setUser] = useState<User>();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    }
    if (inputType === "email") {
      setEmail(inputValue);
    }
    if (inputType === "password") {
      setPassword(inputValue);
    }
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    const newUser = { name, email, password };
    setUser(newUser);

    setName("");
    setEmail("");
    setPassword("");
  }


  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={handleInputChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={handleInputChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handleInputChange}
              value={password}
            />
          </div>
          <div>
            <input type="submit" id="submit" />
          </div>
        </form>
      </div>
      <div className="lastUser">
      {user && showPassword && (
          <div>
            <h2>Last Submitted User Details:</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password Length: {user.password.length}</p>
            <p>Password: {user.password}</p>
            <button style={{backgroundColor: "lightgrey"}} onClick={() => setShowPassword(false)}>Hide Password</button>
          </div>
        )}
        {user && !showPassword && (
          <div>
            <h2>Last Submitted User Details:</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password Length: {user.password.length}</p>
            <p>Password: {user.password.split("").map(() => "*")}</p>
            <button onClick={() => setShowPassword(true)}>Show Password</button>
          </div>
        )}
      </div>
    </>
  );
}
