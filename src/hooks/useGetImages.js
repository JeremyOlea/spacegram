import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../constants'
import DateUtils from '../utils/DateUtils'

export default function useGetImages(pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const preprocessData = (data) => {
        let processedData = []
        data.slice().reverse()
            .forEach(function(item) {
                if (item.media_type === 'image') {
                    processedData.push({
                    date: item.date,
                    desc: item.explanation,
                    title: item.title,
                    url: item.url
                    })
                }
            });
        return processedData;
    }

    useEffect(() => {
        setLoading(true);
        setError(false);

        const [startDate, endDate] = DateUtils.convertPageNumberToDate(pageNumber, 5);
        axios({
            method: 'GET',
            url: 'https://api.nasa.gov/planetary/apod',
            params: { api_key: API_KEY, start_date: startDate, end_date: endDate }
        }).then(res => {
            const processedData = preprocessData(res.data);
            setData(prevData => {
                return [...prevData, processedData.map(d => d)].flat()
            })
            setLoading(false);
        }).catch(e => {
            setError(true);
        });
        
    }, [pageNumber])

    return { loading, error, data }
}
