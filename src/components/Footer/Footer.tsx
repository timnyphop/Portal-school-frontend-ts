import Styles from './Footer.module.css';
export const Footer =()=>{
    return(
    <footer className={Styles['footer']}>
    <div className={Styles["container"]}>
                <div className={Styles["footer-content"]}>
                    <a href='/' className={Styles['logo-text']}>Logo</a>
    
                    <div className={Styles["social"]}>
                        <nav className={Styles["nav-menu"]}>
                        <ul className={Styles['List-foot']}>
                        <li><a href="https://t.me/der_res" className={Styles["link-social"]}>💬 TG</a></li>
                        <li><a href="https://vk.com/tima_010101" className={Styles["link-social"]}>😊 VK</a></li>
                        <li><a href="https://www.youtube.com/channel/UChY-dPrZ0GXgKf8XBsyh7aA" className={Styles["link-social"]}>📺 YouTube</a></li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
    </footer>
        )
    }