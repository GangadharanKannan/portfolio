import { styled } from '../stitches.config'
import { Wrapper } from '../components/Wrapper'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Custom500() {
  return (
    <Wrapper>
      <Navbar />
      <ErrorSection>
        <PostContent>
          <PostContainer>
            <div>
              <h1>500 - Server Error</h1>
              <p>
                <strong>Something went wrong on our end</strong><br />
                We're working to fix the problem. Please try again later.
              </p>
              
              <ErrorContent>
                <ErrorIcon>⚠️</ErrorIcon>
                <p>
                  This is a server-side error. The page you're looking for encountered an unexpected condition 
                  that prevented it from fulfilling the request.
                </p>
                <ErrorActions>
                  <ErrorButton onClick={() => window.history.back()}>
                    Go Back
                  </ErrorButton>
                  <ErrorButton onClick={() => window.location.href = '/'}>
                    Go Home
                  </ErrorButton>
                </ErrorActions>
              </ErrorContent>
            </div>
          </PostContainer>
        </PostContent>
      </ErrorSection>
      <Footer />
    </Wrapper>
  )
}

const ErrorSection = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})

const ErrorContent = styled('div', {
  marginTop: '40px',
  textAlign: 'center',
  
  '& p': {
    marginBottom: '30px',
    lineHeight: '1.6',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

const ErrorIcon = styled('div', {
  fontSize: '64px',
  marginBottom: '20px',
})

const ErrorActions = styled('div', {
  display: 'flex',
  gap: '15px',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

const ErrorButton = styled('button', {
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
