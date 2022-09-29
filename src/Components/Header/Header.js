import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <nav className= 'header'>
            <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrQ-vfa5hQLu1wjFSPB3eP0KjXIDShxtUNS5gOqX_kvsowqxIDoMYkHP87KHARL_ucgQ&usqp=CAUs://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61ViP8_XP04pREIsqAuyr_MEUAEwkvxI7D5xawy_2eB1bhQ1amHrwMwPsSKZgbIz81pU&usqp=CAU://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSAa8NT3taUVBii5WWcF5ixmYVv873EjsDnUteAmo4HdhlTg-J4sAgR_pML3psh3KNxNk&usqp=CAUdata:image/png;base64,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" />
            <h1>Healthy Habit</h1>
        </nav>   
     );
};


export default Header;