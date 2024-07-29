import { useContext, useEffect, useState } from "react";
import { IAllPokemon } from "../../contracts/IAllPokemon";
import { FetchUrlContext } from "../../context/Context";


const List = () => {

    const context = useContext(FetchUrlContext);
    if (!context) {
        throw new Error('FetchUrlContext must be used within a FetchUrlProvider');
    }
    const { fetchUrl } = context;
    const [fetchAll, setFetchAll] = useState<IAllPokemon | null>(null);

    useEffect(() => {
        const url = fetchUrl || "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
        fetch(url)
            .then((response) => response.json())
            .then((data) => setFetchAll(data));
    }, [fetchUrl]);

    return ( 
        <>
        {fetchAll?.results.map((item, index) => (
            <div key={index} className="single-poke-wrapper">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
            <p>{item.name}</p>
            </div>
        ) )}
        
        </>
     );
}
 
export default List;