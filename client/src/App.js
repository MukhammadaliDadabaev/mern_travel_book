import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {
  return ( <>
      <Navbar/>
  <div className = "container" >
    <div className='row'>
      <div className='col-lg-10 offset-lg-1'>
      <Main/>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;