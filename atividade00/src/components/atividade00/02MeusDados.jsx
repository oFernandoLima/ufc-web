import styles from "./MeusDados.module.css"

const MeusDadosWithProps = ({name, course, university}) => {
    return(
        <div className={styles.card}>
            <h1 className={styles.name}>{name}</h1>
            <h1 className={styles.course}>{course}</h1>
            <h1 className={styles.university}>{university}</h1>
        </div>
    )
}

export default MeusDadosWithProps;