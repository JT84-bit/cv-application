import General from "./General";
import Work from "./Work";
import Education from "./Education";
import Preview from "./Preview";
import '../styles/Form.css'

export default function Form(){
    return (
        <>
        <div className="wrapper">
        <div className="form">
            <General/>
            <Education/>
            <Work/>
        </div>
        <div className="preview">
            <Preview/>
        </div>
        </div>
        </>
    )
}
