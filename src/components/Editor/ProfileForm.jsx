import Button from "../common/Button";
import styles from "../../styles/Form.module.css";

export default function ProfileForm({ profileData, setProfileData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addLinkField = () => {
        setProfileData(prev => {
            return {
                ...prev,
                links: [
                    ...prev.links, 
                    { 
                        id: crypto.randomUUID(),
                        label: '',
                        value: ''
                    }
                ]
            }
        })
    };

    const handleLinkChange = (id, field, value) => {
        setProfileData(prev => ({
            ...prev,
            links: prev.links.map(link => link.id === id ? { ...link, [field]: value } : link)
        }));
    };

    return (
        <form className={styles.form}>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Personal Information</legend>
                <label className={styles.label}>Full Name:</label>
                <input
                    className={styles.input}
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleChange}
                />
                <label className={styles.label}>Address:</label>
                <input
                    className={styles.input}
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                />
                <label className={styles.label}>Email:</label>
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                />
                <label className={styles.label}>Phone:</label>
                <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                />
            </fieldset>

            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Links</legend>
                {profileData.links.map((link) => (
                    <div key={link.id} className={styles.linkRow}>
                        <div>
                            <label className={styles.label}>Label:</label>
                            <input 
                                className={styles.input}
                                type="text" 
                                name="label" 
                                value={link.label}
                                onChange={(e) => handleLinkChange(link.id, "label", e.target.value)}
                            />
                        </div>

                        <div>
                            <label className={styles.label}>Value:</label>
                            <input 
                                className={styles.input}
                                type="text" 
                                name="value" 
                                value={link.value}
                                onChange={(e) => handleLinkChange(link.id, "value", e.target.value)}
                            />
                        </div>
                    </div>
                ))}
                <Button variant="ghost" onClick={addLinkField}>Add Link</Button>
            </fieldset>
        </form>
    )
}