// Contact.js

import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '/Users/kennyverse/Digitalcraft/Mental Health Project/fultonmindmatters/src/components/contact.css'; 

function Contact() {

  const team = [
    {
      name: 'Kenneth Doe',
      role: 'Developer',
      email: 'Kenneth@example.com'
    },
    {
      name: 'ADDY Doe',
      role: 'Designer',
      email: 'ADDY@example.com'
      
    },
    {
      name: 'Carl Doe',
      role: 'Developer',
      email: 'Carl@example.com'
    },
    {
      name: 'Sebastian Doe',
      role: 'Designer',
      email: 'Sebastian@example.com'
      
    },
    {
      name: 'Chris Doe ',
      role: 'Developer',
      email: 'Chris@example.com'
    },
    {
      name: 'Carla Doe',
      role: 'Designer',
      email: 'Carla@example.com'
      
    },
    {
      name: 'Izzy',
      role: 'Developer',
      email: 'Izzy@example.com'
    },
    {
      name: ' Kenny',
      role: 'Designer',
      email: 'kenny@example.com'
      
    },
    // etc
  ];

  const [index, setIndex] = useState(0);

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <div className="card-slider">
      
        <div className="card" style={{transform: `translateX(-${index * 100}%)`}}>
        
          {team.map(member => (
            <div className="card-container">
              <h3>{member.name}</h3>
              <p>{member.role}</p> 
              <p>{member.email}</p>
            </div>
          ))}
          
        </div>

        <FiChevronLeft onClick={() => setIndex(index => index - 1)}/>
        <FiChevronRight onClick={() => setIndex(index => index + 1)}/>

      </div>

    </div>
  );

}

export default Contact;