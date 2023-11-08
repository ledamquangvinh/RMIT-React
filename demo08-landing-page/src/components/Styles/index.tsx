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

export const List = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  height: 80vh;
  margin-top: 1rem;
`

export const ListItem = styled.div `
  width: 50%;
  height: 50%;
  position: relative;
  overflow: hidden;
`

export const Caption = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  color: #fff;
  background-color: rgba(33, 37, 41, 0.5);
  transition: clip-path 0.25s ease-out, background-color 0.7s;
  clip-path: inset(0rem);
  z-index: 1;
`

export const CaptionTitle = styled.div `
  margin-top: 12rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 50px;
`

export const CaptionContent = styled.div `
  padding: 0 0 0 50px;
`

export const IMG = styled.img `
  transition: clip-path 0.25s ease-out;
  clip-path: inset(-1px);
  width: 100%;
  height: 100%;
`

export const H1 = styled.h1 `
  font-size: 4rem;
  font-weight: 700;
  
`

export const H3 = styled.h3`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 400;
`

export const H4 = styled.h4 `
  font-size: 2rem;
  color: #ffffff;
`

export const H5 = styled.h5 `
  font-size: 1rem;
  color: #f2b912;
  text-transform: uppercase;
`

export const Button = css`
  padding: 1.25rem 2rem;
  border-radius: 5px;
`

export const Row = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
`

export const Cart = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  margin-top: 1rem;
`

export const I = styled.i `
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background-color: #fff;
  display: block !important;
  text-align: center;
  line-height: 7rem !important;
  font-size: 2.5rem;
  color: #1d809f;
`

export const P = styled.p `
  font-size: 1.2rem;
  color: #ffffff;
`
