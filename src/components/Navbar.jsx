
import logo from "./logo.svg"
import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt="" className={styles.logo}/>
            <h1>My Travel Journal</h1>
        </nav>
    )
}