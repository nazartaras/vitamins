import React from 'react';
import './Header.css';

const Header = () => {
    return <div className='page-header'>
        <div className='header-title'>
            VitaminPuzzle<span className='author'>{' by Taras Nazar'}</span>
        </div>
        <div className='link-block'>
            <a href='#task1'>TASK 1</a>
            <a href='#task2'>TASK 2</a>
            <a href='#task3'>TASK 3</a>
        </div>
        <a />
    </div>
}

export default Header;