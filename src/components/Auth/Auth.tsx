import { useAuthModalStore } from "../../stores/App-store";
import { useAuth } from "../../contexts/context";
import Styles from "./Auth.module.css";
import React from "react";
export const AuthModal: React.FC = () => {
  const { isModalOpen, closeModal } = useAuthModalStore();
  const { login } = useAuth();

  const handleLogin = () => {
    const mockUser = { name: "John Doe", email: "john.doe@example.com" };
    login(mockUser);
    closeModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContent}>
        <span className={Styles.close} onClick={closeModal}>
          &times;
        </span>
        <h2>Login</h2>
        <button onClick={handleLogin} className={Styles.loginButton}>
          Login as John Doe
        </button>
      </div>
    </div>
  );
};
