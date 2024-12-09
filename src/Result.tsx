import Pet from "./Pet";
import { Pet as PetType } from "./APIResponsesTypes";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            id={pet.id}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.city}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Results;
