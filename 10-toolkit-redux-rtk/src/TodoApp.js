
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsPaginatedQuery, useGetProductsQuery } from './api/todosApi';

export const TodoApp = () => {

    // const dispatch = useDispatch();
    // const {} = useSelector(state => state.todo);
    
    // const algo = useGetProductsQuery();
    // console.log(algo);
    // const { data, isLoading } = useGetProductsQuery();
    const [page, setPage] = useState(1);
    console.log(page);

    // useEffect(() => {
    // }, [setPage, page, useGetProductsPaginatedQuery])
    const {data, isLoading} = useGetProductsPaginatedQuery(page);
    
    console.log(data);
    // const products = data.products;


    const handlePrev = () => {
        if (page === 0) return;
        setPage(page - 1);
    };

    const handleNext = () => {
        setPage(page + 1);
    };

  return (
    <div style={{padding: 50}}>
        <h1>Todos RTK - Query</h1>
        <hr />

        <pre>...</pre>

        <ul>
            { data.products.map( prod => (
                <li key={prod.id}>{prod.name}</li>
            ) ) }
        </ul>


        <button 
                disabled={ (isLoading) ? true : false }
                onClick={handlePrev}
        >
          Preview
        </button>

        <button 
                disabled={ (isLoading) ? true : false }
                onClick={handleNext}
        >
          Next
        </button>

    </div>
  )
}
