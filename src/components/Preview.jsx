import '../styles/Preview.css'
import location from '../assets/map-marker.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email-outline.svg'

export default function Preview({generalValueS, educationValueS, workValueS}){

    return(
        <>
            <div className='wrapper'>
                <div className="personalInfo">
                    <div className="name">{generalValueS.firstName + " " + generalValueS.lastName}</div>
                    <div className="contactInfo">Contact Info</div>
                    <div className="phone"><img src={phone}></img>{generalValueS.phone}</div>
                    <div className="email"><img src={email}></img>{generalValueS.email}</div>
                    <div className="address"><img src={location}></img>{generalValueS.address}</div>
                </div>
                <div className='eduWorkInfo'>
                    <div className="educationPreview">
                        <div className="eduHeader">Education</div>
                        <div className='educationContainer'>
                            <div className='school'><p>School Name: </p>{educationValueS.schoolName}</div>
                            <div className='degree'><p>Title of Degree: </p>{educationValueS.degreeTitle}</div>
                            <div className='dateOfStudy'><p>Date of Study: </p>{educationValueS.dateOfStudy}</div>
                        </div>
                    </div>
                    <div className="workHistoryPreview">
                        <div className="workHeader">Career Summary</div>
                        <div className='workContainer'>
                            <div className='company'><p>Company Name: </p>{workValueS.company}</div>
                            <div className='positionTitle'><p>Title of Position: </p>{workValueS.position}</div>
                            <div className='responsibilities'><p>Primary Responsibility: </p>{workValueS.responsibilities}</div>
                            <div className='startDate'><p>Start Date: </p>{workValueS.start}</div>
                            <div className='until'><p>Until: </p>{workValueS.until}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}