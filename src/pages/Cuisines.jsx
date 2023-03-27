import React from 'react'
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';

function Cuisines() {

    const [cuisine,setCuisine] = useState([]);
    let params = useParams();
    
const getCuisine = async (name)=>{
    const data =await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.React_App_Api_Key}&cuisine=${name}`);
    const recipes = await data.json();
    console.log(recipes.results);
    setCuisine (recipes.results);
}

useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
}, [params.type]);


  return (
    //below putting animation
    <Grid>

      {cuisine.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id}>
            <img src={item.image} alt=""/>
            <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  )
}

const Grid =styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit,minmax(20rem, 1fr));
grid-gap:4rem;
`;

const Card =styled.div`
img{
  width:100%;
  border-radius: 2rem;
}
a{
  text-decoration: none;
}
h4{
  text-align:center;
  padding:1rem;
}
`



export default Cuisines