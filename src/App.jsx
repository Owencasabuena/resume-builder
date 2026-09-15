import Sidebar from './components/Editor/Sidebar'
import ProfileForm from './components/Editor/ProfileForm'
import EducationForm from './components/Editor/EducationForm'
import ExperienceForm from './components/Editor/ExperienceForm'

import Canvas from './components/Preview/Canvas'
import ProfileSection from './components/Preview/ProfileSection'
import EducationSection from './components/Preview/EducationSection'
import ExperienceSection from './components/Preview/ExperienceSection'

import { useState } from 'react'


function App() {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: 'Owen Darl Casabuena',
      address: 'Dasmarinas, Cavite',
      email: 'owencasabuena@gmail.com',
      phone: '+63 993 375 8318',
      links: [{
          id: crypto.randomUUID(),
          label: 'github',
          value: 'owencasabuena'
      }]
    },
    educationInfo: [
      {
          id: crypto.randomUUID(),
          schoolName: 'National College of Science and Technology',
          degree: 'Bachelor of Science in Computer Science',
          startDate: '2024',
          endDate: 'present',
          location: 'Dasmarinas, Cavite'
      }
    ],
    experienceInfo: [
      {
          id: crypto.randomUUID(),
          companyName: 'Google',
          position: 'Software Engineer',
          startDate: '2024',
          endDate: 'present',
          location: 'Mountain View, CA'
      }
    ]
  });

  const sections = Object.freeze({
    PROFILE: 'Profile',
    EDUCATION: 'Education',
    EXPERIENCE: 'Experience'
  });

  const [activeSection, setActiveSection] = useState(sections.PROFILE);
  
  const renderActiveSection = () => {
    switch (activeSection) {
      case sections.PROFILE:
        return <ProfileForm profileData={resumeData.personalInfo} setProfileData={updatePersonalInfo}/>;
      case sections.EDUCATION:
        return <EducationForm educationData={resumeData.educationInfo} setEducationData={updateEducationInfo}/>;
      case sections.EXPERIENCE:
        return <ExperienceForm experienceData={resumeData.experienceInfo} setExperienceData={updateExperienceInfo}/>;
      default:
        return null;
    }
  };

  const handleSelectSection = (selectedSection) => {
    setActiveSection(selectedSection);
  };

  const updatePersonalInfo = (updater) => {
    setResumeData(prevData => ({
      ...prevData,
      personalInfo: updater(prevData.personalInfo)
    }));
  };

  const updateEducationInfo = (updater) => {
    setResumeData(prevData => ({
      ...prevData,
      educationInfo: updater(prevData.educationInfo)
    }));
  };

  const updateExperienceInfo = (updater) => {
    setResumeData(prevData => ({
      ...prevData,
      experienceInfo: updater(prevData.experienceInfo)
    }));
  };

  return (
    <>
      <header></header>

      <main>
        <Sidebar activeSection={activeSection} onSelectSection={handleSelectSection} />
        {renderActiveSection()}

        <Canvas>
          <ProfileSection profileData={resumeData.personalInfo} />
          <EducationSection educationData={resumeData.educationInfo} />
          <ExperienceSection experienceData={resumeData.experienceInfo} />
        </Canvas>
      </main>
      
      <footer></footer>
    </>
  )
}

export default App
