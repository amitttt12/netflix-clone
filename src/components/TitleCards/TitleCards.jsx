import Cards_data from "../../assets/cards/Cards_data";

const TitleCards = () => {
  return (
    <div className="titleCards">
      <h2>Popular on Netflix</h2>
      <div className="cardList">
        {Cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="card-image" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
