import React from 'react';

const Header = () => {
    return (
        <header style={{backgroundColor:'whitesmoke'}} className='text-center border m-5 p-3 rounded'>
            <h1 className='text-warning  '>Learn More , Earn More </h1>
            <h2 className="text-success">‘Teaching is the highest form of understanding.’ –Aristotle</h2>
            <h3>Totall Budget: <span className="text-danger">10000 </span> Tk </h3>
            
        </header>
    );
};

export default Header;