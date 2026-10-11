import React from 'react';
import Linkify from './linkify';

function Finances() {
  const additionalResources = [
    {
      name: 'Georgia Division of Family & Children Services',
      details: 'Contact: 1-855-GA-CHILD (1-855-422-4453). Website: https://dfcs.georgia.gov/how-report-child-abuse',
    },
    {
      name: 'Substance Abuse and Mental Health Services Administration (SAMHSA) National Helpline',
      details: 'Contact: 1-800-662-4357. Website: https://www.samhsa.gov/find-help/national-helpline',
    },
    {
      name: '988 Suicide & Crisis Lifeline',
      details: 'Call or text 988, or chat online, 24/7. Website: https://988lifeline.org',
    },
    {
      name: 'Westside Future Fund',
      details: 'Low Cost rentals on the West End. The 1300 partners with Westside Future Fund, but they are in charge of the complex, we are the connection. Typically, they are very full but WFF have multiple locations. Contact: 470-377-1696. Email: home@wesidefuturefund.org',
    },
  ];

  const financialAssistance = [
    {
      name: 'Salvation Army - Metro Atlanta Area (Financial Assistance)',
      details: 'This agency provides emergency assistance to persons in a crisis situation in the areas of food, clothing, lodging, rent and utility assistance, counseling, and referrals to other comprehensive crisis centers. Contact: (404) 486-2888',
    },
    {
      name: 'Georgia Department Of Community Affairs',
      details: 'This agency is administering the State of Georgia Rental Assistance Program (GRA), helping renters with their past due rent and utilities. Payments go directly to landlords and utility providers. Contact: (833) 827-7368',
    },
  ];

  return (
    <div className="aboutus">
      <h1>Financial Assistance and Additional Resources</h1>
      <h2>Additional Resources:</h2>
      <ul className="resource-list">
        {additionalResources.map((resource, index) => (
          <li key={index}>
            <strong>{resource.name}</strong>: <Linkify text={resource.details} />
          </li>
        ))}
      </ul>
      <h2>Financial Assistance Programs:</h2>
      <ul className="resource-list">
        {financialAssistance.map((assistance, index) => (
          <li key={index}>
            <strong>{assistance.name}</strong>: <Linkify text={assistance.details} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Finances;
