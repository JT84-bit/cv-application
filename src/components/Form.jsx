import { useState } from "react";
import General from "./General";
import Work from "./Work";
import Education from "./Education";
import Preview from "./Preview";
import '../styles/Form.css'

export default function Form(){
    // General info
    const [generalValueS, setValueS] = useState({firstName: '', lastName: '', email: '', address: '', phone: ''});
    function changeGeneral (event){
            setValueS({ ...generalValueS, [event.target.id]: event.target.value });
    }
    // Education
    const [educationValueS, setEduValueS] = useState({schoolName: '', degreeTitle: '', dateOfStudy: ''});
    function changeEducation (event){
        setEduValueS({ ...educationValueS, [event.target.id]: event.target.value });
    }
    // Work history
    const [workValueS, setWorkValueS] = useState({company: '', positionTitle: '', responsibility: '', start: '', until: ''});
    function changeWork (event){
        setWorkValueS({ ...workValueS, [event.target.id]: event.target.value });
    }
    return (
        <>
        <div className="wrapper">
        <div className="form">
            <General generalValueS={generalValueS}
                     onChange={changeGeneral}/>
            <Education educationValueS={educationValueS}
                       onChange={changeEducation}/>
            <Work workValueS={workValueS}
                  onChange={changeWork}/>
        </div>
        <div className="preview">
            <Preview generalValueS={generalValueS}
                     educationValueS={educationValueS}
                     workValueS={workValueS}/>
        </div>
        </div>
        </>
    )
}
