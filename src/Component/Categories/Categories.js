import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';


const allProducts = [{name:"Lenovo",category:"Laptop"},
{name:"Asus",category:"Laptop"},{name:"Oppo",category:"Mobile"},{name:"Samsung",category:"Mobile"},
{name:"Cannon",category:"Camera"},{name:"Nikkon",category:"Camera"}];
const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const matchedProducts = allProducts.filter(pd=> pd.category===category);
        setProducts(matchedProducts);
    },[category]);
    

    return (
        <div>
            <h4>This is Categories:{category}</h4>
            {
                products.map(pd =><CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;