
import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';


export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
 }) => {
  return (
    <div className="card ms-3" >
        <div className="row no-guters">

            <div className="col-md-5">
                <img src={ `./assets/${id}.jpg` } className="img-thumbnail" alt={superhero}/>
            </div>

            <div className="col-md-7">
                <div className="card-body"  >
                    <h5 className="card-title">{superhero}</h5>
                    <p class="card-text">{alter_ego}</p>

                    {
                        (alter_ego !== characters) && <h6 className="text-muted" >{characters}</h6>
                    }
                    <p className="card-text" >
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`} className="more" >More...</Link>
                </div>

            </div>

        </div>

    </div>
  )
}
