import './App.css';
import { useState } from 'react'
import ImageCard from './components/ImageCard';
import useGetImages from './hooks/useGetImages';

function App() {
    const [pageNumber, setpageNumber] = useState(1);

    useGetImages(pageNumber);
    return (
        <header className="App-header">
            <ImageCard title='Card Title' desc='Example Card Description'></ImageCard>
        </header>
  );
}

export default App;
