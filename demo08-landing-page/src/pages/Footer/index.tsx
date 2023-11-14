import styled from "styled-components"
import * as Styles from '../../components/Styles'

const Section = styled(Styles.Section) `
  background-color: #1d809f;
`

const Content = styled(Styles.Content) ``

const I = styled(Styles.I)``

const Row = styled(Styles.Row) ``

const Cart = styled(Styles.Cart) ``

const P = styled(Styles.P)``

const Footer : React.FC = () => {
  return (
    <Section>
      <Content>

        <Row>
          <Cart>
            <I>

            </I>
          </Cart>     

          <Cart>
            <I>

            </I>

          </Cart>    

          <Cart>
            <I>

            </I>
          </Cart> 
        </Row>
        <Row>
          <P>Copyright © 2023 - RMIT - Design by Student of RMIT</P>
        </Row>
      </Content>
    </Section>
  )
}

export default Footer