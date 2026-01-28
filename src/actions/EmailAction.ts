'use server'

import { z } from 'zod'
import { Resend } from 'resend';
import React from 'react';

import { LeadFormSchema } from '@/components/forms/leadFormSchema';
import { LeadFormEmail } from '@/components/forms/leadFormEmail';

const resend = new Resend(process.env.RESEND_API_KEY)

type LeadFormInputs = z.infer<typeof LeadFormSchema>

export async function sendEmail(data: LeadFormInputs) {

  const name = data.name
  const businessName = data.businessName
  const employeeSize = data.employeeSize

  const email = data.email

  const comments = data.comments

  try {
        const {data, error} = await resend.emails.send({
          from: 'support@intelli4.co',
          to: ['n8systemsofficial@gmail.com'],
          subject: 'New RFQ',
          text: "New Lead Details",
          react: LeadFormEmail({ name, businessName, employeeSize, email, comments }) as React.ReactElement
        });



        if (error) {
          return {success: false, message: "Something went wrong"}
        } else {
          return {success: true, message: "Done"}
        }
  }
  catch (error) {
      return {success: false, message: "Something went wrong"}
  }


}


