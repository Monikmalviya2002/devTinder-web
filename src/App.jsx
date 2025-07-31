import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Componets/Body";
import Login from "./Componets/Login";
import Profile from "./Componets/Profile";
import Signup from "./Componets/Signup";
import { Provider } from "react-redux";
import appStore from "./utills/appStore";
import Feed from "./Componets/Feed";
import Connections from "./Componets/Connections";
import Request from "./Componets/Request";
import Chat from "./Componets/Chat";


function App() {
  return (
     <>
    <Provider store ={appStore}>
     <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element ={<Body/>}>
          <Route path="/" element ={<Feed/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/profile" element ={<Profile/>}/>
         <Route path="/connections" element ={<Connections/>}/>
        <Route path="/request" element={<Request />} />
         <Route path="/signup" element={<Signup />} />
         <Route path ="/chat/:targetId"  element={<Chat/>}/>

    
      </Route>
      </Routes>
     </BrowserRouter>
     </Provider>
     </>
      
    
  );
}

export default App;
