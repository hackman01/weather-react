
import './App.css';
import Bottom from './components/Bottom/Bottom';
import Middle from './components/Middle/Middle';
import Topbar from './components/Topbar/Topbar';


function App() {
  return (
    <div className='tmb'>
     <Topbar />
     <div className='mid-btm'> 
     
     <Middle />
     {/* <Bottom /> */}
     </div>
     
   
    </div>
   
  );
}

export default App;
