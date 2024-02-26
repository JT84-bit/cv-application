import { useState } from "react";
import '../styles/Education.css'

export default function Education({educationValueS, onChange}){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showForm = () => {
        setIsModalOpen(true)
    }

    const closeForm = () => {
        setIsModalOpen(false)
    }

    if(isModalOpen){
    return (
        <>
        <button onClick={closeForm} className="openEducation">Education</button>
        <div className="education">
                <label>Name of School:{' '}
                    <input type="text"
                    id="schoolName"
                    value={educationValueS.schoolName}
                    onChange={onChange}
                     />
                </label>
                <label>Title of Degree:{' '}
                    <input type="text"
                    id="degreeTitle"
                    value={educationValueS.degreeTitle}
                    onChange={onChange} 
                    />
                </label>
                <label>Date of Study:{' '}
                    <input type="text"
                    id="dateOfStudy"
                    placeholder="DD/MM/YEAR - DD/MM/YEAR"
                    value={educationValueS.dateOfStudy}
                    onChange={onChange} 
                    />
                </label>
        </div>
        </>
    )
    } else {
        return(
        <button onClick={showForm} className="openEducation">Education</button>
    )}
}

Education.defaultProps = {degreeTitle:'Päällikkö', schoolName:'Steiner-Koulu', dateOfStudy:'Päälliköinti' }