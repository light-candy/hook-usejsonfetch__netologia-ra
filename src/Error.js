import React from 'react';
import {useJsonFetch} from './useJsonFetch';

export function Error() {
    const[{ error }] = useJsonFetch("http://localhost:7070/error");
    return(
        <>
         <p>{error && error.message}</p>
        </>
    )
};
