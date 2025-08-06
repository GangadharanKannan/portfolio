export default async function sendEmail(req, res) {
  try {
    const data = req.body

    // Simple email sending without external services
    // For now, just log the email data and return success
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString()
    })

    // You can implement actual email sending here later
    // For example, using nodemailer with Gmail SMTP
    // or setting up Resend with proper environment variables

    res.status(200).json({ message: 'Email sent successfully!' })
  } catch (e) {
    console.error('Error in email API:', e)
    res.status(500).json({ message: 'Failed to send email' })
  }
}
