import { useState } from "react";
import { useAuthModalStore } from "../../stores/App-store";
import { useAuth } from "../../contexts/context";
import Styles from "./Auth.module.css";

export const AuthModal: React.FC = () => {
  const { isModalOpen, closeModal } = useAuthModalStore();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      login(data); // Save user data and token
      closeModal();
    } catch (error) {
      console.log(error);
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
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className={Styles.loginForm}>
          {error && <div className={Styles.error}>{error}</div>}
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
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};
