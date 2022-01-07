import styles from "./Card.module.css"

export default function Card(props) {
    return (
        <div className={styles.card}>
            <img src={`../images/${props.image}`} alt="The destination" className={styles.img}/>
            <section className={styles.info}>
                <section className={styles.locations}>
                    <img src="./images/Location.svg" alt={props.altImage} className={styles.icon}/>
                    <span className={styles.country}>{props.location}</span>
                    <a target="_blank" rel="noopener noreferrer" href={props.googleMapsUrl} className={styles.url}>View in Google Maps</a>
                </section>
                <h2>{props.title}</h2>
                <p className={styles.date}>{props.startDate} - {props.endDate}</p>
                <p className={styles.description}>{props.description}</p>
            </section>
            <hr />
            
        </div>
    )
}