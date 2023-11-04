import styled from "styled-components"
import masthead from '../../img/bg-masthead.jpg'


const H1 = styled.h1`
font-size: 4rem;
font-weight: 700;
text-align: center;
`

const Section = styled.section`
  background: url(${masthead});
  background-position: center center;
  background-size: cover;
  height: 100vh;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  height: 100vh;
  row-gap: 1rem;
`

const A = styled.a `
  background-color: #17667f;
  color: #ffffff;
  padding: 1.25rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  width: 100px;
  margin: auto;
`
const Callout : React.FC = () => {
  return(
    <Section>
      <Content>
        <H1>Welcome to your next website</H1>
        <A href="/portfolio">Download</A> 
      </Content>
    </Section>
  )
}

export default Callout