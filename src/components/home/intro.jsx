import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import img from 'assets/images/shape1.webp'
import img1 from 'assets/images/shape2.webp'
import { Button, BgImg, BgImg2, Header1 } from 'styles/style'
import Grid from '@material-ui/core/Grid'

const Intro = () => {
  return (
    <Div>
      <BgImg src={img} alt="background" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <Header1>Hello World!</Header1>
          <Header2>I am Nischay Pandey</Header2>
          <Header3>Co-founder | Software Engineer | Data Scientist </Header3>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          style={{
            marginTop: '2vh'
          }}
        >
          <Div1>
            <BgImg2 src={img1} alt="background" />
            <div
              style={{
                position: 'absolute',
                margin: '0',
                left: '0',
                right: '0',
                top: '40%',
                width: '100%'
              }}
            >
              <Grid item xs={12}>
                <Linku to="/about" exact>
                  <Button>More About Me</Button>
                </Linku>
              </Grid>
              <Grid item xs={12}>
                <Linku to="/education" exact>
                  <SecondButton>Education</SecondButton>
                </Linku>
              </Grid>
              <Grid item xs={12}>
                <Linku to="/experience" exact>
                  <ThirdButton>Work Experience</ThirdButton>
                </Linku>
              </Grid>
              <Grid item xs={12}>
              <a target="_blank" href="https://public.tableau.com/views/Resume_15912597150520/MainInfo?:display_count=y&publish=yes&:origin=viz_share_link"><FourthButton>Tableau Resume</FourthButton></a>
                  
               
              </Grid>
            </div>
          </Div1>
        </Grid>
      </Grid>
    </Div>
  )
}

const Linku = styled(NavLink)`
  margin-left: 30%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-left: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-left: 20%;
  }
`
const Linku2 = styled(NavLink)`
  margin-left: 15%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-left: 5%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-left: 5%;
  }
`
const Div1 = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-top: 30%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-top: 40%;
  }
`

const Div = styled.div`
  margin-left: 5vw;
  margin-top: 23vh;
  flex-grow: 1;
`

const SecondButton = styled(Button)`
  background-color: #8a2be2;
  border: 2px solid #8a2be2;
  &:hover {
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.1);
    color: #8a2be2;
    border-color: transparent;
    background-color: transparent;
  }
`
const ThirdButton = styled(Button)`
  background-color: #9966cc;
  border: 2px solid #9966cc;
  &:hover {
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.1);
    color: #9966cc;
    border-color: transparent;
    background-color: transparent;
  }
`
const FourthButton = styled(Button)`
  margin-left: 30%;
  background-color: ##7442c8;
  border: 2px solid ##7442c8;
  &:hover {
    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.1);
    color: ##7442c8;
    border-color: transparent;
    background-color: transparent;
  }
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin-left: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin-left: 20%;
  }
`
const Header2 = styled(Header1)`
  margin-left: 8rem;
  font-size: 35px;
  line-height: 20px;
  color: #9858e9;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 15px;
    line-height: 15px;
    margin-left: 2rem;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 17px;
    line-height: 15px;
    margin-left: 2rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 22px;
    line-height: 20px;
    margin-left: 2rem;
  }
`

const Header3 = styled(Header2)`
  margin-left: 2rem;
  font-size: 32px;
  line-height: 70px;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    font-size: 14px;
    line-height: 25px;
    margin-left: 2rem;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    font-size: 17px;
    line-height: 30px;
    margin-left: 2rem;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    font-size: 22px;
    line-height: 30px;
    margin-left: 2rem;
  }
`

export default Intro
