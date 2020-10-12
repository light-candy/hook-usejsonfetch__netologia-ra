import React from 'react';
import './App.css';
import { Data } from './Data';
import { Error } from './Error';
import { Loading } from './Loading';


function App() {
  return (
   <>
    <Data />
    <Error />
    <Loading />
  </>
  );
}

export default App;
