import { useDispatch, useSelector } from "react-redux";
import Cards from "../Card/Cards";
import AddProducts from "../Card/AddProducts";

const Home = () => {


  const products = useSelector((state) => state.products);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-2 ">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                  {
                products.length ? products.map((product, index)=>(
                   <div key={index}>
                    <Cards product={product}/>
                   </div>
                )) : <p>no product card</p>
               }  
                </div>         
           </div>

        <div >
          <AddProducts/>
        </div>
      </div>
    </div>
  );
};

export default Home;
