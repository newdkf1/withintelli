import React from 'react';

interface LeadFormEmailProps {
  name: string
  businessName: string
  employeeSize:string
  email: string
  comments: string

}

export const LeadFormEmail: React.FC<Readonly<LeadFormEmailProps>> = ({
  name, businessName, employeeSize, email, comments
}) => (
  <div>
    <h1>NEW LEAD INFO</h1>
    <p>-------</p>

    <h2>Name:</h2>
    <p>{name}</p>

    <h2>Business Name:</h2>
    <p>{businessName}</p>

    <h2>Employee Size:</h2>
    <p>{employeeSize}</p>

    <h2>Email:</h2>
    <p>{email}</p>

    <h2>Comments:</h2>
    <p>{comments}</p> 


  </div>
)