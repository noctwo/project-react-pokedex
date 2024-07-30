import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


interface DetailProps {
    name?: string;
}

const Detail: React.FC<DetailProps> = () => {
    const { name } = useParams<{ name: string }>();

    const [detailData, setDetailData] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => (response.json()))
        .then((data) => setDetailData(data))
    })

    return (
        <div>
            <h1>Details for {name}</h1>
            <img src={`${detailData?.sprites.front_default}`} />
        </div>
    );
};

export default Detail;
