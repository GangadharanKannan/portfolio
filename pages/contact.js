import React from 'react'
import Head from 'next/head'
import { Wrapper } from '../components/Wrapper'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Toast from '../components/Toast'
import { styled } from '../stitches.config'
import emailjs from '@emailjs/browser'

export async function getStaticProps() {
  return {
    props: {
      title: 'Contact. Connect. Contribute.',
      description: 'Get in touch with me',
      primaryColor: 'pink',
      secondaryColor: 'purple',
    },
  }
}

function Contact(props) {
  const { title, description, primaryColor, secondaryColor } = props
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [showToast, setShowToast] = React.useState(false)
  const [toastData, setToastData] = React.useState({ title: '', description: '', isSuccess: true })

  const onSendEmail = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_foplcxd', 
        'template_itdlur7', 
        e.target,
        'J5feVFuFA5WucG8vR' 
      )

      if (result.status === 200) {
        // Clear form
        e.target.reset()
        setToastData({
          title: 'Message sent successfully! 🎉',
          description: 'Thanks for reaching out. I\'ll get back to you soon!',
          isSuccess: true
        })
        setShowToast(true)
      } else {
        setToastData({
          title: 'Failed to send message 😔',
          description: 'Something went wrong. Please try again.',
          isSuccess: false
        })
        setShowToast(true)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setToastData({
        title: 'Failed to send message 😔',
        description: 'Something went wrong. Please try again.',
        isSuccess: false
      })
      setShowToast(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Wrapper>
      <Head>
        <title>Contact // Gangadharan</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />

      </Head>

      <Navbar />
      <ContactSection
        css={{
          '& ::selection': {
            background: `$${primaryColor}`,
            color: '#000',
            WebkitTextFillColor: '#000',
          },
        }}
      >
        <PostContent>
          <PostContainer>
            <div>
              <GradientTitle
                css={{
                  backgroundImage: `linear-gradient(
                    135deg,
                    $${primaryColor} 0%,
                    $${secondaryColor} 100%
                  );`,
                }}
              >
                {title}
              </GradientTitle>
              
              <ContactContent>
                <Section>
                  <p>
                    I'm always excited to collaborate, build, and learn. Whether you have a question, a project idea, or just want to say hello - feel free to reach out.
                  </p>
                </Section>

                <ContactGrid>
                  <ContactForm>
                    <h2>Send me a message</h2>
                    <Form onSubmit={onSendEmail}>
                      <FormGroup>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" name="name" type="text" placeholder="Your name" required />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="How can I help you?" rows="4" required />
                      </FormGroup>
                      <FormGroup>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </FormGroup>
                    </Form>
                  </ContactForm>

                </ContactGrid>

              </ContactContent>
            </div>
          </PostContainer>
        </PostContent>
      </ContactSection>
      <Footer />

      <Toast
        title={toastData.title}
        description={toastData.description}
        isSuccess={toastData.isSuccess}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </Wrapper>
  )
}

const GradientTitle = styled('h1', {
  backgroundSize: '100%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozTextFillColor: 'transparent',
  WebkitBoxDecorationBreak: 'clone',
  fontSize: '48px',
  lineHeight: '50px',
  margin: '0 0 20px',
  fontFamily: '$heading',
})

const ContactSection = styled(PostMain, {
  alignItems: 'flex-start',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})

const ContactContent = styled('div', {
  marginTop: '10px',
})

const Section = styled('div', {
  marginBottom: '10px',
  
  '& h2': {
    color: '$primary',
    marginBottom: '20px',
    fontSize: '24px',
  },
  
  '& p': {
    marginBottom: '10px',
    lineHeight: '1.6',
  },
})

const ContactGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '25px',
  marginTop: '5px',
  
  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  },
})

const ContactForm = styled('div', {
  '& h2': {
    color: '$primary',
    marginBottom: '10px',
    fontSize: '20px',
  },
})

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
})

const FormGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '15px',
})

const Label = styled('label', {
  color: '$secondary',
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: '500',
  marginBottom: '6px',
})

const Input = styled('input', {
  color: '$primary',
  background: 'none',
  border: '1px solid $secondary',
  borderRadius: '$borderRadius',
  padding: '12px',
  fontSize: '16px',
  
  '&:focus': { 
    outline: 'none', 
    borderColor: '$cyan',
    boxShadow: '0 0 0 2px rgba(128, 255, 234, 0.2)',
  },
})

const Textarea = styled('textarea', {
  color: '$primary',
  background: 'none',
  border: '1px solid $secondary',
  borderRadius: '$borderRadius',
  padding: '12px',
  fontSize: '16px',
  resize: 'vertical',
  
  '&:focus': { 
    outline: 'none', 
    borderColor: '$cyan',
    boxShadow: '0 0 0 2px rgba(128, 255, 234, 0.2)',
  },
})

const Button = styled('button', {
  color: '$background',
  background: '$primary',
  border: '1px solid $primary',
  borderRadius: '$borderRadius',
  cursor: 'pointer',
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: '500',
  transition: 'all 0.2s ease-in-out',
  
  '&:hover': { 
    background: 'transparent', 
    color: '$primary',
  },
  
  '&:focus': { 
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(242, 242, 242, 0.2)',
  },
})

// const ContactInfo = styled('div', {
//   '& h2': {
//     color: '$primary',
//     marginBottom: '20px',
//     fontSize: '20px',
//   },
// })

// const InfoList = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '15px',
// })

// const InfoItem = styled('div', {
//   display: 'flex',
//   gap: '15px',
//   padding: '15px',
//   background: '$hover',
//   borderRadius: '$borderRadius',
//   border: '1px solid rgba(255, 255, 255, 0.1)',
  
//   '& h3': {
//     color: '$primary',
//     marginBottom: '5px',
//     fontSize: '16px',
//   },
  
//   '& p': {
//     color: '$secondary',
//     marginBottom: '5px',
//     fontSize: '14px',
    
//     '&:last-child': {
//       marginBottom: 0,
//       fontSize: '12px',
//       opacity: 0.8,
//     },
//   },
// })

// const InfoIcon = styled('div', {
//   fontSize: '24px',
//   flexShrink: 0,
// })

// const InterestGrid = styled('div', {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//   gap: '20px',
//   marginTop: '20px',
// })

// const InterestItem = styled('div', {
//   textAlign: 'center',
//   padding: '20px',
//   background: '$hover',
//   borderRadius: '$borderRadius',
//   border: '1px solid rgba(255, 255, 255, 0.1)',
  
//   '& h3': {
//     color: '$primary',
//     marginBottom: '8px',
//     fontSize: '18px',
//   },
  
//   '& p': {
//     color: '$secondary',
//     fontSize: '14px',
//     lineHeight: '1.5',
//   },
// })

// const InterestIcon = styled('div', {
//   fontSize: '32px',
//   marginBottom: '12px',
// })

export default Contact
