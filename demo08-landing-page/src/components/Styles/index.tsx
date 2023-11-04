import styled, {css} from "styled-components";


export const Section = styled.section `
  font-size: 4rem;
  font-weight: 700;
  height: 100vh;
`

export const A = styled.a `
  text-decoration: none;
  margin: auto
` 

export const HeaderStyle = css `
  text-align: center; 
  margin: auto;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  row-gap: 1rem;
`

export const H1 = styled.h1 `
  font-size: 4rem;
  font-weight: 700;
  ${HeaderStyle}
`

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 400;
  ${HeaderStyle}
`

export const Button = css`
  padding: 1.25rem 2rem;
  border-radius: 5px;
`
