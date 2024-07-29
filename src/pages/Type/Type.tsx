import { useContext, useEffect, useState } from "react";
import { IAllPokemon } from "../../contracts/IAllPokemon";
import { FetchUrlContext } from "../../context/Context";

const Type = () => {

    const context = useContext(FetchUrlContext);
    if (!context) {
        throw new Error('FetchUrlContext must be used within a FetchUrlProvider');
    }
    const { fetchUrl } = context;
    const [fetchAll, setFetchAll] = useState<IAllPokemon | null>(null);

    useEffect(() => {
        const url = fetchUrl;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setFetchAll(data));
    }, [fetchUrl]);

    console.log("fetch", fetchUrl)

    return ( 
        <>
            {fetchAll?.pokemon.map((item, index) => (
            <div key={index} className="single-poke-wrapper">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
            <p>{item.pokemon.name}</p>
            </div>
        ) )}    

        </>
     );
}
 
export default Type;