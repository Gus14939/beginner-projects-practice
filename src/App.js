// import logo from './logo.svg';
import './App.css';
import Accordion from './accordion/Accordion';
import RandomColour from './randomColour/RandomColour';
import StarRating from './starRating/StarRating';
import ImageSlider from './imageSlider/ImageSlider';

function App() {
  return (
    <div className="App">

      {/* Accordion component */}
      <Accordion />
      {/* Random colour component */}
      <RandomColour />
      {/* Star Rating component */}
      <StarRating numOfStars={10} />
      {/* Image Slider component */}
      <ImageSlider />
    </div>
  );
}

export default App;
