import { useState } from "react"
import Button from "../common/Button";

export default function ProjectForm() {
    const [formData, setFormData] = useState({
        fullName: 'Owen Darl Casabuena',
        address: 'Dasmarinas, Cavite',
        email: 'owencasabuena@gmail.com',
        phone: '+63 993 375 8318',
        links: [{
            id: crypto.randomUUID(),
            label: 'github',
            value: 'owencasabuena'
        }]
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const addLinkField = () => {
        setFormData(prev => {
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
        setFormData(prev => ({
            ...prev,
            links: prev.links.map(link => link.id === id ? { ...link, [field]: value } : link)
        }));
    };

    return (
        <form>
            <fieldset>
                <legend>Personal Information</legend>
                <label htmlFor="fullName">Full Name:</label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                />
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="phone">Phone:</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </fieldset>

            <fieldset>
                <legend>Links</legend>
                {formData.links.map((link) => (
                    <div key={link.id}>
                        <label htmlFor="label">Label:</label>
                        <input 
                            type="text" 
                            name="label" 
                            value={link.label}
                            onChange={(e) => handleLinkChange(link.id, "label", e.target.value)}
                        />

                        <label htmlFor="label">Value:</label>
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