// Write your code here
import {Component} from 'react'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList/index'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}

export default CryptocurrencyTracker
