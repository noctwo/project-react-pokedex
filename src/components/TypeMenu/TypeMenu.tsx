import { useEffect, useState, useContext } from "react";
import Header from "../Header/Header";
import { IType } from "../../contracts/IType";
import { FetchUrlContext } from "../../context/Context";
import { Link } from "react-router-dom";


const TypeMenu = () => {

    const [typeMenuClose, setTypeMenuClose] = useState<boolean>(false);
    const toggleHeader = () =>{
        setTypeMenuClose(!typeMenuClose);
    }

    const [types, setTypes] = useState<IType | null>(null);
    const context = useContext(FetchUrlContext);
    if (!context) {
        throw new Error('FetchUrlContext must be used within a FetchUrlProvider');
    }
    const { fetchUrl, setFetchUrl } = context;

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/type/")
        .then((response) => response.json())
        .then((data) => setTypes(data));
    }, [])

    

    const handleCLick = (event:any) =>{
        setFetchUrl(event?.target.value)
    }
    
    useEffect(() => {
        console.log(fetchUrl)
    }, [fetchUrl])


    return ( 
        <>
        {typeMenuClose ? (<Header />) :( <>
        <div className="type-menu-wrapper">
            <div className="type-menu-header">
                <div className="type-menu-header-logo">
                <img src="/img/poke-logo.png"></img>
                </div>
                <div className="typeMenuClose" onClick={toggleHeader}>
                <img src="/img/xmark.svg"></img>
                </div>
            </div>
            <div className="type-menu-types">
                <h2>Types</h2>
                <div className="type-menu-types-wrapper">
                   {
                    types?.results.map((item, index) => (
                        <Link to="/type"><button className={`type-btn ${item.name}`} key={index} value={item.url} onClick={handleCLick}>
                        {item.name}
                        </button>
                        </Link>
                    ))
                   }
                </div>
            </div>
        </div>
        </>)}
        </>
     );
}
 
export default TypeMenu;