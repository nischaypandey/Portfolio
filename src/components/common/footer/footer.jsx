import React from 'react'
import Footer from 'rc-footer'
import 'rc-footer/assets/index.css'
import logo from 'assets/images/finalsign.png'
import fb from 'assets/svg/facebook.svg'
import ig from 'assets/svg/instagram.svg'
import wa from 'assets/svg/whatsapp.svg'
import twt from 'assets/svg/twitter.svg'
import li from 'assets/svg/linkedin.svg'
import gh from 'assets/svg/github.svg'
import mrt from 'assets/svg/mrtodo.svg'
import mrl from 'assets/svg/mrlgd.svg'
import wp from 'assets/svg/wp.svg'
import pdf from 'assets/images/resumepdf.svg'
import skype from 'assets/images/skype.svg'

const fror = `Made with ❤️ by Nischay Pandey`

const Ftr = () => {
  return (
    <div>
      <Footer
        theme="dark"
        columns={[
          {
            icon: (
              <img
                src={logo}
                alt="Nischay Pandey"
                style={{
                  width: '880%',
                  verticalAlign: 'middle',
                  marginLeft: '-12px',
                  marginTop: '-2px'
                }}
              />
            ),
            title: '',
            items: [
              {
                title: 'Home',
                url: 'https://nischaypandey.github.io/Portfolio/#/',
                openExternal: false
                
              },
              {
                title: 'About Me',
                url: 'https://nischaypandey.github.io/Portfolio/#/about',
                openExternal: false
                
              },
              {
                title: 'Contact Me',
                url: 'https://nischaypandey.github.io/Portfolio/#/contact',
                openExternal: false
               
              }
            ]
          },
          {
            title: 'My Social Media',
            items: [
              {
                icon: <img src={fb} alt="fb" />,
                title: 'Facebook',
                url: 'https://www.facebook.com/nischay.pandey.7/',
                openExternal: true
              },
              {
                icon: <img src={li} alt="linkedIn" />,
                title: 'LinkedIn',
                url: 'https://www.linkedin.com/in/nischay-pandey-84190413b/',
                openExternal: true
              },

              {
                icon: <img src={twt} alt="Twitter" />,
                title: 'Twitter',
                url: 'https://twitter.com/NischayPandey4',
                openExternal: true
              },
              {
                icon: <img src={ig} alt="Instagram" />,
                title: 'Instagram',
                url: 'https://www.instagram.com/im_nischay/',
                openExternal: true,
               
              }
                     
            ]
          },
          {
            title: 'More from me',
            items: [
              {
                icon: <img src={skype} alt="Sykpe" />,
                title: 'nischaypandey11',
                
                openExternal: true
              },
              {
                icon: <img src={gh} alt="GitHub" />,
                title: 'Github',
                url: 'https://github.com/nischaypandey',
                openExternal: true
              },
              {
                icon: <img src={pdf} alt="Resume" />,
                title: 'Resume',
                url: 'https://drive.google.com/open?id=1rts9hRRpH4GrhW-ovpNw5dKU4PXu74Kn',
                openExternal: true
              }
              
            ]
          }
        ]}
        bottom={fror}
      />
    </div>
  )
}

export default Ftr
