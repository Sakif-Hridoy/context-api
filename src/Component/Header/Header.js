import React from 'react';

const Header = (props) => {
    const {count,setCount}=props;
    return (
        <div>
            <h4>This is header :{count}</h4>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    );
};

export default Header;