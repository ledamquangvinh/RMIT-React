import styled from "styled-components"
import * as Styles from '../../components/Styles'

const Section = styled(Styles.Section) `
  background-color: #1d809f;
`

const Content = styled(Styles.Content) ``

const H5 = styled(Styles.H5)``

const H4 = styled(Styles.H4)``

const P = styled(Styles.P)``

const I = styled(Styles.I)``

const Row = styled(Styles.Row) ``

const Cart = styled(Styles.Cart) ``

const Service : React.FC = () => {
  return (
    <Section>
      <Content>
        <H5>Service </H5>
        <H4>What do we offer</H4>
        <Row>
          <Cart>
            <I>

            </I>
            <H4>
              Responsive
            </H4>
            <P>
              Looks great on any screen size
            </P>
          </Cart>

          <Cart>
            <I>

            </I>
            <H4>
              Redesigned
            </H4>
            <P>
              Freshly redesigned for Bootstrap
            </P>
          </Cart>     

          <Cart>
            <I>

            </I>
            <H4>
              Favorite
            </H4>
            <P>
              Million of users &heart; Start Bootstrap!
            </P>
          </Cart>    

          <Cart>
            <I>

            </I>
            <H4>
              Question
            </H4>
            <P>
              Mustache you a question
            </P>
          </Cart> 
        </Row>
      </Content>
    </Section>
  )
}

export default Service