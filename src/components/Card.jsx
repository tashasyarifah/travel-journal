import styles from "./Card.module.css"

export default function Card(props) {
    return (
        <div className={styles.card}>
            <img src={`../images/${props.image}`} alt="The destination" className={styles.img}/>
            <div className={styles.info}>
                <div className={styles.locations}>
                    <img src="./images/Location.svg" alt="" />
                    <span>{props.title}</span>
                    <span>{props.googleMapsUrl}</span>
                </div>
                <h2>{props.title}</h2>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}