export const CountryComponent = ({ country }) => {
    if (!country) {
      return null
    }
    return (
      <div>
        <h1> Details for: {country.name.common}</h1>
        <h2>Capital: {country.capital} </h2>
        <img src={country.flags.png} height='100' alt={country.flags.alt} />
      </div>
    )
  }