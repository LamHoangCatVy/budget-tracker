import React, { useState } from "react";
// import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.div}>
      <form className="login" onSubmit={handleSubmit} style={styles.form}>
        <h3 style={styles.title}>Login</h3>

        <label style={styles.label}>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={styles.input}
        />

        <label style={styles.label}>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          style={styles.input}
        />

        <button disabled={isLoading} className="btn" style={styles.button}>
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "linear-gradient(270deg, #f96692 0%, #f2994a 870%)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "5px",
  },
  input: {
    marginBottom: "10px",
    padding: "5px",
    width: "200px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#222260",
    color: "white",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default Login;
