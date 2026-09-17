import styles from '../../styles/Canvas.module.css';

export default function Canvas({ children }) {
    return (
        <article className={styles.canvas}>
            {children}
        </article>
    )
}