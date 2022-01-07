import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <section className={styles.footer}>
            <p className={styles.attribution}>Made by Tasha for <a target="_blank" rel="noopener noreferrer" href="https://scrimba.com/learn/learnreact" className={styles.link}> Scrimba Solo Project </a>
            </p>
        </section>
    )
}