import React from 'react'
import styled from 'styled-components';
import Card from './Card';
import Product_card from '../Data/product_data';
import product_card from '../Data/product_data';

const Container = styled.div`
    display: flex;
    margin: 100px 0px;
    flex-wrap:wrap ;
    position: relative;
    
`
const Bigtitle = styled.h3`
  position: absolute;
  top:0;
  left: 22%;
  color: gray;
  font-size:10.5vw;
  background: transparent;
`



const AllProducts=product_card.map((members)=>{

  return(
  <Card 
    key={members.id}
    image={members.thumb}
    title={members.product_name}
    body={members.description}
    prix={members.price}
    curr={members.currency}

  />
  )
})

function MainContent() {
  return (
    <div>
        <Container>
            <Bigtitle>HeadPhone</Bigtitle>
            {AllProducts}
          
        </Container>
    </div>
  )
}

export default MainContent