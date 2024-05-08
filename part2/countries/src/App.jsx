import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [value, setValue] = useState('')
  const [rates, setRates] = useState({})
  const [currency, setCurrency] = useState(null)

  useEffect(() => {
    console.log('effect run, currency is now', currency)
    if (currency) {
      console.log('fetching exchange rates...')
      axios
        .get(`https://restcountries.com/v3.1/name/${currency}`)
        .then(response => {
          setRates(response.data)
        })
    }
  }, [currency])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    setCurrency(value)
  }
  const showUSA = (event) => {
    event.preventDefault()
    setCurrency('USA')
  }
  const showSweden = (event) => {
    event.preventDefault()
    setCurrency('Sweden')
  }
  const showSpain = (event) => {
    event.preventDefault()
    setCurrency('Spain')
  }
  return (
    <div>
      <form onSubmit={onSearch}>
        Country: <input value={value} onChange={handleChange} />
        <button type="submit">Search information of any country</button>
      </form>
      <pre>
        {JSON.stringify(rates, null, 2)}
      </pre>
      <form>
        USA
        <button onClick={showUSA}>Show</button>
      </form>
      <form>
        Sweden
        <button onClick={showSweden}>Show</button>
      </form>
      <form>
        Spain
        <button onClick={showSpain}>Show</button>
      </form>
    </div>
  )
}

export default App