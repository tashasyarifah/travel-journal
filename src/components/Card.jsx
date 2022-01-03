import styles from "./Card.module.css"

export default function Card() {
    return (
        <div className={styles.card}>
            <img src="./images/Mount-fuji.jpg" alt="Mount Fuji, Japan" className={styles.img}/>
            <div className={styles.info}>
                <div>
                    <img src="./images/Location.svg" alt="" />
                    <span>Japan</span>
                    <span>View on Google Maps</span>
                </div>
                <h2>Mount Fuji</h2>
                <p>12 Jan 2021 - 24 Jan 2021</p>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
            
        </div>
    )
}