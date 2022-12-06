import React from "react";
import '../assets/css/Card.css'

function Card(getCard) {
    console.log(getCard.data)
    return(
        <section className="main-card">
            <div className='card-container'>
                <div className='card'>
                    <img className="img-card" src={getCard.data.strMealThumb}/>
                </div>
                <div className='description'>
                    <h5>{getCard.data.strMeal}</h5>
                    <p className="text-description" key={getCard.id}>{getCard.data.strInstructions}</p>
                </div>
            </div>
        </section>
    );
}

export default Card;