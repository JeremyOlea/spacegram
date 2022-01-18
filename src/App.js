import './App.css';
import { useState, useRef, useCallback, useEffect } from 'react'
import ImageCard from './components/ImageCard';
import useGetImages from './hooks/useGetImages';

function App() {
    const [pageNumber, setPageNumber] = useState(1);

    const {
        loading,
        error,
        data
    } = useGetImages(pageNumber);

    // Observe when the last entry is on the screen and change page number
    // to load more posts
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

    useEffect(() => {
        document.title = 'Spacegram';
    }, []);

    return (
        <div className='app'>
            <div className='app-header'>
                <div className='logo-text'>
                    Spacegram
                </div>
            </div>
            <div className="app-body">
                {data.map((d, idx) => {
                    if (data.length === idx + 1) {
                        return (
                            <div key={idx} ref={lastImageRef}>
                                <ImageCard key={idx} title={d.title} desc={d.desc}
                                    url={d.url} date={d.date}></ImageCard>
                            </div>
                            );
                    } else {
                        return <ImageCard key={idx} title={d.title} desc={d.desc}
                            url={d.url} date={d.date}></ImageCard>
                    }
                })}
                {loading && <div>Loading...</div>}
                {error && <div>Error</div>}
            </div>
        </div>
  );
}

export default App;
