import styles from '../../styles/Button.module.css';

export default function Button({ 
    variant = 'primary', 
    type = 'button', 
    onClick, 
    disabled,
    className,
    children }) {

    return (
        <button 
            className={`${styles.button} ${styles[variant]}${className ? ` ${className}` : ''}`} 
            type={type} 
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}