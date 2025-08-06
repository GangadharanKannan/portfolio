import { styled } from '../stitches.config'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'


export async function getStaticProps() {
  return {
    props: {
      title: 'Gangadharan',
      description: 'Obsessed with modern tech stacks and innovation',
    },
  }
}

export default function Index(props) {
  const { title, description } = props

  return (
    <Wrapper>


      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <p>Hi, I'm</p>
              <h1>{title}</h1>
              <p>
                <strong>a passionate{' '}
                  <a>Web developer</a>
                </strong><br />
                {description}
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
})
