import React from 'react';
import Linkify from './linkify';

function Family() {
  const resources = [
    {
      name: 'Making A Way Housing',
      details: 'Men and Women Individuals. 1905 Joseph E. Boone Blvd NW, Atlanta, GA 30314. Contact: (404) 792-8011. Website: https://www.makingawayhousing.org/programs',
    },
    {
      name: 'Our House',
      details: 'Serving families/families must have one (1) infant child six (6) months old or younger. Address: 173 Boulevard NE Atlanta, GA 30312. Contact: 404.522.6056. Website: ourhousega.org',
    },
    {
      name: 'Hope Atlanta',
      details: 'Housing Vouchers and Stranded Travel Assistance. 34 Peachtree St #700 Atlanta, GA 30303. Contact: 404-817-7070. Email: info@hopeatlanta.org',
    },
    {
      name: 'Odyssey Villas III',
      details: 'Community Concerns (Temporary Shelter and Financial Assistance). 276 Decatur Street Southeast Atlanta, GA 30312. Contact: 678-928-4177. Website: http://www.communityconcernsinc.com/',
    },
  ];

  const shelters = [
    {
      name: 'Gateway Center',
      details: 'Serving males/females/families experiencing homelessness. Address: 275 Pryor Street SW Atlanta, GA 30303. Contact: 404.215.6600. Website: gatewayctr.org. Coordinated Entry Assessments provided.',
    },
    {
      name: 'Mary Hall Freedom House',
      details: 'Serving women/women and their children/substance abuse. Address: 8995 Roswell Rd Sandy Springs, GA 30350. Contact Main Line: 770.642.5500. Connections Specialist: 470-260-4751. Website: maryhallfreedomhouse.org. Several housing programs available.',
    },
    {
      name: 'Atlanta Mission: My Sister’s House',
      details: 'Serving women/women and their children. Address: 921 Howell Mill Rd. Atlanta, GA 30318. Contact: 404-367-2465. Website: atlantamission.org',
    },
    {
      name: 'Atlanta Mission: Restoration House',
      details: 'Serving women/women and their children. Address: 655 Ethel St. NW. Atlanta, GA 30318. Contact: 404.588.4007. Website: atlantamission.org',
    },
    {
      name: 'Nicholas House',
      details: 'Serving families including fathers. Address: P.O. Box 15577 Atlanta, GA 30333. Contact: 404.622.0793. Website: nicholashouse.org',
    },
  ];

  const domesticViolence = [
    {
      name: 'Partnership Against Domestic Violence (PADV)',
      details: 'Contact: 404.873.1766. Website: https://padv.org',
    },
    {
      name: 'State Certified Domestic Violence Resource List',
      details: 'Website: https://cjcc.georgia.gov/grants/grant-subject-areas/domestic-violence/resources',
    },
    {
      name: 'National Domestic Violence Hotline',
      details: 'Contact: 800-799-7233. Website: https://www.thehotline.org. Resource List',
    },
  ];

  return (
    <div className="aboutus">
      <h1>Temporary Housing and Assistance Resources</h1>
      <h2>Resources:</h2>
      <ul className="resource-list">
        {resources.map((resource, index) => (
          <li key={index}>
            <strong>{resource.name}</strong>: <Linkify text={resource.details} />
          </li>
        ))}
      </ul>
      <h2>Shelters:</h2>
      <ul className="resource-list">
        {shelters.map((shelter, index) => (
          <li key={index}>
            <strong>{shelter.name}</strong>: <Linkify text={shelter.details} />
          </li>
        ))}
      </ul>
      <h2>Domestic Violence Resources:</h2>
      <ul className="resource-list">
        {domesticViolence.map((dv, index) => (
          <li key={index}>
            <strong>{dv.name}</strong>: <Linkify text={dv.details} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Family;
