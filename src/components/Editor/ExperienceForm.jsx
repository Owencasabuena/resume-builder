import { useState } from 'react';
import Button from '../common/Button';

export default function ExperienceForm() {
    const [formData, setFormData] = useState([
        {
            id: crypto.randomUUID(),
            companyName: 'Google',
            position: 'Software Engineer',
            startDate: '2024',
            endDate: 'present',
            location: 'Mountain View, CA'
        }
    ]);

    const [selectedId, setSelectedId] = useState(formData[0]?.id ?? null);
    const selectedExperience = formData.find(item => item.id === selectedId);

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
    
    const handleAddExperience = () => {
        const newExperience = {
            id: crypto.randomUUID(),
            companyName: '',
            position: '',
            startDate: '',
            endDate: '',
            location: ''
        };
        setFormData(prevData => [...prevData, newExperience]);
        setSelectedId(newExperience.id);
    };
    
    const handleCancelExperience = () => {
        setSelectedId(null);
    };

    const handleSaveExperience = () => {
        setSelectedId(null);
    };

    return (
        <>    
            {formData.length === 0 && (
                <p>No experience entries available. Please add one.</p>
            )}

            {formData.map((item) => {
                return (
                    <Button variant="ghost" onClick={() => setSelectedId(item.id)}>
                        <h3>{item.companyName}</h3>
                    </Button>
                )
            })}

            {selectedExperience && (
                <form>
                    <fieldset>
                        <legend>Experience Details</legend>
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={selectedExperience.companyName}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="position">Position:</label>
                        <input
                            type="text"
                            name="position"
                            value={selectedExperience.position}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="startDate">Start Date:</label>
                        <input
                            type="text"
                            name="startDate"
                            value={selectedExperience.startDate}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="endDate">End Date:</label>
                        <input
                            type="text"
                            name="endDate"
                            value={selectedExperience.endDate}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={selectedExperience.location}
                            onChange={handleInputChange}
                        />
                    </fieldset> 

                    <Button variant="ghost" onClick={handleCancelExperience}>Cancel</Button>
                    <Button variant="primary" onClick={handleSaveExperience}>Save</Button>
                </form>
            )}

            <Button variant="ghost" onClick={handleAddExperience}>Add Experience</Button>
        </>
    )
}