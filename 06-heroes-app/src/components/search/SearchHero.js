

import React, { useMemo } from 'react';
import queryString from 'query-string'
import {  useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';
import { heroes } from '../../data/heroes';

export const SearchHero = () => {

    let navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = (queryString.parse(location.search));

    const [slots, handleInputChange] = useForm({
        searchTo: q,
    });
    const { searchTo } = slots;

    // console.log(loc.search);
    // console.log(q);
    
    const heroSingle = useMemo(() => getHeroByName(q), [q]);
    // console.log(heroSingle);
    
    const handleSearch = (e) => {
        e.preventDefault();
        // console.log(searchTo);
        navigate(`?q=${searchTo}`);
        
    };
    

    

  return (
    <div>
        <h3>Search Hero</h3>
        <hr ></hr>

        <div className="row" >
            <div className="col-5">
                <h4>Search Form</h4>
                <hr></hr>

                <form onSubmit={handleSearch}>
                    <input type="text"
                           placeholder="Write Name of Hero"
                           className="form-control"
                           name="searchTo"
                           value={searchTo}
                           onChange={handleInputChange}
                           autoComplete="off"
                    ></input>
                    <button type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                    >Search</button>  
                </form>
            </div>

            <div className="col-7">
                <h4>Heroes Filtered</h4>
                <hr />
                { ( q === '' ) && <div className="alert alert-info" >
                        Search a hero
                    </div>
                }
                 { ( q !== '' && heroSingle.length === 0 ) && <div className="alert alert-danger" >
                        There is not a hero with "{q}"
                    </div>
                }
                {
                    heroSingle.map( hero => (
                             <HeroCard  key={hero.id}
                                        {...hero}
                             />))
                }
               
            </div>
        </div>
    </div>
  )
}
