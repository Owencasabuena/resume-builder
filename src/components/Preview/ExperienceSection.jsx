import styles from '../../styles/ResumeSection.module.css';

export default function ExperienceSection({ experienceData }) {
    if (!experienceData) return null;
    if (experienceData.length === 0) return null;

    function ExperienceItem({ item }) {
        if (!item) return null;

        return (
            <li key={item.id}>
                <div className={styles.itemHeader}>
                    {item.companyName && <h3 className={styles.itemTitle}>{item.companyName}</h3>}
                    {(item.startDate || item.endDate) && (
                        <span className={styles.itemDate}>{item.startDate} – {item.endDate}</span>
                    )}
                </div>
                {item.position && <p className={styles.itemSubtitle}>{item.position}</p>}
                {item.location && <p className={styles.itemLocation}>{item.location}</p>}
                {item.description && <p className={styles.itemDescription}>{item.description}</p>}
            </li>
        )
    }

    return (
        <section className={styles.section}>
            {experienceData.length > 0 && (
                <>  
                    <h2 className={styles.heading}>Experience</h2>
                    <ul className={styles.list}>
                        {experienceData.map((item) => (
                            <ExperienceItem key={item.id} item={item} />
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}