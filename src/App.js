import React from 'react';
import  {JumbotronContainer}  from './containers/jumbotron';
import { FaqsContainer } from './containers/faqs';
import {FooterContainer} from './containers/footer';

function App() {
  return (
    <>
    <JumbotronContainer /> 
    <FaqsContainer/>
    <FooterContainer />
    </>
  );
}

export default App;
