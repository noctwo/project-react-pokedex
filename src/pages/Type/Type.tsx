import { useContext, useEffect, useState } from "react";
import { IAllPokemon } from "../../contracts/IAllPokemon";
import { FetchUrlContext } from "../../context/Context";
import { ISinglePokemon } from "../../contracts/ISinglePokemon";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";

const Type = () => {
    const context = useContext(FetchUrlContext);
    if (!context) {
        throw new Error('FetchUrlContext must be used within a FetchUrlProvider');
    }
    const { fetchUrl } = context;
    const [fetchAll, setFetchAll] = useState<IAllPokemon | null>(null);
    const [pokemonDetails, setPokemonDetails] = useState<Record<string, ISinglePokemon | null>>({});
    const navigate = useNavigate();

    useEffect(() => {
        if (fetchUrl) {
            fetch(fetchUrl)
                .then((response) => response.json())
                .then((data) => {
                    setFetchAll(data);
                    data.pokemon.forEach((item: { pokemon: { url: string } }) => {
                        fetch(item.pokemon.url)
                            .then((response) => response.json())
                            .then((data) => {
                                setPokemonDetails((prevState) => ({
                                    ...prevState,
                                    [item.pokemon.url]: data
                                }));
                            });
                    });
                });
        }
    }, [fetchUrl]);

    const handleCardClick = (name: string) => {
        navigate(`/details/${name}`);
    };

    return (
        <div className="list-wrapper">
            {fetchAll?.pokemon.map((item, index) => {
                const details = pokemonDetails[item.pokemon.url];
                return (
                    <div key={index} onClick={() => handleCardClick(item.pokemon.name)}>
                        <Card
                            name={item.pokemon.name}
                            imageUrl={details ? details.sprites.front_default : ''}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Type;
