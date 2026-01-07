# EmailJS Setup Guide

## Environment Variables Setup

The EmailJS integration now uses environment variables for security. Your credentials are stored in `.env` file:

```
PUBLIC_EMAILJS_PUBLIC_KEY=Nhk-3D9RbkDMRitHI
PUBLIC_EMAILJS_SERVICE_ID=service_1xpbrwa
PUBLIC_EMAILJS_TEMPLATE_ID=template_go36kye
```

## Security Benefits

- **GitHub Safe**: The `.env` file is excluded from version control
- **No Hardcoded Secrets**: API keys are not visible in your source code
- **Easy Configuration**: Change credentials without modifying code

## Deployment Setup

When deploying to production (Vercel, Netlify, etc.), add these environment variables:

1. **Vercel**: Go to Project Settings → Environment Variables
2. **Netlify**: Go to Site Settings → Environment Variables
3. **Other Platforms**: Add the three PUBLIC_* variables to your hosting platform

## EmailJS Template Setup

Your template ID is now correctly set to: `template_go36kye`

### Template Variables
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{phone}}` - Sender's phone number
- `{{package}}` - Selected travel package
- `{{message}}` - User's message
- `{{to_name}}` - Recipient name (set to "Boundless Travelogues Team")

### Sample Email Template
```
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Interested Package: {{package}}

Message:
{{message}}

---
This message was sent from the Boundless Travelogues contact form.
```

## How It Works

1. User fills out the contact form
2. Form validates required fields and email format
3. EmailJS sends the form data using environment variables
4. You receive the formatted email with all contact details
5. User sees success/error message based on the result

## Local Development

1. Copy `.env.example` to `.env`
2. Fill in your actual EmailJS credentials
3. The `.env` file is automatically ignored by Git

## Testing

To test the integration:
1. Fill out the contact form on your website
2. Check your email inbox for the formatted message
3. Verify all form fields are properly populated in the email

## Troubleshooting

If emails aren't being sent:
1. Verify your EmailJS service is active
2. Check that all environment variables are set correctly
3. Ensure your EmailJS account has sufficient quota
4. Check browser console for any error messages
5. Verify the template ID `template_go36kye` exists in your EmailJS dashboard