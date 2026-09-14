export default function EducationSection({ educationData }) {
    if (!educationData) return null;
    if (educationData.length === 0) return null;

    function EducationItem({ item }) {
        if (!item) return null;

        return (
            <li key={item.id}>
                {item.schoolName && <h3>{item.schoolName}</h3>}
                {item.degree && <p>{item.degree}</p>}
                {(item.startDate || item.endDate) && <p>{item.startDate} - {item.endDate}</p>}
                {item.location && <p>{item.location}</p>}
            </li>
        );
    }

    return (
        <section>
            {educationData.length > 0 && (
                <>  
                    <h2>Education</h2>
                    <ul>
                        {educationData.map((item) => (
                            <EducationItem key={item.id} item={item} />
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}