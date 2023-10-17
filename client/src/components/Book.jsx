import styles from "../styles/Book.module.css"

function Book(props) {
    const { rank, title } = props;

    return (
        <div className={styles.BookContainer}>
            <div className={styles.BookRank}>{rank}</div>
            <div className={styles.BookTitle}>{title}</div>
        </div>
    )
}

export default Book