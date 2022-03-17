import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faBagShopping } from '@fortawesome/free-solid-svg-icons'

const GlobalSettings  = createGlobalStyle`
    *{
        
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #233b47;
    }
    a{
        text-decoration: none;
        color: #F2F2F2;
        font-size:15px ;
    }
`

const NavC = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    color: #F2F2F2;
`
const Spanlogo = styled.span`
    margin-left:50px ;
    font-size: 25px;
    color: #F2F2F2;
    cursor: pointer;
`
const Span = styled.span`
    margin-right: 20px;
    color: #F2F2F2;
`
const Nav_link = styled.div`
    color: #F2F2F2;
    text-align: center;
`
const NavIcon = styled.div`
    color: #F2F2F2;
    margin-right: 50px;
`

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    margin-right: 20px;
    color: #F2F2F2;
    cursor: pointer;
`

function Header() {
  return (
    <div>
        <GlobalSettings />
        <NavC>
            <Spanlogo>RAYES.</Spanlogo>
            <Nav_link>
                <Span> <a href="#">Home</a> </Span>
                <Span> <a href="#">Our Product</a> </Span>
                <Span> <a href="#">About US</a> </Span>
                <Span> <a href="#">Contact US</a> </Span>
            </Nav_link>
            <NavIcon>
            <StyledIcon icon={faSearch} />
            <StyledIcon icon={faBagShopping} />
            </NavIcon>
        </NavC>
    </div>
  )
}

export default Header