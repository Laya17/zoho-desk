
import React ,{ useState } from 'react';
import './App.css';
import Layout from './Layout/Layout';
import { Helmet } from 'react-helmet';



function App() {
  

  
  return (
    <>
      <Helmet>
        <title>Page 1</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0" />
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>

      
      <Layout />

    </>
  );
}

export default App;
