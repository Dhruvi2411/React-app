import './App.css';
import reviews from './data';
import Testimonial from './component/Testimonial';

function App() {


  return (
    <div className="app">

      <div className="header">

        <h2 className='heading'>Our Testimonial</h2>

        <div className="headerline"></div>

        <Testimonial reviews = {reviews}/>
        
      </div>

    </div>
  );
}

export default App;
