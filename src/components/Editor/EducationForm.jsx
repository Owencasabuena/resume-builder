import { useState } from "react";
import Button from "../common/Button";
import styles from "../../styles/Form.module.css";

export default function EducationForm({ educationData, setEducationData }) {
    const [selectedId, setSelectedId] = useState(educationData[0]?.id ?? null);
    const selectedEducation = educationData.find(item => item.id === selectedId);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEducationData(prevData => {
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
        setEducationData(prevData => [...prevData, newEducation]);
        setSelectedId(newEducation.id);
    };

    const handleCancelEducation = () => {
        setSelectedId(null);
    };

    const handleSaveEducation = () => {
        setSelectedId(null);
    };

    return (
        <div className={styles.form}>    
            {educationData.length === 0 && (
                <p className={styles.emptyState}>No education entries available. Please add one.</p>
            )}

            {educationData.map((item) => {
                return (
                    <Button key={item.id} variant="ghost" className={styles.entryButton} onClick={() => setSelectedId(item.id)}>
                        <h3>{item.schoolName || 'Untitled'}</h3>
                    </Button>
                )
            })}

            {selectedEducation  && (
                <form className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.legend}>Education Information</legend>
                        <label className={styles.label}>School Name:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="schoolName"
                            value={selectedEducation.schoolName}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label}>Degree:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="degree"
                            value={selectedEducation.degree}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label}>Start Date:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="startDate"
                            value={selectedEducation.startDate}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label}>End Date:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="endDate"
                            value={selectedEducation.endDate}
                            onChange={handleInputChange}
                        />
                        <label className={styles.label}>Location:</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="location"
                            value={selectedEducation.location}
                            onChange={handleInputChange}
                        />
                    </fieldset> 

                    <div className={styles.actions}>
                        <Button variant="ghost" onClick={handleCancelEducation}>Cancel</Button>
                        <Button variant="primary" onClick={handleSaveEducation}>Save</Button>
                    </div>
                </form>
            )}

            <Button variant="ghost" onClick={handleAddEducation}>Add Education</Button>
        </div>
    )
}