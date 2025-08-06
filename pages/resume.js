import { styled } from '../stitches.config'
import Head from 'next/head'
import { Wrapper } from '../components/Wrapper'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export async function getStaticProps() {
  return {
    props: {
      title: 'Profile. Potential. Progress.',
      description: 'Professional resume and experience',
      image: '/static/images/home-bw.jpg',
      primaryColor: 'orange',
      secondaryColor: 'red',
    },
  }
}

export default function Resume(props) {
  const { title, description, primaryColor, secondaryColor } = props

  return (
    <Wrapper>
      <Head>
        <title>Resume // Gangadharan</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />

      </Head>

      <Navbar />
      <ResumeSection
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
              
              <ResumeContent>
                <Section>
                  <p>
                    Experienced Full Stack Developer with expertise in modern web technologies. 
                    Passionate about creating scalable, user-friendly applications and leading development teams.
                  </p>
                  <p>
                    Strong background in React, Node.js, and MongoDB with a proven track record of 
                    delivering high-quality software solutions.
                  </p>
                </Section>

                                  <DownloadSection>
                    <DownloadButton href="/resume.pdf" download>
                      📄 Download Resume (PDF)
                    </DownloadButton>
                  </DownloadSection>
              </ResumeContent>
            </div>
          </PostContainer>
        </PostContent>
      </ResumeSection>
      <Footer />
    </Wrapper>
  )
}

const ResumeSection = styled(PostMain, {
  alignItems: 'flex-start',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})

const ResumeContent = styled('div', {
  marginTop: '20px',
})

const DownloadSection = styled('div', {
  marginTop: '40px',
  textAlign: 'center',
})

const DownloadButton = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  background: 'linear-gradient(135deg, $orange 0%, $red 100%)',
  color: '$background',
  padding: '16px 32px',
  borderRadius: '$borderRadius',
  textDecoration: 'none',
  fontSize: '16px',
  fontWeight: '500',
  transition: 'all 0.2s ease-in-out',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 165, 0, 0.3)',
  },
  
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(255, 165, 0, 0.3)',
  },
})

const Section = styled('div', {
  marginBottom: '30px',
  
  '& p': {
    marginBottom: '15px',
    lineHeight: '1.6',
    fontSize: '16px',
    color: '$secondary',
  },
})

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