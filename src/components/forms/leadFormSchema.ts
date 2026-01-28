import { z } from 'zod'

export const LeadFormSchema = z.object({
    name:         z.string().min(1, 'First name is required').max(64, "Should be less than 64 characters"),
    businessName: z.string().min(1, 'Business name is required').max(64, "Should be less than 64 characters"),
    employeeSize: z.string().min(1, 'Employee Size is required').max(32, "Should be less than 32 characters"),

    email:        z.string().min(1, 'Email is required').max(64, "Should be less than 64 characters").email('Invalid email address'),

    comments:     z.string().min(1, 'Message must be at least 1 characters').max(600, "Should be less than 600 characters"),

})