import React from 'react';
import Header from './Header';
import Home from './Home/Home';

const Main = ({ match }) => {
    console.log(match.params.category);
    const isLogining = false;
    return (
        <>
            <Header />
            {
                (match.params.category === 'home' && <Home />) ||
                (match.params.category === 'search' && <Home />) ||
                (match.params.category === 'profile' && <Home />) ||
                (isLogining && (match.params.category === undefined && <Home/>))
            }
        </>
    );
};

export default Main;