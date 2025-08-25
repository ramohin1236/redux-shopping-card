import { useDispatch, useSelector } from "react-redux";
import Cards from "../Card/Cards";

const Home = () => {


  const products = useSelector((state) => state.products);
  const dispatch = useDispatch

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-2 border border-amber-200 ">
               {
                products.length ? products.map((product, index)=>(
                   <div key={index}>
                    <Cards product={product}/>
                   </div>
                )) : <p>no product card</p>
               }           
           </div>

        <div className="border border-red-200">Add new products</div>
      </div>
    </div>
  );
};

export default Home;
