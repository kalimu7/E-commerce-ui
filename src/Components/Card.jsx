import React from 'react'
import styled from 'styled-components';



const Container = styled.div`
    width: 300px;
    height: 400px;
    text-align: center;
    margin: 10px 70px;
    
    &:hover{
        background-color: #1e333d;
        transform: scale(1.1);
        cursor: pointer;
        border-radius:30px;
    }
`

const Img_Product = styled.img`
    margin: 0px auto;
    width: 200px;
   background: transparent;
`
const Title = styled.h1`
    
    color: #fff;
    padding: 10px 0px;
    background: transparent;
`

const Description = styled.p`
    color: gray;
    background: transparent;
    
`
const Price = styled.h3`
    color: orangered;
    padding: 10px 0px;
    background: transparent;
    position: relative;
`
const Cu = styled.div`
    position: absolute;
    left: 170px;
    top: 0;
`

const BuyButton = styled.button`
    width: 150px;
    height: 30px;
    border-radius:30px ;
    color: white;
    background-color: orangered;
    &:hover{
        background-color: white;
        color: orangered;
        cursor: pointer;
    }
    
`
function Card({image,title,body,prix,curr}) {
  return (
      <>
    
        <Container  >
            <Img_Product  src={image} alt='product image' />
            <Title >{title}</Title>
            <Description> {body} </Description>
            <Price  >{prix}<Cu>{curr}</Cu></Price>
            <BuyButton>Add to Chart</BuyButton>
        </Container>
    
    </>
  )
}

export default Card