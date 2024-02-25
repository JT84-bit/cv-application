import { useState } from 'react';
import '../styles/Work.css'

export default function Work({company, position, responsibilities, start, until}){
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
                <button onClick={closeForm} className='openWork'>Work History</button>
                <div className='workHistory' >
                        <div className="firstRow">
                            <label>Company Name:{' '}
                                <input type="text"
                                value={company}
                                //onChange={onChange} 
                                />
                            </label>
                            <label>Title of position:{' '}
                                <input type="text"
                                value={position}
                                //onChange={onChange}
                                 />
                            </label>
                        </div>
                        <div className="secondRow">
                            <label>Main Responsibilities:{' '}
                                <input type="text"
                                       value={responsibilities}
                                       //onChange={onChange} 
                                       />
                            </label>
                        </div>
                        <div className="thirdRow">
                            <label>Start Date:{' '}
                                <input type="date" 
                                value={start}
                                //onChange={onChange}
                                />
                            </label>
                            <div>
                            <label>Until:{' '}
                                <input type="date"
                                value={until}
                                //onChange={onChange} 
                                />
                            </label>
                            </div>
                        </div>
                </div>
            </>
        ); 
    } else  {
        return(
        <>
        <button onClick={showForm} className='openWork'>Work History</button>
        </>
    )}
}
