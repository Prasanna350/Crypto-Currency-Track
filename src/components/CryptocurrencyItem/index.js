// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoCurrencyItem
  return (
    <li className="currency-item-each-col">
      <div className="currency-item-logo-card">
        <img
          src={currencyLogo}
          alt={currencyName}
          className="item-currency-logo"
        />
        <p className="each-currency-name">{currencyName}</p>
      </div>
      <div className="currency-item-right-part">
        <p className="currency-item-values">{usdValue}</p>
        <p className="currency-item-values">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
