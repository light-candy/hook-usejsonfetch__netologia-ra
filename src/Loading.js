import React from 'react';
import {useJsonFetch} from './useJsonFetch';

export function Loading() {
    const[{ loading }] = useJsonFetch("http://localhost:7070/loading");
    return(
        <>
         {loading && <p>Loading...</p>}
        </>
    )
};
