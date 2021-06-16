import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [category,setCategory] = useContext(CategoryContext);
    
    return (
        <div>
            <h4>This is header :{category}</h4>
            <button onClick={()=> setCategory("Laptop")}>laptop</button>
            <button onClick={()=> setCategory("Mobile")}>Mobile</button>
            <button onClick={()=> setCategory("Camera")}>Camera</button>
        </div>
    );
};

export default Header;