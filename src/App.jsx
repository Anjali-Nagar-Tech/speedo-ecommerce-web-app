import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Navbar from "./components/Navbar"
import { useState , useEffect } from "react"
import axios from "axios"
import Footer from "./components/Footer"
import SingleProduct from "./pages/SingleProduct"
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const [location,setLocation] = useState();
  const [openDropdown,setOpenDropdown] = useState(false);


  const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        try {
          const res = await axios.get(url);
          const address = res.data.address;

          const formattedLocation = {
            fullAddress: res.data.display_name,
            city: address.city || address.town || address.village || "",
            state: address.state || "",
            country: address.country || "",
            postcode: address.postcode || "",
          };

          setLocation(formattedLocation);
          resolve(formattedLocation);
        } catch (err) {
          reject(err);
        }
      },
      (err) => reject(err)
    );
  });
};
  

  useEffect(()=>{
    getLocation();
  },[])



  return (
    <BrowserRouter>
     <Toaster 
      position="bottom-right" 
      reverseOrder={false}
      toastOptions={{
        duration: 2000,
      }}
    />
    <Navbar location={location} getLocation = {getLocation} openDropdown = {openDropdown} setOpenDropdown = {setOpenDropdown}/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<SingleProduct/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/cart" element={<ProtectedRoute><Cart location={location} getLocation={getLocation}/></ProtectedRoute>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
