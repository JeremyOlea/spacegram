import './App.css';
import { useState, useRef, useCallback } from 'react'
import ImageCard from './components/ImageCard';
import useGetImages from './hooks/useGetImages';

function App() {
    const [pageNumber, setPageNumber] = useState(1);

    const {
        loading,
        error,
        data
    } = useGetImages(pageNumber);

    const observer = useRef();
    const lastImageRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(enteries => {
            if (enteries[0].isIntersecting) {
                setPageNumber(prevPageNumber => prevPageNumber + 1);
            }
        })
        if (node) observer.current.observe(node);
    }, [loading]);

    return (
        <header className="App-header">
            {data.map((d, idx) => {
                if (data.length === idx + 1) {
                    return (
                        <div key={idx} ref={lastImageRef}>
                            <ImageCard key={idx} title={d.title} desc={d.desc}
                                url={d.url}></ImageCard>
                        </div>
                        );
                } else {
                    return <ImageCard key={idx} title={d.title} desc={d.desc}
                        url={d.url}></ImageCard>
                }
            })}
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
        </header>
  );
}

export default App;
