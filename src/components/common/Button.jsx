import styles from '../../styles/Button.module.css';

export default function Button({ 
    variant = 'primary', 
    type = 'button', 
    onClick, 
    children }) {

    return (
        <button 
            className={`${styles.button[variant]} ${styles[variant]}`} 
            type={type} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}