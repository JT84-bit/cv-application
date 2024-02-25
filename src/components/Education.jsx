import { useState } from "react";
import '../styles/Education.css'

export default function Education({degreeTitle, schoolName, dateOfStudy}){
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
            <div className="firstRow">
                <label>Name of School:{' '}
                    <input type="text"
                    value={schoolName}
                    //onChange={handleSchoolChange}
                     />
                </label>
                <div className="secondRow">
                <label>Title of Degree:{' '}
                    <input type="text"
                    value={degreeTitle}
                    //onChange={handleDegreeChange} 
                    />
                </label>
                </div>
            </div>
            <div className="thirdRow">
                <label>Date of Study:{' '}
                    <input type="text"
                    value={dateOfStudy}
                    //onChange={handleDateChange} 
                    />
                </label>
                </div>
        </div>
        </>
    )
    } else {
        return(
        <button onClick={showForm} className="openEducation">Education</button>
    )}
}

Education.defaultProps = {degreeTitle:'Päällikkö', schoolName:'Steiner-Koulu', dateOfStudy:'Päälliköinti' }