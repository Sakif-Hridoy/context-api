import { createContext, useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';
export const CategoryContext = createContext();
function App() {
  // const [count,setCount] = useState(0);
  const [category,setCategory] = useState("Laptop");
  return (
    <CategoryContext.Provider value={[category,setCategory]}>
    <h4>App js category:{category}</h4>
     <Header></Header>
     <Home></Home>
     <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
