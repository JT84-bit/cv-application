import { useState } from 'react';
import '../styles/General.css'

export default function General({firstName, lastName, email, address, phone, linkedin}) {
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
    <button onClick={closeForm} className="openEducation">Personal Info</button>
      <div className="general">
        <div className="name">
        <label>
          Firstname:{' '}
          <input
            type="text"
            value={firstName}
            //onChange={handleFirstNameChange}
          />
        </label>

        <label>
          Lastname:{' '}
          <input type="text" value={lastName} //onChange={handleLastNameChange}
           />
        </label>
        </div>
        <div className="secondRow">
        <label>
            Address:{' '}
            <input type="text"
            value={address}
            //onChange={handleAddressChange}
            />
        </label>
        <label>
            Phone:{' '}
            <input type="tel"
            value={phone}
            //onChange={handlePhoneChange}
            />
        </label>
        </div>
        <div className="thirdRow">
        <label>
            Email:{' '}
            <input type="email"
            value={email}
            //onChange={handleEmailChange}
            />
        </label>
        <label>
            Linkedin:{' '}
            <input type="text"
            value={linkedin}
            //onChange={handleLinkedinChange}
            />
        </label>
        </div>
      </div>
    </>
  );
  } else {
    return (
        <>
        <button onClick={showForm} className="openEducation">Personal Info</button>
        </>
    )
  }
}

