import Styles from "./Header.module.css";

export const Header = () => {
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
          </div>
        </div>
      </header>
    </div>
  );
};
