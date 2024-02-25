import '../styles/Preview.css'

export default function Preview(propsPersonal){

    return(
        <>
            <div className='wrapper'>
                <div className="personalInfo">
                    <div className="name">{propsPersonal.firstName + " " + propsPersonal.lastName}</div>
                    <div className="contactInfo">Contact Info</div>
                    <div className="address">Address: {propsPersonal.address}</div>
                    <div className="phone">Phone: {propsPersonal.phone}</div>
                    <div className="email">Email: {propsPersonal.email}</div>
                    <div className="linkedin">Linkedin: {propsPersonal.linkedin}</div>
                </div>
                <div className='eduWorkInfo'>
                    <div className="education">
                        <div className="eduHeader">Education</div>
                        <div className="eduContainer">  
                        </div>
                    </div>
                    <div className="workHistory">
                        <div className="workHeader">Education</div>
                        <div className="workContainer">  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}