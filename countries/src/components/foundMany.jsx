import RenderMany from './renderMany'


const FoundMany = ({ setNadjena, nadjena, foundCountry }) => {



    return (
        <div>
            <ul>
                {foundCountry.map(country => <li key={country.name.common}>{country.name.common}
                    <button onClick={() => setNadjena(country)}>show</button></li>)}
            </ul>
            {nadjena ? <RenderMany country={nadjena} />
            : <p></p>}
        </div>
    )
}


export default FoundMany