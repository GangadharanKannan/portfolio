import { styled } from '../stitches.config'
import Head from 'next/head'
import { Wrapper } from '../components/Wrapper'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Base from '../layouts/Base'
import Image from 'next/image'

export async function getStaticProps() {
  return {
    props: {
      title: 'About',
      tagline: 'Code. Coffee. Consistency.',
      description: 'Passionate developer and technology enthusiast',
      image: '/static/images/home-bw.jpg',
      primaryColor: 'purple',
      secondaryColor: 'pink',
    },
  }
}

export default function About(props) {
  const { title, description } = props

  return (
    <>
      <Head>
        <title>{title} </title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
      </Head>

      <AboutContent>
        <HeroSection>
          <ImageContainer>
            <Image
              src="/static/images/avatar.png"
              alt="Gangadharan"
              width={500}
              height={500}
              style={{
                objectFit: 'cover',
              }}
            />
          </ImageContainer>
          <ContentContainer>
            <p>
              I started as a software engineer back in 2022, working with modern web technologies.
            </p>
            <p>
              I'm a <strong>Full Stack Developer</strong> with expertise in React, Node.js, and modern web development. 
              I'm originally from India and currently pursuing my degree in Computer Science at 
              <strong> Dhanalakshmi Srinivasan Engineering College</strong>.
            </p>
            <p>
              I love <strong>coding</strong>, open source, and side projects. When I'm not working, 
              I like exploring new technologies, contributing to open source, and <strong>building in public</strong>.
            </p>
          </ContentContainer>
        </HeroSection>

        <Section>
          <h2>My Skills</h2>
          <SkillsGrid>
            <SkillCard>
              <SkillIcon>🎨</SkillIcon>
              <h3>Frontend</h3>
              <ul>
                <li>React.js & Next.js</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </SkillCard>
            <SkillCard>
              <SkillIcon>⚙️</SkillIcon>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </SkillCard>
            <SkillCard>
              <SkillIcon>🛠️</SkillIcon>
              <h3>Tools</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Prisma</li>
                <li>AWS</li>
                <li>Figma</li>
                <li>VS Code</li>
                <li>Postman</li>
              </ul>
            </SkillCard>
          </SkillsGrid>
        </Section>

        <Section>
          <h2>Experience</h2>
          <ExperienceList>
            <ExperienceItem>
              <ExperienceHeader>
                <h3>Web Developer Intern</h3>
                <ExperienceBadge>2025 - Present</ExperienceBadge>
              </ExperienceHeader>
              <ExperienceCompany>Tech Vaseegrah</ExperienceCompany>
              <p>Developed responsive UI components for Intaxbot, an Instagram automation platform, using React and Tailwind CSS. Collaborated with the development team to implement new features and improve user experience.</p>
            </ExperienceItem>
            

          </ExperienceList>
        </Section>

        <Section>
          <h2>Education</h2>
          <EducationCard>
            <EducationHeader>
              <h3>Bachelor's in Computer Science</h3>
              <EducationBadge>2022 - 2026</EducationBadge>
            </EducationHeader>
            <EducationInstitution>Dhanalakshmi Srinivasan Engineering College</EducationInstitution>
            <p>Currently pursuing my degree with focus on software engineering, web development, and computer science fundamentals. Maintaining a strong academic record while actively participating in coding competitions and hackathons.</p>
          </EducationCard>
        </Section>
      </AboutContent>
    </>
  )
}

About.Layout = Base

const AboutContent = styled('div', {
  marginTop: '30px',
})

const HeroSection = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '40px',
  alignItems: 'center',
  marginBottom: '60px',
  
  '@bp3': {
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    gap: '30px',
  },
})

const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  
  '& img': {
    borderRadius: '12px',
  },
})

const ContentContainer = styled('div', {
  '& h2': {
    color: '$primary',
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  
  '& p': {
    marginBottom: '15px',
    lineHeight: '1.7',
    fontSize: '16px',
    color: '$secondary',
  },
  
  '& strong': {
    color: '$primary',
    fontWeight: 'bold',
  },
})

const Section = styled('div', {
  marginBottom: '60px',
  
  '& h2': {
    background: 'linear-gradient(135deg, $purple 0%, $pink 100%)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    marginBottom: '30px',
    fontSize: '24px',
  },
  
  '& p': {
    marginBottom: '15px',
    lineHeight: '1.6',
  },
})

const SkillsGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '25px',
  marginTop: '20px',
})

const SkillCard = styled('div', {
  padding: '25px',
  
  '& h3': {
    background: 'linear-gradient(135deg, $purple 0%, $pink 100%)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    marginBottom: '15px',
    fontSize: '18px',
  },
  
  '& ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  
  '& li': {
    color: '$secondary',
    marginBottom: '8px',
    paddingLeft: '15px',
    position: 'relative',
    
    '&:before': {
      content: '"•"',
      color: '$purple',
      position: 'absolute',
      left: 0,
    },
  },
})

const SkillIcon = styled('div', {
  fontSize: '32px',
  marginBottom: '15px',
})

const ExperienceList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
})

const ExperienceItem = styled('div', {
  padding: '25px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  
  '&:last-child': {
    borderBottom: 'none',
  },
})

const ExperienceHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '10px',
  
  '& h3': {
    background: 'linear-gradient(135deg, $purple 0%, $pink 100%)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    marginBottom: '5px',
    fontSize: '18px',
  },
})

const ExperienceBadge = styled('span', {
  background: 'linear-gradient(135deg, $purple 0%, $pink 100%)',
  color: '$background',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})

const ExperienceCompany = styled('p', {
  color: '$secondary',
  marginBottom: '10px',
  fontSize: '14px',
  fontWeight: '500',
})

const EducationCard = styled('div', {
  padding: '25px 0',
})

const EducationHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '10px',
  
  '& h3': {
    background: 'linear-gradient(135deg, $purple 0%, $pink 100%)',
    backgroundSize: '100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    MozBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    MozTextFillColor: 'transparent',
    marginBottom: '5px',
    fontSize: '18px',
  },
})

const EducationBadge = styled('span', {
  background: 'linear-gradient(135deg, $purple 0%, $pink 100%)',
  color: '$background',
  padding: '4px 12px',
  borderRadius: '20px',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})

const EducationInstitution = styled('p', {
  color: '$secondary',
  marginBottom: '10px',
  fontSize: '14px',
  fontWeight: '500',
})
