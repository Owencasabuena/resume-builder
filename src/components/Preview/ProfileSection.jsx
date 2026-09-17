import styles from '../../styles/ProfileSection.module.css';

export default function ProfileSection({ profileData }) {
    if (!profileData) return null;
    const links = profileData.links ?? [];

    function Link({ value }) {
        if (!value) return null;

        const isValidUrl = value.startsWith('http');
        if (isValidUrl) {
            return <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>
        } else {
            return <span>{value}</span>
        }
    }

    return (
        <section className={styles.profile}>
            <h2 className={styles.name}>{profileData.fullName}</h2>
            <div className={styles.contactRow}>
                <p>{profileData.address}</p>
                <p>{profileData.email}</p>
                <p>{profileData.phone}</p>
            </div>

            {links.length > 0 && (
                <div>
                    <h3 className={styles.linksHeading}>Links</h3>
                    <ul className={styles.linksList}>
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link value={link.value} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}