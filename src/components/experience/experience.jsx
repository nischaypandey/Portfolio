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
import ck from 'assets/images/ck.jpeg'
import iiitdm from 'assets/images/iitdm.png'
import coursera from 'assets/images/coursera.png'
import acadgild from 'assets/images/Acadgild.png'
import google from 'assets/images/google.png'
import experience from 'pages/experience'
import muffito from 'assets/images/muffito.webp'

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
  

  const Experience = () => {
    
    const classes = useStyles()
    
    return (
      <Container
        maxWidth="lg"
        style={{
          marginTop: '5vh',
          marginBottom: '5vh'
        }}
      >
        <Header21>Work Experience</Header21>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            width: '100%'
          }}
        >

            
          <BgImg3 src={img1} alt="background" />
          <Div>
            <Grid container spacing={2}  id="cards">
              <Grid item xs>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    alt="Crackhire"
                    style={{
                      width: '15%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '1rem'
                    }}
                    image={ck}
                    title="CK"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                    CO-founder and Machine learning Engineer 
                  </Typography>
                   
                  <Typography gutterBottom variant="h2" component="h2">
                  Crackhire ( Nov-2019-present)
                  </Typography>
                  
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      
                      component="p"
                    >
                        <br/>
                        ❥ I am the Co-founder and Machine Learning engineer
                    <br/> 
                    ❥ Apart from this, I have build the whole product from scratch, from background research to page designing and implementation details.
                
                   <br/>
                   ❥ Currently the Website is in development phase. 
                     </Typography>
                  </CardContent>
  
                  
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
            <Grid container spacing={2}  id="cards">
              <Grid item xs={12} l={6}>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    alt="Crackhire"
                    style={{
                      width: '15%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '1rem'
                    }}
                    image={muffito}
                    title="Muffito"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                      <br/>
                    CO-founder and Android Developer 
                  </Typography>
                   
                  <Typography gutterBottom variant="h2" component="h2">
                  Muffito ( Apr-2018-Nov-2019)
                  </Typography>
                  
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      
                      component="p"
                    >
                        <br/>
                        ❥ I am the Co-founder and Android Developer
                    <br/> 
                    ❥ Apart from this, I have been working on page designing as well as Backend work connecting with Firebase.
                
                   <br/>
                   ❥ Currently the App is on Play Store. 
                   <br/>
                     </Typography>
                  </CardContent>
  
                  
                </Card>
              </Grid>

              <Grid item xs>
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    alt="Crackhire"
                    style={{
                      width: '15%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '1rem'
                    }}
                    image={google}
                    title="Google"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h2" component="h2">
                      <br/>
                    Developer Student CLub Lead
                  </Typography>
                   
                  <Typography gutterBottom variant="h2" component="h2">
                  Powered by Google Developers( March-2019-present)
                  </Typography>
                  
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      
                      component="p"
                    >
                        <br/>
                        ❥ I am the DSC leader for IIITDM Kurnool
                    <br/> 
                    ❥ I have been working on Learning and Teaching trending google technologies.               
                   <br/>
                   ❥ We as a team conducted multiple workshops and Seminar for the whole city.
                   <br/> 
                     </Typography>
                  </CardContent>
  
                  
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
  export default Experience
  