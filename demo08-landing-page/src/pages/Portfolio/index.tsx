import styled from "styled-components"
import * as Styles from '../../components/Styles'
import portfolio1 from '../../img/portfolio-1.jpg'
import portfolio2 from '../../img/portfolio-2.jpg'
import portfolio3 from '../../img/portfolio-3.jpg'
import portfolio4 from '../../img/portfolio-4.jpg'

const Section         = styled(Styles.Section)``

const Content         = styled(Styles.Content) ``

const H3              = styled(Styles.H3)``

const H5              = styled(Styles.H5) ``

const List            = styled(Styles.List) ``

const ListItem        = styled(Styles.ListItem) ``

const Caption         = styled(Styles.Caption) ``

const CaptionTitle    = styled(Styles.CaptionTitle) ``

const CaptionContent  = styled(Styles.CaptionContent) ``

const IMG1 = styled(Styles.IMG)`
  background: url(${portfolio1})
`

const IMG2 = styled(Styles.IMG)`
  background: url(${portfolio2})
`
const IMG3 = styled(Styles.IMG)`
  background: url(${portfolio3})
`
const IMG4 = styled(Styles.IMG)`
  background: url(${portfolio4})
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

          <ListItem>
            <Caption>
              <CaptionTitle>Ice Cream</CaptionTitle>
              <CaptionContent>A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</CaptionContent>
            </Caption>
            <IMG2/>
          </ListItem>

          <ListItem>
            <Caption>
              <CaptionTitle>Strawberries</CaptionTitle>
              <CaptionContent>Strawberries are such a tasty snack, especially with a little sugar on top!</CaptionContent>
            </Caption>
            <IMG3/>
          </ListItem>

          <ListItem>
            <Caption>
              <CaptionTitle>Workspace</CaptionTitle>
              <CaptionContent>A yellow workspace with some scissors, pencils, and other objects.</CaptionContent>
            </Caption>
            <IMG4/>
          </ListItem>
        </List>
      </Content>
    </Section>
  )
}

export default Portfolio