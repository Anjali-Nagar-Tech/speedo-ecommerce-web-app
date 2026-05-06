import axios from "axios";
import { createContext, useState,useContext } from "react";
/* eslint-disable react-refresh/only-export-components */

export const DataContext = createContext({
    data: [],
  setData: () => {},
  fetchAllProducts: () => {}
});

export const DataProvider = ({children})=>{
    const [data,setData] = useState();

        // fetching all products from api
        const fetchAllProducts = async()=>{
                try{
                    // const res = await axios.get("https://fakestoreapi.com/products");
                    const res = await axios.get("https://zeptro-ecommerce-app.onrender.com/products");
                    
                    const userData = res.data;
                    setData(userData);
                }catch(error){
                    console.log(error);
                }
        }

        
        const getUniqueCategory = (data, property) =>{
      let newVal = data?.map((curElem) =>{
          return curElem[property]?.name
      })
      newVal = ["All",...new Set(newVal)]
      return newVal
    }


  
    const categoryOnlyData = getUniqueCategory(data, "category")
    const brandOnlyData = getUniqueCategory(data,"brand")

        return <DataContext.Provider value={{data,setData,fetchAllProducts,categoryOnlyData,brandOnlyData}}>
                    {children}
            </DataContext.Provider>
}

export const useData = ()=> useContext(DataContext)