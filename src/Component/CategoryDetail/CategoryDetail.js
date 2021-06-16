import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const message = useContext(CategoryContext);
    const {count} = props;
    return (
        <div>
            <h4>This is your CategoryDetail:{count}</h4>
            <p>This is the message from app js to direct CategoryDetail------{message}</p>
            
        </div>
    );
};

export default CategoryDetail;