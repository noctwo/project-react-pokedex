import { useContext, useEffect, useState } from "react";
import { IAllPokemon } from "../../contracts/IAllPokemon";
import { FetchUrlContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import "./List.css"

const List = () => {

    const navigate = useNavigate();
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

    const handleCardClick = (name: string) => {
        navigate(`/details/${name}`);
    };

    return ( 
        <div className="list-wrapper">
        {fetchAll?.results.map((item, index) => (
            <div key={index} onClick={() => handleCardClick(item.name)}>
            <Card 
            name={item.name}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}
            >
            </Card>
            </div>
        ) )}
        
        </div>
     );
}
 
export default List;
