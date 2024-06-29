import './country-card.scss';

type CountryCardProps = {
  image: {
    src: string;
    alt: string;
  };
  name?: string;
  capital?: string[];
  population?: number | string;
  displayDetails: boolean;
};

export const CountryCard = ({
  image,
  name,
  capital,
  population,
  displayDetails,
}: CountryCardProps) => {
  return (
    <div className="country-card">
      <div className="country-card__image">
        {image.src && <img src={image.src} alt={image.alt} />}
      </div>
      <div className="country-card__body">
        <p>{name ?? ''}</p>
        {displayDetails && (
          <>
            {' '}
            <p>
              Capital:
              {capital ? (capital.length === 0 ? 'Not known' : capital) : ''}
            </p>
            <p>Population: {population ?? ''}</p>
          </>
        )}
      </div>
    </div>
  );
};
