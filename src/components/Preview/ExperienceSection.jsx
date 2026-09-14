export default function ExperienceSection({ experienceData }) {
    if (!experienceData) return null;
    if (experienceData.length === 0) return null;

    function ExperienceItem({ item }) {
        if (!item) return null;

        return (
            <li key={item.id}>
                {item.companyName && <h3>{item.companyName}</h3>}
                {item.position && <p>{item.position}</p>}
                {(item.startDate || item.endDate) &&<p>{item.startDate} - {item.endDate}</p>}
                {item.location && <p>{item.location}</p>}
            </li>
        )
    }

    return (
        <section>
            {experienceData.length > 0 && (
                <>  
                    <h2>Experience</h2>
                    <ul>
                        {experienceData.map((item) => (
                            <ExperienceItem key={item.id} item={item} />
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}