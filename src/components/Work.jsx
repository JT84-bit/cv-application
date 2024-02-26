import { useState } from 'react';
import '../styles/Work.css'

export default function Work({workValueS, onChange}){
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
                            <label>Company Name:{' '}
                                <input type="text"
                                id='company'
                                value={workValueS.company}
                                onChange={onChange} 
                                />
                            </label>
                            <label>Title of position:{' '}
                                <input type="text"
                                id='position'
                                value={workValueS.position}
                                onChange={onChange}
                                 />
                            </label>
                            <label>Main Responsibilities:{' '}
                                <input type="text"
                                       id='responsibilities'
                                       value={workValueS.responsibilities}
                                       onChange={onChange} 
                                       />
                            </label>
                            <label>Start Date:{' '}
                                <input type="text" 
                                id='start'
                                placeholder="DD/MM/YEAR"
                                value={workValueS.start}
                                onChange={onChange}
                                />
                            </label>
                        
                            <label>Until:{' '}
                                <input type="text"
                                id='until'
                                placeholder="DD/MM/YEAR"
                                value={workValueS.until}
                                onChange={onChange} 
                                />
                            </label>
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
