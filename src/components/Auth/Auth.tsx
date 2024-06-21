import { useState } from "react";
import { useAuthModalStore } from "../../stores/App-store";
import { useAuth } from "../../contexts/context";
import Styles from "./Auth.module.css";

export const AuthModal: React.FC = () => {
  const { isModalOpen, closeModal } = useAuthModalStore();
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const payload = {
      email,
      password,
      ...(isLogin ? {} : { name, age }),
    };

    try {
      const response = await fetch(
        `http://localhost:3001/api/${isLogin ? "login" : "register"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        console.error("Server Error:", responseData);
        throw new Error(
          responseData.message || `Failed to ${isLogin ? "login" : "register"}`
        );
      }

      const data = await response.json();
      login(data);
      closeModal();
    } catch (error) {
      console.error("Caught Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContent}>
        <span className={Styles.close} onClick={closeModal}>
          &times;
        </span>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit} className={Styles.loginForm}>
          {error && <div className={Styles.error}>{error}</div>}
          {!isLogin && (
            <>
              <div className={Styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
              <div className={Styles.formGroup}>
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required={!isLogin}
                />
              </div>
            </>
          )}
          <div className={Styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={Styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={Styles.loginButton}
          >
            {isLoading
              ? isLogin
                ? "Logging in..."
                : "Registering..."
              : isLogin
              ? "Login"
              : "Register"}
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className={Styles.toggleButton}
          >
            {isLogin ? "Switch to Register" : "Switch to Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
