import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from '../contexts/MovieContext';

export const FetchData = ({ query }) => {

    const [data, setData] = useState([]);
    const [isError, setIsError] = useState("");
    const [loading, setLoading] = useState(false);
    const { updateValue } = useContext(MovieContext);
  
    useEffect(() => {
    
        const axiosData = async (movieName) => {
            setLoading(true)
            try {
                const { data: { Search } } = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a7843424&s=' + movieName + "type=movie")
                setData(Search)
                setLoading(false)
                updateValue(Search)

            } catch (error) {
                setIsError(error.message);
            }
            return axiosData(query);
        }
    }, []);
}