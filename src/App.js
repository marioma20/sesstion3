import { useState } from 'react';
import './App.css';
// import Welcome from './Component/Welcome';
// import Gaest from './Component/Gaest';
// import List from './Component/List';
import Productlist from './Component/Product_list';

function App() {

  // const [isLoggedin, set_isLoggedin] = useState(false);
  // let element;

  // let element =   isLoggedin ? <h1>i am logged in</h1> : <h2>i am not logged in</h2> ;

  // if(isLoggedin){
  //    element = <h1>i am logged in</h1>
  // }else{
  //   element = <h1>i am not logged in</h1>
  // }

  return (
    // <div className="App">
    // {/* //   <button onClick={()=>{ */}
    // {/* //       set_isLoggedin(true); */}
    // {/* //   }}>logg in</button> */}
    // {/* {isLoggedin ? <h1>i am logged in</h1> : <h2>i am not logged in</h2>} ; */}
    // {/* {isLoggedin ? <Welcome name="nader"/> : <Gaest/>} */}
    // {/* //   {isLoggedin ? <Welcome name="nader"/> : null} */}
    // {/* //      {element} */}
    // {/* //      <List/> */}
    ///////////////////////////////
    <Productlist/>
    //////////////////////////
    // route test kims code

    // </div>
  );
}

export default App;
