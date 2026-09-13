import Button from "../common/Button";

export default function Sidebar({ activeSection, onSelectSection }) {
    const sections = [
        {id: 'Profile', label: 'Profile'},
        {id: 'Education', label: 'Education'},
        {id: 'Experience', label: 'Experience'}
    ];

    return (
        <aside>
            {sections.map(section => (
                <Button
                    key={section.id}
                    variant={activeSection === section.id ? 'primary' : 'ghost'}
                    onClick={() => onSelectSection(section.id)}
                    disabled={activeSection === section.id}
                >
                    {section.label}
                </Button>
            ))}
        </aside>
    );
}