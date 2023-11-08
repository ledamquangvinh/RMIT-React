import styled from "styled-components"
import * as Styles from '../../components/Styles'
import portfolio1 from '../../img/portfolio-1.jpg'

const Section = styled(Styles.Section)``

const Content = styled(Styles.Content) ``

const H3 = styled(Styles.H3)``

const H5 = styled(Styles.H5) ``

const List = styled(Styles.List) ``

const ListItem = styled(Styles.ListItem) ``

const Caption = styled(Styles.Caption) ``

const CaptionTitle = styled(Styles.CaptionTitle) ``

const CaptionContent = styled(Styles.CaptionContent) ``

const IMG1 = styled(Styles.IMG)`
  background: url(${portfolio1})
`

const Portfolio : React.FC = () => {
  return(
    <Section>
      <Content>
        <H5>Portfolio</H5>
        <H3>Recent Project</H3>
        <List>
          <ListItem>
            <Caption>
              <CaptionTitle>Stationary</CaptionTitle>
              <CaptionContent>A yellow pencil with envelopes on a clean, blue backdrop!</CaptionContent>
            </Caption>
            <IMG1/>
          </ListItem>
          
        </List>
      </Content>
      
    </Section>
  )
}

export default Portfolio