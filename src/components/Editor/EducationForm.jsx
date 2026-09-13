import { useState } from "react";
import Button from "../common/Button";

export default function EducationForm() {
    const [formData, setFormData] = useState([
        {
            id: crypto.randomUUID(),
            schoolName: 'National College of Science and Technology',
            degree: 'Bachelor of Science in Computer Science',
            startDate: '2024',
            endDate: 'present',
            location: 'Dasmarinas, Cavite'
        }
    ]);

    const [selectedId, setSelectedId] = useState(formData[0]?.id ?? null);
    const selectedEducation = formData.find(item => item.id === selectedId);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => {
            return prevData.map(item => {
                if (item.id === selectedId) {
                    return { ...item, [name]: value };
                }
                return item;
            });
        });
    };

    const handleAddEducation = () => {
        const newEducation = {
            id: crypto.randomUUID(),
            schoolName: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: ''
        };
        setFormData(prevData => [...prevData, newEducation]);
        setSelectedId(newEducation.id);
    };

    const handleCancelEducation = () => {
        setSelectedId(null);
    };

    const handleSaveEducation = () => {
        setSelectedId(null);
    };

    return (
        <>    
            {formData.length === 0 && (
                <p>No education entries available. Please add one.</p>
            )}

            {formData.map((item) => {
                return (
                    <Button variant="ghost" onClick={() => setSelectedId(item.id)}>
                        <h3>{item.schoolName}</h3>
                    </Button>
                )
            })}

            {selectedEducation  && (
                <form>
                    <fieldset>
                        <legend>Education Information</legend>
                        <label htmlFor="schoolName">School Name:</label>
                        <input
                            type="text"
                            name="schoolName"
                            value={selectedEducation.schoolName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="degree">Degree:</label>
                        <input
                            type="text"
                            name="degree"
                            value={selectedEducation.degree}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="startDate">Start Date:</label>
                        <input
                            type="text"
                            name="startDate"
                            value={selectedEducation.startDate}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="endDate">End Date:</label>
                        <input
                            type="text"
                            name="endDate"
                            value={selectedEducation.endDate}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={selectedEducation.location}
                            onChange={handleInputChange}
                        />
                    </fieldset> 

                    <Button variant="ghost" onClick={handleCancelEducation}>Cancel</Button>
                    <Button variant="primary" onClick={handleSaveEducation}>Save</Button>
                </form>
            )}

            <Button variant="ghost" onClick={handleAddEducation}>Add Education</Button>
        </>
    )
}