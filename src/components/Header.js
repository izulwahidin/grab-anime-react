
import React from 'react';


const Header = () => {
    return (
        <>
        <div>
            <nav className="nav-wrapper">
                <div className='nav-wrapper menu'>
                    <a href='/' className='item-menu active'>Home</a>
                    <a href='/raw' className='item-menu'>Raw</a>
                    <a href='/dub' className='item-menu'>Dub</a>
                    <a href='/movies' className='item-menu'>Movies</a>
                    <a href='/season' className='item-menu'>Season</a>
                    <a href='/popular' className='item-menu'>Popular</a>
                    <a href='/ongoing' className='item-menu'>Ongoing</a>
                </div>
                <div className='nav-wrapper search'>
                    <input type="text"/>
                    <button
                        onClick={() => console.log('Tolol')}
                    >
                        Search
                    </button>
                </div>
            </nav>
        </div>
        </>
    );
};
    
export default Header;