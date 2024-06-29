import { useState } from "react";
import { useAuthModalStore } from "../../stores/App-store";
import { useAuth } from "../../contexts/context";
import Styles from "./Auth.module.css";

export const AuthModal: React.FC = () => {
  const { isModalOpen, closeModal } = useAuthModalStore(); // Zustand для управления состоянием модального окна
  const { login, saveToken } = useAuth(); // Вызов контекста для авторизации пользователя и сохранения токена
  const [isLogin, setIsLogin] = useState(true); // Состояние для переключения между логином и регистрацией

  const [email, setEmail] = useState(""); // Состояние для email
  const [password, setPassword] = useState(""); // Состояние для пароля
  const [name, setName] = useState(""); // Состояние для имени (только для регистрации)
  const [age, setAge] = useState(""); // Состояние для возраста (только для регистрации)
  const [isLoading, setIsLoading] = useState(false); // Состояние для индикации загрузки
  const [error, setError] = useState<string | null>(null); // Состояние для отображения ошибок

  // Обработчик отправки формы
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    // Создание payload для отправки на сервер
    const payload = {
      email,
      password,
      ...(isLogin ? {} : { name, age }), // Добавление имени и возраста только для регистрации
    };

    try {
      // Запрос на сервер для логина или регистрации
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

      // Обработка неудачного запроса
      if (!response.ok) {
        const responseData = await response.json();
        console.error("Server Error:", responseData);
        // Установка сообщения об ошибке
        setError(
          responseData.message || `Failed to ${isLogin ? "login" : "register"}`
        );
        return; // Прекращение выполнения функции при ошибке
      }

      // Обработка успешного запроса
      const data = await response.json();
      login({ name: data.user.name, email: data.user.email }); // Вызов функции login из контекста для сохранения данных пользователя
      saveToken(data.token); // Сохранение токена
      closeModal(); // Закрытие модального окна
    } catch (error) {
      console.error("Caught Error:", error);
      setError("Email or password not correct"); // Установка сообщения об ошибке
    } finally {
      setIsLoading(false); // Отключение индикации загрузки
    }
  };

  // Если модальное окно не открыто, возвращаем null
  if (!isModalOpen) return null;

  return (
    <div className={Styles["modal"]}>
      <div className={Styles["modalContent"]}>
        <span className={Styles["close"]} onClick={closeModal}>
          &times;
        </span>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit} className={Styles["loginForm"]}>
          {!isLogin && (
            <>
              <div className={Styles["formGroup"]}>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
              <div className={Styles["formGroup"]}>
                <label htmlFor="age">Age: </label>
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
          <div className={Styles["formGroup"]}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={Styles["formGroup"]}>
            <label htmlFor="password">Password: </label>
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
            className={Styles["loginButton"]}
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
            className={Styles["toggleButton"]}
          >
            {isLogin ? "Switch to Register" : "Switch to Login"}
          </button>
          {error && <div className={Styles["error"]}>{error} </div>}
        </form>
      </div>
    </div>
  );
};
