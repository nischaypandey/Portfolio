import React from 'react'
import Container from '@material-ui/core/Container'
import MLSvg from 'assets/svg/ML.svg'
import dockersvg from 'assets/svg/docker.svg'
import cssSvg from 'assets/svg/css.svg'
import DLSvg from 'assets/svg/DL.svg'
import python from 'assets/svg/python.svg'
import TableauSvg from 'assets/svg/Tableau.svg'
import TFSvg from 'assets/svg/TF.svg'
import htmlsvg from 'assets/svg/html.svg'
import firebasesvg from 'assets/svg/firebase.svg'
import reactSvg from 'assets/svg/react.svg'
import mysql from 'assets/svg/mysql.svg'
import kubernetes from 'assets/svg/kubernetes.svg'
import wireframe from 'assets/svg/wireframe.svg'
import awssvg from 'assets/svg/aws.svg'
import { Header2 } from 'styles/style'
import androidSvg from 'assets/svg/android.svg'
import styled from 'styled-components'
import npmsvg from 'assets/svg/mpm.svg'
import cpp from 'assets/svg/cpp.svg'
import java from 'assets/svg/java.svg'

const Skills = () => {
  return (
    <Container maxWidth="lg">
      <Header2>My Skills</Header2>
      <ul>
        <List>
          <Img src={MLSvg} alt="MLimg" title={"Machine Learning"}/>
        </List>
        <List>
          <Img src={DLSvg} alt="DLImg" title={"Deep Learning"}/>
        </List>
        <List>
          <Img src={TFSvg} alt="TFImg" title={"Tensorflow"}/>
        </List>
        <List>
          <Img src={TableauSvg} alt="Tableau" title={"Tableau"} />
        </List>
        <List>
          <Img src={python} alt="Python" title={"Python"}/>
        </List>
        <List>
          <Img src={htmlsvg} alt="HTMLimg" title={"HTML"} />
        </List>
        <List>
          <Img src={cssSvg} alt="CSS" title={"CSS"}/>
        </List>
        <List>
          <Img src={reactSvg} alt="React" title={"React"} />
        </List>
        <List>
          <Img src={androidSvg} alt="Android" title={"Android App Development"}/>
        </List>

        <List>
          <Img src={npmsvg} alt="NPM" title={"NPM"}/>
        </List>
        <List>
          <Img src={awssvg} alt="AWS" title={"AWS"}/>
        </List>

        <List>
          <Img src={firebasesvg} alt="FB" title={"Firebase"}/>
        </List>
        <List>
          <Img src={mysql} alt="SQL" title={"MySQL"}/>
        </List>
        <List>
          <Img src={dockersvg} alt="Docker" title={"Docker"}/>
        </List>
        <List>
          <Img src={kubernetes} alt="Kubernetes" title={"Kubernetes"}/>
        </List>
        <List>
          <Img src={wireframe} alt="Wireframe" title={"Wireframing"}/>
        </List>
        <List>
          <Img src={cpp} alt="Wireframe" title={"C++"}/>
        </List>
        <List>
          <Img src={java} alt="Java" title={"Java"}/>
        </List>
      </ul>
    </Container>
  )
}

const List = styled.li`
  margin: 30px;
  display: inline-block;
  width: 15%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    margin: 5.3vw;
    width: 20%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    margin: 5.3vw;
    width: 20%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 20%;
    margin-left: auto;
    margin-right: auto;
  }
`
const Img = styled.img`
  width: 50%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    width: 100%;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    width: 50%;
  }
`

export default Skills
