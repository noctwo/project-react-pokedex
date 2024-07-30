import "./Card.css"

interface PokemonCardProps {
    name: string;
    imageUrl: string;
}

const Card: React.FC<PokemonCardProps> = ({ name, imageUrl }) => {
    return (
        <div className="card">
            <div className="card-img-wrapper">
            <img src={imageUrl} alt={name} />
            </div>
            <div className="card-text-wrapper">
            <p>{name}</p>
            </div>
        </div>
    );
};

export default Card;
