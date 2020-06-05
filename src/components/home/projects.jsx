/* eslint-disable no-useless-computed-key */
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import andzoa from 'assets/images/andzoa.webp'
import mrTodo from 'assets/images/mrTodo.webp'
import mrLegend from 'assets/images/mrLegend.webp'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import img1 from 'assets/images/shape3.webp'
import img2 from 'assets/images/shape2.webp'
import wiiro from 'assets/images/mrWii.webp'
import muffito from 'assets/images/muffito.webp'
import ck from 'assets/images/ck.jpeg'
import parser from 'assets/images/resume_parsers.png'
import { BgImg3, Header2 } from 'styles/style'
import styled from 'styled-components'
import sign from 'assets/images/signature.png'
import resume from 'assets/images/ress.png'
import download from 'assets/images/download.png'
import chatup from 'assets/images/chatup.png'
import face from 'assets/images/face.png'

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    height: '510px',
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: '9px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#9858e9',
      boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(231,176,255,1)'
    },
    ['@media (max-width:600px)']: {
      height: 'auto',
      width: '250px'
    },
    ['@media only screen and (min-width: 601px) and (max-width: 1024px)']: {
      height: '510px',
      width: 300
    },
    '& h2': {
      textAlign: 'center',
      fontSize: '25px',
      fontWeight: 'bold'
    },
    '& p': {
      fontSize: 'calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))',
      textAlign: 'center'
    },
    '& p:hover': {
      color: 'black'
    }
  },
  button: {
    fontSize: '16px',
    marginLeft: 'auto',
    marginRight: 'auto',
    verticalAlign: 'middle',
    '& a': {
      textDecoration: 'none',
      color: '#267ee2'
    },
    ['@media only screen and (min-width: 601px) and (max-width: 1024px)']: {
      fontSize: '12px'
    }
  },
  root: {
    flexGrow: 1
  }
})

const Projects = () => {
  const classes = useStyles()
  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: '5vh',
        marginBottom: '5vh'
      }}
    >
      <Header2>My Best Projects</Header2>
      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}
      >
        <BgImg3 src={img1} alt="background" />
        <Div>
          <Grid container spacing={2} id="cards">
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="CrackHire"
                  style={{
                    width: '70%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={ck}
                  title="CrackHire"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   CrackHire is a education plus job portal website, where employer can post job and job-seekers can apply for
it. Hiring procedure is based on exam and interview.Currently theWebsite is in development phase.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="www.crackhire.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     Visit Website
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  style={{
                    width: '45%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  component="img"
                  alt="Muffito"
                  image={muffito}
                  title="Muffito"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Muffito
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Muffito is a pub/bar search engine as well as a discovery platform which not only searches for bars but also
lets you add your favorite pub or bar in the database if it is not there. <b>Currently the app is on play store</b>
                  </Typography>
                 
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://play.google.com/store/apps/details?id=com.muffito1.mobile&fbclid=IwAR1P5RZb4H0uDc45J3jS6rarUpD2HAsHSHCC1N-C0QWq8BglvRROoHPjDec"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download the App
                    </a>
                  </Button>
                  
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Parser"
                  style={{
                    width: '45%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={parser}
                  title="Resume Parser"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Pick Parser
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    It is a NLP based advance resume parsing system, which will parse the resume and extract essential details
from given resume.We want to make a Resume parser based on NLP, which can accept any resume in any style and can parse it to extract Names, Phone numbers, Email IDs, Education  etc.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                
                    className={classes.button}
                  >
                    <a
                      href="https://github.com/dsc-iiitdmk/Pick-Parser"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Resume"
                  style={{
                    width: '44%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={resume}
                  title="Tableau Resume"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                   Tableau Resume
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   It is a tableau based advanced data visualisation and responsive resume system, in which will include complete
resume system as well as visualized graph for showing progress of candidate
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    position="absolute"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View the Resume
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            
          </Grid>


          
        </Div>

        
      </div>



      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '100%'
        }}
      >
        <BgImg3 src={img1} alt="background" />
        <Div1>
          <Grid container spacing={2} id="cards">
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Nischay Pandey"
                  style={{
                    width: '70%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={sign}
                  title="Nischay Pandey"
                />
                <CardContent>
                <Typography gutterBottom variant="h2" component="h2">
                  Personal Website
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Personal Website <br />
                   The website is built on React using JSX, HTML and CSS.The Website of mine contains the features of Showing skills, education detail, project work, Tableau Resume link and few other details. Kindly view the Website.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open sourced here
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  style={{
                    width: '45%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  component="img"
                  alt="BERT"
                  image={download}
                  title="BERT"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Natural Question Answering
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    It is BERT(NLP) based model which gives the long as well short answer to the questions asked to it from the
given content.BERT model is trained on 2500 millions Wikipedia words
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://github.com/nischaypandey/NQATF"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Chatup"
                  style={{
                    width: '45%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={chatup}
                  title="Chatup"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Chatup- A Chatting App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                   It is Chatting App,in which a user can chat individually,in group or broadcast. The Database is stored on Firebase
Server. the App is having chatting & calling(audio and video both ) feature,with powerful UI
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://github.com/IIITDM-KURNOOL1/ChatUpProject"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  alt="Face Interpolation"
                  style={{
                    width: '44%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={face}
                  title="Face Generation"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Face Generation and Interpolation
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                  Generation of Fake Faces using Style GAN and Pro GAN Model, and Interpolation of images. Model is able to generate fake faces of upto 1024x1024 pxls, and also able to do face Interpolation from the faces. 
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://github.com/nischaypandey/FaceGeneration"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            
          </Grid>


          
        </Div1>

        
      </div>



      
    </Container>
  )
}

const Div = styled.div`
  position: absolute;
  margin: 0;
  left: 0;
  right: 0;
  top: 15%;
  width: 100%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    position: static !important;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    position: static !important;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
  }
`

const Div1 = styled.div`
  position: absolute;
  margin: 0;
  left: 0;
  right: 0;
  top:10%;
  width: 100%;
  @media only screen and (min-width: 100px) and (max-width: 320px) {
    position: static !important;
    margin-top: 5vh;
  }
  @media only screen and (min-width: 321px) and (max-width: 600px) {
    position: static !important;
    margin-top: 5vh;
  }
  @media only screen and (min-width: 601px) and (max-width: 1024px) {
    margin-top: 5vh;
  }
`
export default Projects
