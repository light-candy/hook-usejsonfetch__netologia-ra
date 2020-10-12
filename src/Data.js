import React from 'react';
import { useJsonFetch } from './useJsonFetch';

export function Data() {
    const[{ data }] = useJsonFetch("http://localhost:7070/data");
    return(
        <>
          <p>{data.status}</p>
        </>
    );
}
