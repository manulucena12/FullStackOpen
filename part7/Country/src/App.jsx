import { useCountry} from './hooks/useCountry'
import { CountryComponent } from './components/country'


const App = () => {
  const {getName,name,searchCountry,country} = useCountry()
  
  return (
    <div>
      <h1>Search for your country!</h1>
      <form onSubmit={searchCountry}>
        <input value={name} onChange={getName}/>
        <button>Search</button>
      </form>
      <CountryComponent country={country} />
    </div>
  )
}

export default App