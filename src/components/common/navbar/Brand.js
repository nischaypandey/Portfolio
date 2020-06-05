import React from 'react'
import styled from 'styled-components'
import first from 'assets/images/finalsign.png'
import second from 'assets/images/second.png'
import third from 'assets/images/third.png'
import sign from 'assets/images/giffinalsign.gif'

const Brand = () => {
  return (
    <Link href="https://nischaypandey.github.io/Portfolio/#/">
      <Image
        src={first}
        style={{
          width: '180%',
        }}
       onAnimationEndCapture={e => (e.currentTarget.src = first)}
        alt="Nischay Pandey"
        onMouseOver={e => (e.currentTarget.src = first)}
        onMouseOut={e => (e.currentTarget.src = first)}
      />
    </Link>
  )
}

export default Brand

const Link = styled.a`
  width: 10%;
  height: auto;
  margin: auto 0;
  @media only screen and (max-width: 600px) {
    height: auto;
    width: 35%;
  }
`

const Image = styled.img`
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`
