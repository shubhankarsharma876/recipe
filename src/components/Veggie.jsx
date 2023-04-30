import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


function Veggie() {


  const [veggie, setVeggie] = useState([]);


//storing data to the local storage
  
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {

    /* const check = localStorage.getItem('veggie'); */
    const check = false;
    if (check){
      setVeggie(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.React_App_Api_Key}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie",JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    };
    }

  return (
    <div>
      <Wrapper>
        <h3>Our Vegiterian Picks</h3>

          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '5rem',
            }}
          >
            {veggie.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={'/recipe/' + recipe.id}>                  
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    </Link>
                  <Gradient/>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>

      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    left:0;
    object-fit: cover;
    position: absolute;
    height: 60%;
    width:100%;
  }
  p{
    position:absolute;
    margin-top:0px  
    z-index:10;
    left:50%;
    bottom:0%;
    transform: translate(-50%, 0%);
    color:black;
    width: 100%;
    text-align: center;
    font-weight:600;
    font-size: 1rem;
    height:10%;
    display:flex;
    justify-context: center;
    align-items:center;
  }
`;


const Gradient = styled.div`
z-index:3;
position: absolute;
width:100;
height:100%;
background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`;


export default Veggie;