
import React from 'react';
import { Navigate, Route, Routes, } from 'react-router-dom';

import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchHero } from '../components/search/SearchHero';

export const DashboardRoutes = () => {
  return (

    <>
        <Navbar />  
        <div className='container mt-4'>
            <Routes >

                <Route path="/marvel"   element={ <MarvelScreen />} />
                <Route path="/hero/:id" element={ <HeroScreen />} />
                <Route path="/dc"       element={ <DcScreen />} />
                <Route path="/search"       element={ <SearchHero />} />
                <Route path="*"         element={<Navigate to="/marvel" />}/>

            </Routes>

            
        </div>
    </>
  )
}
