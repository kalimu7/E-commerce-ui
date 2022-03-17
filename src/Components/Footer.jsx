import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileBeam ,faSearch} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 25px 0;
    color: #b9bdc4;
`

const Text = styled.h1`
    margin-left: 50px;
    font-size: 20px;
`

const Icon_Fotter=styled.div`
    margin-right: 50px;
    font-size: 20px;
`
const FooterIcons= styled(FontAwesomeIcon)`
    margin-right:30px ;
    cursor: pointer;
`

function Footer() {
  return (
    <div>
        <Container>
            <Text>ALL RIGHT RESERVED 2022</Text>
            <Icon_Fotter>
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                <FooterIcons icon={faFacebook} />
                <FooterIcons icon={faInstagram} />
            </Icon_Fotter>
        </Container>
    </div>
  )
}

export default Footer