import '../assets/css/Search.css';
import React from 'react';
import { useState } from 'react';
import Card from './Card';

function Search() {
    const [search, setSearch] = useState('');
    const [Mymeal, setMymeal] = useState();
    const searchCard = (evt) => {
        if (evt.key == "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                setMymeal(data.meals); 
                setSearch("");
            })
        }
    }

    return (
        <section className='search-container'>
            <h2>Search your recipe...</h2>
            <div>
                <input onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchCard} type="search" className="search-input" placeholder="e.g.: meat, cake, potato...?"/>
            </div>
            <div className='main-card'>
                {
                    (Mymeal == null) ? <p className='empty'>Your list is empty</p> : Mymeal.map((res) => {
                        return (
                            <Card data={res} />
                        ) 
                    })
                }
            </div>
        </section>
    );
}

export default Search;
