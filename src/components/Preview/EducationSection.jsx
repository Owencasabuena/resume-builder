export default function EducationSection({ educationData }) {
    if (!educationData) return null;

    return (
        <section>
            {educationData.length > 0 && (
                <>  
                    <h1>Education</h1>
                    <ul>
                        {educationData.map((item) => (
                            <li key={item.id}>
                                <h3>{item.schoolName}</h3>
                                <p>{item.degree}</p>
                                <p>{item.startDate} - {item.endDate}</p>
                                <p>{item.location}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    )
}