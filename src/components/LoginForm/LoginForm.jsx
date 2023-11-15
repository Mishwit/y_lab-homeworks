/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./styles.module.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passChange = (e) => {
    setPass(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    const response = await mockFetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: pass }),
    });

    if (response.success) {
      console.log("Login successful");
    } else {
      console.error("Login failed");
    }
  };
  const mockFetch = async (url, options) => {
    if (url === "/api/login" && options.method === "POST") {
      return { success: true };
    }

    return {};
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.formTitle}>Login</h2>
      <div className={styles.formLine}></div>
      <form className={styles.form} onSubmit={submit}>
        <label>
          <p className={styles.text}>Email Address</p>
          <input
            className={styles.email}
            type="email"
            value={email}
            onChange={emailChange}
            placeholder="Email address"
          />
        </label>
        <label>
          <p className={styles.text}>Password</p>
          <input
            className={styles.pass}
            type="password"
            value={pass}
            onChange={passChange}
            placeholder="Password"
          />
        </label>
        <a className={styles.formLink} href="#">
          Forgot your password?
        </a>
        <button className={styles.formButton} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
