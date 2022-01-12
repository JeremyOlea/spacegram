import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className='custom-card'>
            <Card.Title className='custom-card-title'>
              Card Title
            </Card.Title>
            <Card.Img  src='https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg'/>
            <Card.Text className='custom-card-text'>
              This is card example
            </Card.Text>
        </Card>
        <Card className='custom-card'>
            <Card.Title className='custom-card-title'>
              Card Title
            </Card.Title>
            <Card.Img  src='https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg'/>
            <Card.Text className='custom-card-text'>
              This is card example
            </Card.Text>
        </Card>
        <Card className='custom-card'>
            <Card.Title className='custom-card-title'>
              Card Title
            </Card.Title>
            <Card.Img  src='https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg'/>
            <Card.Text className='custom-card-text'>
              This is card example
            </Card.Text>
        </Card>
        
      </header>
    </div>
  );
}

export default App;
