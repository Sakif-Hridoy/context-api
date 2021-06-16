import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>This is Categories:{count}</h4>
            <p>CategoryDetail call from only Category<CategoryDetail count={count}></CategoryDetail></p>
        </div>
    );
};

export default Categories;