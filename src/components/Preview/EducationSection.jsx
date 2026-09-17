import styles from '../../styles/ResumeSection.module.css';

export default function EducationSection({ educationData }) {
    if (!educationData) return null;
    if (educationData.length === 0) return null;

    function EducationItem({ item }) {
        if (!item) return null;

        return (
            <li key={item.id}>
                <div className={styles.itemHeader}>
                    {item.schoolName && <h3 className={styles.itemTitle}>{item.schoolName}</h3>}
                    {(item.startDate || item.endDate) && (
                        <span className={styles.itemDate}>{item.startDate} – {item.endDate}</span>
                    )}
                </div>
                {item.degree && <p className={styles.itemSubtitle}>{item.degree}</p>}
                {item.location && <p className={styles.itemLocation}>{item.location}</p>}
            </li>
        );
    }

    return (
        <section className={styles.section}>
            {educationData.length > 0 && (
                <>  
                    <h2 className={styles.heading}>Education</h2>
                    <ul className={styles.list}>
                        {educationData.map((item) => (
                            <EducationItem key={item.id} item={item} />
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}