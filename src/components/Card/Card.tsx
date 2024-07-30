import "./Card.css"

interface PokemonCardProps {
    name: string;
    imageUrl: string;
}

const Card: React.FC<PokemonCardProps> = ({ name, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />
            <p>{name}</p>
        </div>
    );
};

export default Card;
