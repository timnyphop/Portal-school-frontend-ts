import { Link } from "react-router-dom";
import Styles from "./Header.module.css";
import { useAuthModalStore } from "../../stores/App-store";
import { useAuth } from "../../contexts/context";

export const Header = () => {
  const { openModal } = useAuthModalStore();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div>
      <header className={Styles["Header"]}>
        <div className={Styles["container"]}>
          <div className={Styles["header-content"]}>
            <a href="/" className={Styles["logo-text"]}>
              Logo
            </a>

            <div className={Styles["social"]}>
              <nav className={Styles["nav-menu"]}>
                <ul className={Styles["List-hed"]}>
                  <li>
                    <a
                      href="https://t.me/der_res"
                      className={Styles["link-social"]}
                    >
                      💬 TG
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://vk.com/tima_11111011000"
                      className={Styles["link-social"]}
                    >
                      😊 VK
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UChY-dPrZ0GXgKf8XBsyh7aA"
                      className={Styles["link-social"]}
                    >
                      📺 YouTube
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {isAuthenticated ? (
              <div className={Styles["user-info"]}>
                <span className={Styles["name__user"]}>
                  {user ? user.name : "Loading..."} 🧑🏾‍💻
                </span>
                <button onClick={logout} className={Styles["logout-button"]}>
                  Выйти
                </button>
              </div>
            ) : (
              <button onClick={openModal} className={Styles["login-button"]}>
                Войти
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
