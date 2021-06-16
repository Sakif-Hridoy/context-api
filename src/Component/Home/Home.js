import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const messag = useContext(CategoryContext);
    // const {count} = props;
    return (
        <div>
            <h4>This is home:</h4>
            <p>Categories Called from only home--<Categories></Categories></p>
            <p>This is the message from app js to direct Home------{messag}</p>
        </div>
    );
};

export default Home;