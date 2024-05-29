// import logo from './logo.svg';
import './App.css';
import ImageSlider from './imageSlider/ImageSlider';

function App1() {
  return (
    <div className="App1">
        {/* Star Rating component */}
        <ImageSlider 
          url={'https://picsum.photos/v2/list'}
          page={"1"}
          limit={"10"}
        />
    </div>
  );
}

export default App1;
