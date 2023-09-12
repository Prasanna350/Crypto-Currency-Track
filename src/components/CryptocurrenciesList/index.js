// Write your JS code here
import {Component} from 'react'
import './index.css'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem/index'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrenciesList: [], isLoading: true}

  componentDidMount = () => {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currenciesList = await response.json()
    const updatedList = currenciesList.map(object => ({
      id: object.id,
      currencyName: object.currency_name,
      usdValue: object.usd_value,
      euroValue: object.euro_value,
      currencyLogo: object.currency_logo,
    }))
    this.setState({cryptoCurrenciesList: updatedList, isLoading: false})
  }

  render() {
    const {cryptoCurrenciesList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="white" width={80} height={80} />
      </div>
    ) : (
      <div className="card-container">
        <h1 className="tracker-main-head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="tracker-main-img"
        />
        <div className="box-border-div">
          <div className="box-titles-div">
            <p className="head-titles">Coin Type</p>
            <div className="box-title-right-card">
              <p className="right-head-title">USD</p>
              <p className="right-head-title">EURO</p>
            </div>
          </div>
          <ul className="currencies-list-card">
            {cryptoCurrenciesList.map(cryptoCurrencyItem => (
              <CryptocurrencyItem
                cryptoCurrencyItem={cryptoCurrencyItem}
                key={cryptoCurrencyItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
