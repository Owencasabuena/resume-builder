import { useState } from 'react';
import Button from '../common/Button';
import styles from '../../styles/Form.module.css';

export default function ExperienceForm({ experienceData, setExperienceData }) {
    const [selectedId, setSelectedId] = useState(experienceData[0]?.id ?? null);
    const selectedExperience = experienceData.find(item => item.id === selectedId);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExperienceData(prevData => {
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
            location: '',
            description: ''
        };
        setExperienceData(prevData => [...prevData, newExperience]);
        setSelectedId(newExperience.id);
    };

    const handleCancelExperience = () => {
        setSelectedId(null);
    };

    const handleSaveExperience = () => {
        setSelectedId(null);
    };

    return (
        <div className={styles.form}>
            {experienceData.length === 0 && (
                <p className={styles.emptyState}>No experience entries available. Please add one.</p>
            )}

            {experienceData.map((item) => {
                return (
                    <Button key={item.id} variant="ghost" className={styles.entryButton} onClick={() => setSelectedId(item.id)}>
                        <h3>{item.companyName || 'Untitled'}</h3>
                    </Button>
                )
            })}

            {selectedExperience && (
                <form className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Experience Details</legend>
                        <label className={styles.label} htmlFor="companyName">Company Name:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="companyName"
                            value={selectedExperience.companyName}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label} htmlFor="position">Position:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="position"
                            value={selectedExperience.position}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label} htmlFor="startDate">Start Date:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="startDate"
                            value={selectedExperience.startDate}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label} htmlFor="endDate">End Date:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="endDate"
                            value={selectedExperience.endDate}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label} htmlFor="location">Location:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="location"
                            value={selectedExperience.location}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label} htmlFor="description">Description:</label>
                        <textarea
                            className={styles.textarea}
                            name="description"
                            value={selectedExperience.description}
                            onChange={handleInputChange}
                            rows={4}
                        />
                    </fieldset>

                    <div className={styles.actions}>
                        <Button variant="ghost" onClick={handleCancelExperience}>Cancel</Button>
                        <Button variant="primary" onClick={handleSaveExperience}>Save</Button>
                    </div>
                </form>
            )}

            <Button variant="ghost" onClick={handleAddExperience}>Add Experience</Button>
        </div>
    )
}