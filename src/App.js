import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import SinglePost from "./components/singlePost/SinglePost";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Write from "./pages/write/Write";
import Hemkund from "./components/singlePost/Hemkund";
import Single1 from "./pages/single1/Single1";
import Single2 from "./pages/single2/single2";
import Single3 from "./pages/single3/Single3";


function App() {
  return (
    <>
    <BrowserRouter>
    <TopBar/>
    {/* <Write/> */}
    {/* <Home/> */}
    {/* <Single/>  */}
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/write' element={<Write/>}/>
    <Route path='/amritsar' element={<Single/>}/>
    <Route path='/hemkund' element={<Single1/>}/>
    <Route path='/goa' element={<Single2/>}/>
    <Route path='/shimla' element={<Single3/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;

