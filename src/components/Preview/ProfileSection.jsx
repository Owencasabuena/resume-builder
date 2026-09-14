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
        <section>
            <h2>{profileData.fullName}</h2>
            <div className="">
                <p>{profileData.address}</p>
                <p>{profileData.email}</p>
                <p>{profileData.phone}</p>
            </div>

            {links.length > 0 && (
                <div className="">
                    <h3>Links</h3>
                    <ul>
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