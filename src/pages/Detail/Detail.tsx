import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Detail.css"


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
        <div className="detail-card">
            <div className="detail-card-img-wrapper">
            <img src={`${detailData?.sprites.front_default}`} />
            </div>
            <div className="detail-card-heading-wrapper">
            <h1>{name}</h1>
            <h2># {detailData?.order}</h2>
            </div>
        </div>
    );
};

export default Detail;
