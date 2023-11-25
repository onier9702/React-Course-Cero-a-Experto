
import React, { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

  const navigate = useNavigate();
  const {id} = useParams();

  const singleHero = useMemo(() => getHeroById(id), [id]);

  if (!singleHero) {
    return <Navigate to="/marvel" />;
  }
  const handleReturn = () => {
    
    // navigate(-1);
    if(navigate.length <=1) { // if it does not have history before, then go (/)
      navigate('/');
    } else {navigate(-1);}
    
  }
    
  

  const { 
    
    superhero,
    alter_ego,
    first_appearance,
    characters,
 } = singleHero;

  return (
          <div className="row mt-5">
            <div className="col-5" >
              <img src={`../assets/${id}.jpg`} style={{width:230, height:270}} alt={superhero}/>
            </div>

            <div className="col-7">
              <div >
                <h5 className="title">{superhero}</h5>
                <p className="text">{`Alter_ego: ${alter_ego}`}</p>
                <h6 >Characters</h6>
                <p className="text">{characters}</p>
                <small className="text-muted">{`First appearence: ${first_appearance}`}</small>

                <div className="mt-3">
                  <button 
                      className="btn btn-outline-info"
                      onClick={handleReturn}
                  >Return</button>

                </div>
              </div>
            </div>
          </div>

  )
}
