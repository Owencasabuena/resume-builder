import Button from "../common/Button";

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
        <form>
            <fieldset>
                <legend>Personal Information</legend>
                <label>Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleChange}
                />
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                />
                <label>Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                />
            </fieldset>

            <fieldset>
                <legend>Links</legend>
                {profileData.links.map((link) => (
                    <div key={link.id}>
                        <label>Label:</label>
                        <input 
                            type="text" 
                            name="label" 
                            value={link.label}
                            onChange={(e) => handleLinkChange(link.id, "label", e.target.value)}
                        />

                        <label>Value:</label>
                        <input 
                            type="text" 
                            name="value" 
                            value={link.value}
                            onChange={(e) => handleLinkChange(link.id, "value", e.target.value)}
                        />
                    </div>
                ))}
                <Button variant="ghost" onClick={addLinkField}>Add Link</Button>
            </fieldset>
        </form>
    )
}