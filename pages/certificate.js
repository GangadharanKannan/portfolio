import { styled } from '../stitches.config'
import Head from 'next/head'
import Image from 'next/image'
import { Wrapper } from '../components/Wrapper'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const certificates = [
  {
    id: 1,
    title: 'The Complete Javascript Course 2025',
    issuer: 'Udemy',
    badge: 'JS',
    issuedDate: 'August 2025',
    certId: 'UC-bc5d79a9-bc89-4037-a0df-2e6ae2de420a',
    category: 'Programming',
    image: '/static/images/certificates/udemy-js.png',
    link: 'https://www.udemy.com/certificate/UC-bc5d79a9-bc89-4037-a0df-2e6ae2de420a/'
  },
  {
    id: 2,
    title: 'Hands On React JS From Beginner to Expert',
    issuer: 'Udemy',
    badge: 'React',
    issuedDate: 'August 2025',
    certId: 'UC-64be2b3a-ab0a-493f-86cd-bf20db331937',
    category: 'Programming',
    image: '/static/images/certificates/udemy-react.png',
    link: 'https://www.udemy.com/certificate/UC-64be2b3a-ab0a-493f-86cd-bf20db331937/'
  },
  {
    id: 3,
    title: 'MongoDB Basics for Students',
    issuer: 'MongoDB',
    badge: 'MongoDB',
    issuedDate: 'July 2025',
    certId: 'MONGODB-3456',
    category: 'Database',
    image: '/static/images/certificates/mongodb-img.png',
    link: 'https://www.credly.com/badges/ef525bd0-a09b-42a6-9637-02ae9e3bcad7'
  },
  {
    id: 4,
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Service',
    badge: 'AWS',
    issuedDate: 'April 2024',
    certId: 'AWS-901234',
    category: 'Database',
    image: '/static/images/certificates/aws.png',
    link: 'https://www.credly.com/go/cQ2oTQR5'
  },
  {
    id: 5,
    title: 'Web Technology',
    issuer: 'IGNOU',
    badge: 'SWAYAM',
    issuedDate: 'January 2025',
    certId: 'TN14002677',
    category: 'Programming',
    image: '/static/images/certificates/wt.png',
    link: 'https://drive.google.com/file/d/1YvOPvuNUcWWu3uF7xWFMo4g1Ks0O2sJl/view?usp=drivesdk'
  },
  {
    id: 6,
    title: 'JavaScript Bootcamp',
    issuer: 'LEARNZ DEVELOPMENT HUB',
    badge: 'JS',
    issuedDate: 'December 2024',
    certId: 'CERT-2025-1cd358b8-c452-4fdf-b28b-61f28542092a',
    category: 'Programming',
    image: '/static/images/certificates/lnz.png',
    link: 'https://learnzconnect.com/certificates/CERT-2025-1cd358b8-c452-4fdf-b28b-61f28542092a'
  },
  {
    id: 7,
    title: 'HTML & CSS',
    issuer: 'GUVI',
    badge: 'HTML & CSS',
    issuedDate: 'February 2024',
    certId: 's117m6jh92K57PB05k',
    category: 'Programming',
    image: '/static/images/certificates/html-css.png',
    link: 'https://www.guvi.in/share-certificate/s117m6jh92K57PB05k'
  }
]

export async function getStaticProps() {
  return {
    props: {
      title: 'Courses. Credentials. Confidence',
      description: 'Professional certifications and achievements',
      image: '/static/images/home-bw.jpg',
    },
  }
}

export default function Certificate(props) {
  const { title, description } = props

  const groupedCertificates = certificates.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = []
    }
    acc[cert.category].push(cert)
    return acc
  }, {})

  return (
    <Wrapper>
      <Head>
        <title>Certificate // Gangadharan</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
      </Head>

      <Navbar />
      <CertificateSection>
        <PostContent>
          <PostContainer>
            <div>
              <CertificateHeading>{title}</CertificateHeading>
              <p>{description}</p>
              
              <CertificateContent>
                {Object.entries(groupedCertificates).map(([category, certs]) => (
                  <Section key={category}>
                    <h2>{category} Certifications</h2>
                    <CertGrid>
                      {certs.map((cert) => (
                        <CertCard key={cert.id} href={cert.link} target="_blank" rel="noopener noreferrer">
                          <CertImage>
                            <Image
                              src={cert.image}
                              alt={cert.title}
                              width={300}
                              height={180}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                            <CertOverlay className="cert-overlay">
                              <ViewButton>View Certificate</ViewButton>
                            </CertOverlay>
                          </CertImage>
                          <CertHeader>
                            <h3>{cert.title}</h3>
                            <CertBadge>{cert.badge}</CertBadge>
                          </CertHeader>
                          <p>{cert.issuer}</p>
                          <CertDate>Issued: {cert.issuedDate}</CertDate>
                          <CertId>ID: {cert.certId}</CertId>
                        </CertCard>
                      ))}
                    </CertGrid>
                  </Section>
                ))}
              </CertificateContent>
            </div>
          </PostContainer>
        </PostContent>
      </CertificateSection>
      <Footer />
    </Wrapper>
  )
}

const CertificateSection = styled(PostMain, {
  alignItems: 'flex-start',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})

const CertificateContent = styled('div', {
  marginTop: '30px',
})

const Section = styled('div', {
  marginBottom: '40px',
  
  '& h2': {
    color: '$primary',
    marginBottom: '20px',
    fontSize: '24px',
  },
  
  '& p': {
    marginBottom: '15px',
    lineHeight: '1.6',
  },
})

const CertGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
  marginTop: '15px',
})

const CertCard = styled('a', {
  background: '$hover',
  padding: '15px',
  borderRadius: '$borderRadius',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  textDecoration: 'none',
  color: 'inherit',
  display: 'block',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '$primary',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    
    '& .cert-overlay': {
      opacity: 1,
    },
  },
})

const CertImage = styled('div', {
  width: '100%',
  height: '180px',
  overflow: 'hidden',
  borderRadius: '$borderRadius',
  marginBottom: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  
  '&:hover img': {
    transform: 'scale(1.05)',
  },
})

const CertOverlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  borderRadius: '$borderRadius',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
})

const ViewButton = styled('span', {
  background: '$primary',
  color: '$background',
  padding: '12px 24px',
  borderRadius: '$borderRadius',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  transition: 'all 0.2s ease-in-out',
  
  '&:hover': {
    background: '$orange',
    transform: 'scale(1.05)',
  },
})

const CertHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '10px',
  
  '& h3': {
    color: '$primary',
    fontSize: '16px',
    margin: 0,
    flex: 1,
  },
})

const CertBadge = styled('span', {
  background: '$primary',
  color: '$background',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})

const CertDate = styled('p', {
  color: '$secondary',
  fontSize: '13px',
  margin: '8px 0 3px 0',
})

const CertId = styled('p', {
  color: '$secondary',
  fontSize: '11px',
  opacity: 0.7,
  margin: 0,
})

const CertificateHeading = styled('h1', {
  color: '$purple',
  fontFamily: '$heading',
  fontSize: '48px',
  lineHeight: '50px',
  margin: '0 0 20px',
  '::selection': {
    background: '$orange',
    color: '$background',
  },
}) 