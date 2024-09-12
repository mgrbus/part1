import FoundMany from './foundMany'
import RenderMany from './renderMany'

const Search = ({  setNadjena, nadjena,setTypeCountry, countries, setFoundCountry, foundCountry, typeCountry }) => {

    const handleSearching = event => {
        const typeCountry = event.target.value
        setTypeCountry(typeCountry)
        const filteredCountries = countries.filter((country) =>
            country.name.common.toLowerCase().includes(typeCountry.toLowerCase()))
        setFoundCountry(filteredCountries)
    }

    return (

        <div>
            find countries
            <input
                type="text"
                value={typeCountry}
                onChange={handleSearching}
                placeholder="search"
            />
            {foundCountry.length > 10
                ? <p>Too many matches, specify another filter</p>
                : foundCountry.length > 1
                    ? <FoundMany nadjena={nadjena} setNadjena={setNadjena} foundCountry={foundCountry} />
                    : foundCountry.length === 1
                        ? <RenderMany country={foundCountry[0]} />
                        : <p></p>
            }
        </div>

    )
}

export default Search