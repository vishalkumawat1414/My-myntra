
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import NotFound from './pages/NotFound';
import Navigation from './component.js/Navigation';
import Profile from './component.js/Profile';
import Child1 from './Redux/components/Child1';
import Child2 from './Redux/components/Child2';
import NavBar from './MiniProject/NavBar';
import ProductList from './MiniProject/ProductList';
import CreateNotes from './Noteredux/CreateNotes'
import ListNotes from './Noteredux/ListNotes'
import NotesSlice from './Noteredux/NotesSlice';


function App() {
  return (
    // <div className="App">
    //     <Navigation/>
    //  <Routes>
    //   {/* if we write path /Home we will redirect to Home component */}
    //    <Route path='/Home' element = {<Home/>}/> 
    //    <Route path='/Page2' element = { <Page2/>}/>
    //    <Route path='/Page3' element = { <Page3/>}/>
    //    <Route path='*' element = {<NotFound/>}/>
    //    <Route path='/user/:userId'element ={<Profile/>}/>
    //   </Routes>
    // </div>

      // <div>
      //   <Child1/>
      //   <Child2/>
      //   </div>
      
      
      // <div> <CreateNotes/>
    
      //  <ListNotes/></div> 
     <> <NavBar />
       <ProductList /> </>
       
   
  
  );
}

export default App;
