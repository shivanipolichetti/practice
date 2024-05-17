import './App.css';
import Image from './components/functionalcomponents/props/img';
import { Products } from './components/functionalcomponents/props/products';

function App() {
 
  return (
    <div >
     <Image size={200}/>
     <Products name={"apple"} price={3.00}/>
     <Products name={"mango"} price={4.50}/>
     <Products name={"fruits"}/>
    </div>
  );
}

export default App;
