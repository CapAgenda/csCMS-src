import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext()
const baseEndpointUrl = 'https://apicsb.herokuapp.com/'
const baseImageSrcUrl = 'https://apicsb.herokuapp.com/image/'

const AppProvider = ({ children }) => {
    const [currentComic, setCurrentComic] = useState([])
    const [loading, setLoading] = useState(false)
    const [primeEndpoint, setPrimeEndpoint] = useState('')
    const [imageEndpoint, setImageEndpoint] = useState('')

    const fetchComic = async (url) => {
        setLoading(true)
        try {
            const { data } = await axios.get(url)
            if (data) {
                setCurrentComic(data)
            }
            else {
                setCurrentComic([])
            }
        }
        catch (e) {
            console.log(e.response)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchComic(baseEndpointUrl+"get-latest")
    }, [primeEndpoint])

    

    
    return (
        <AppContext.Provider
            value= {{ loading, currentComic, setPrimeEndpoint, setImageEndpoint }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGLobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
