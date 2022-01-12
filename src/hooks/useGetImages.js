import { useEffect } from 'react'
import axios from 'axios'
import { API_KEY } from '../constants'
import DateUtils from '../utils/DateUtils'

export default function useGetImages(pageNumber) {

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.nasa.gov/planetary/apod',
            params: { api_key: API_KEY, start_date: DateUtils.convertPageNumberToDate(pageNumber) }
        }).then(res => {
            console.log(res.data);
        });
        
    }, [pageNumber])

    return null
}
