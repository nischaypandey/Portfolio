import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import img1 from 'assets/images/shape3.webp'

import { BgImg3, Header21 } from 'styles/style'
import styled from 'styled-components'
import sign from 'assets/images/signature.png'
import resume from 'assets/images/ress.png'
import download from 'assets/images/download.png'
import chatup from 'assets/images/chatup.png'
import face from 'assets/images/face.png'
import iiitdm from 'assets/images/iitdm.png'
import coursera from 'assets/images/coursera.png'
import acadgild from 'assets/images/Acadgild.png'
import google from 'assets/images/google.png'

const useStyles1 = makeStyles({
    card: {
      maxWidth: 300,
      height: '300px',
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
        height: '310px',
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
  

const useStyles = makeStyles({
    card: {
      maxWidth: "auto",
      height: 'auto',
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
        width: 'auto'
      },
      ['@media only screen and (min-width: 601px) and (max-width: 1024px)']: {
        height: '375px'
      },
      '& h2': {
        textAlign: 'center',
        fontSize: '25px',
        fontWeight: 'bold'
      },
      '& p': {
          
        fontSize: 'calc(14px + (17 - 14) * ((100vw - 300px) / (1600 - 300)))',
        textAlign: 'left'
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
  
  const Education = () => {
    const classes1= useStyles1()
    const classes = useStyles()
    const arr = [ "⦿ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc." ,
                  <br/> ,  
                  "⦿ Apart from this, I have done courses on Deep Learning, Data Science, Docker/Kubernetes and Front End Web development." ,
        <br/>,
                 " ⦿ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I am also the Google DSC leader and sports coordinator of the college"
      ];
    return (
      <Container
        maxWidth="lg"
        style={{
          marginTop: '5vh',
          marginBottom: '5vh'
        }}
      >
        <Header21>Degree Recieved</Header21>
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
                    alt="IIITDM"
                    style={{
                      width: '15%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '1rem'
                    }}
                    image={iiitdm}
                    title="IIITDM"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, KURNOOL
                  </Typography>
                  <Typography gutterBottom variant="h2" component="h2">
                   Btech in Computer Science & Engineering (2016-2020)
                  </Typography>
                  
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      
                      component="p"
                    >
                        ❥ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc. 
                    <br/> 
                    ❥ Apart from this, I have done courses on Deep Learning, Data Science, Docker/Kubernetes and Front End Web development.
                   <br/>
                   ❥ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I am also the Google DSC leader & sports coordinator.
      
                     </Typography>
                  </CardContent>
  
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      className={classes.button}
                    >
                      <a
                        href="http://www.iiitk.ac.in/home"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                       Visit Website
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              
            </Grid>
  
  
            
          </Div>
  
          
        </div>
  
       
      <Header21>My Certificates</Header21>
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
              <Card className={classes1.card}>
                <CardMedia
                  component="img"
                  alt="Coursera"
                  style={{
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={coursera}
                  title="Coursera"
                />
                <CardContent>
                <Typography gutterBottom variant="h2" component="h2">
               Data Science
                  </Typography>
                  <Typography gutterBottom variant="h2" component="h2">
                  IBM
                  </Typography>

                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://www.coursera.org/account/accomplishments/specialization/8FHY9YWMGK3A"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     View Certificate
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes1.card}>
                <CardMedia
                  style={{
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  component="img"
                  alt="Coursera"
                  image={coursera}
                  title="COursera"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                  Deep Learning
                  </Typography>
                  <Typography gutterBottom variant="h2" component="h2">
                  deeplearning.ai
                  </Typography>
                 
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    className={classes.button}
                  >
                    <a
                      href="https://www.coursera.org/account/accomplishments/specialization/6CP69ZBBWUHN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                  
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes1.card}>
                <CardMedia
                  
                  component="img"
                  alt="Parser"
                  style={{
                    width: '80%',
                    
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={acadgild}
                  title="Android App Development"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    Android App Development
                  </Typography>
                  <Typography gutterBottom variant="h2" component="h2">
                    Acadgild
                  </Typography>
                
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                
                    className={classes1.button}
                  >
                    <a
                      href="https://drive.google.com/a/iiitk.ac.in/file/d/1osZk7iN-BcFtahqQipC1OKbFrTF4heU8/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     View Certificate
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs>
              <Card className={classes1.card}>
                <CardMedia
                  component="img"
                  alt="Resume"
                  style={{
                    width: '44%',
                    
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '1rem'
                  }}
                  image={google}
                  title="DSC"
                />
                <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                  Developer Student CLub
                  </Typography>
                  <Typography gutterBottom variant="h2" component="h2">
                  Google
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
                      View Certificate
                                          </a>
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            
          </Grid>


          
        </Div>

        
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
    }
    @media only screen and (min-width: 321px) and (max-width: 600px) {
      position: static !important;
    }
    @media only screen and (min-width: 601px) and (max-width: 1024px) {
    }
  `
  export default Education
  