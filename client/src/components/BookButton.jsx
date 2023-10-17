import styles from "../styles/BookButton.module.css";

function BookButton () {
    return (
        <div className={styles.BookButtonContainer}>
        <button className={styles.BookButton}>문제풀기</button>
        </div>
    )
}

export default BookButton