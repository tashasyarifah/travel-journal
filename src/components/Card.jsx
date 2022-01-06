import styles from "./Card.module.css"

export default function Card(props) {
    return (
        <div className={styles.card}>
            <img src={`../images/${props.image}`} alt="The destination" className={styles.img}/>
            <div className={styles.info}>
                <div className={styles.locations}>
                    <img src="./images/Location.svg" alt="" className={styles.icon}/>
                    <span className={styles.country}>{props.location}</span>
                    <a href="/">View in Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className={styles.date}>{props.startDate} - {props.endDate}</p>
                <p className={styles.description}>{props.description}</p>
            </div>
            <hr />
            
        </div>
    )
}