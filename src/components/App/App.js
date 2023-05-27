import React from 'react';
import { Route,  Routes } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';



function App() {

  const [currentUser, setCurrentUser] = React.useState(null);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        
            <Header auth={true}/>
            <Main />
            <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;