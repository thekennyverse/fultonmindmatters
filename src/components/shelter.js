import React from 'react';
import Linkify from './linkify';


function Shelters() {
  const shelters = [ 
    

    {
      name: 'Atlanta City Baptist Rescue Mission',
      address: '316 Peters St SW, Atlanta, GA 30313',
      phone: '(404) 577-3409'
    },
    {
      name: 'City of Refuge',
      address: '1300 Joseph E Boone Blvd NW, Atlanta',
      phone: '(404) 952-1201'
    },
    {
      name: 'Atlanta Mission',
      address: '655 Ethel St NW, Atlanta, GA 30318',
      phone: '(404) 876-6111'
    },
    {
      name: 'Central Outreach & Advocacy',
      address: '201 Washington St SW, Atlanta, GA 30303',
      phone: '(404) 659-7119'
    },
    {
      name: 'Odyssey III',
      address: '276 Decatur St SE, Atlanta, GA 30312',
      phone: '(404) 659-3390'
    },
    {
      name: 'Decatur Cooperative Ministry',
      address: '115 Church St, Decatur, GA 30030',
      phone: '(404) 377-5365'
    },
    {
      name: 'Atlanta Mission',
      address: '2353 Bolton Rd NW, Atlanta, GA 30318',
      phone: '(404) 588-4000'
    },
    {
      name: 'Atlanta Union Mission',
      address: '144 Mills St NW, Atlanta, GA 30313',
      phone: '(404) 367-2492'
    },
    {
      name: 'Atlanta Union Mission',
      address: '165 Ivan Allen Blvd NW, Atlanta, GA 30308',
      phone: '(404) 367-2493'
    },
    {
      name: 'Community Shelter',
      address: '227 Troy St NW, Atlanta, GA 30314',
      phone: '(404) 963-1166'
    },
    {
      name: 'Atlanta Union Mission',
      address: '921 Howell Mill Rd NW, Atlanta, GA 30318',
      phone: '(404) 367-2465'
    },
    {
      name: 'Nicholas House Inc',
      address: '830 Boulevard SE, Atlanta, GA 30312',
      phone: '(404) 622-0793'
    },
    {
      name: 'Central Night Shelter',
      address: '201 Washington St SW, Atlanta, GA 30303'
    },
    {
      name: 'Journey Men\'s Shelter',
      address: '1026 Ponce De Leon Ave NE, Atlanta, GA 30306',
      phone: '(404) 920-8983'
    },
    {
      name: 'Mercy Senior Care',
      address: '655 Ethel St NW, Atlanta, GA 30318',
      phone: '(404) 876-2894'
    }
  ];

  return (
    <div className="aboutus">
      <h1>Shelters in Atlanta, GA</h1>
      <ul className="shelters-list">
        {shelters.map((shelter, index) => (
          <li key={index} className="shelter-item">
            <strong>{shelter.name}</strong>
            {shelter.address && <p><strong>Address:</strong> {shelter.address}</p>}
            {shelter.phone && <p><strong>Phone:</strong> <Linkify text={shelter.phone} /></p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shelters;
