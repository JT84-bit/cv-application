import { useState } from 'react';
import '../styles/General.css'

export default function General({generalValueS, onChange}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showForm = () => {
        setIsModalOpen(false)
        
    }

    const closeForm = () => {
        setIsModalOpen(true)
    }

  if(!isModalOpen){  
  return (
    <>
    <button onClick={closeForm} className="openGeneral">Personal Info</button>
      <div className="general">
        <label>
          Firstname:{' '}
          <input
          id='firstName'
            type="text"
            value={generalValueS.firstName}
            onChange={onChange}
          />
        </label>

        <label>
          Lastname:{' '}
          <input type="text" 
          id='lastName'
          value={generalValueS.lastName} 
          onChange={onChange}
           />
        </label>
        <label>
            Phone:{' '}
            <input type="tel"
            id='phone'
            value={generalValueS.phone}
            onChange={onChange}
            />
        </label>
        <label>
            Email:{' '}
            <input type="email"
            id='email'
            value={generalValueS.email}
            onChange={onChange}
            />
        </label>
        <label>
            Location:{' '}
            <input type="text"
            id='address'
            placeholder='Tampere, Finland'
            value={generalValueS.address}
            onChange={onChange}
            />
        </label>
        </div>
    </>
  );
  } else {
    return (
        <>
        <button onClick={showForm} className="openGeneral">Personal Info</button>
        </>
    )
  }
}

