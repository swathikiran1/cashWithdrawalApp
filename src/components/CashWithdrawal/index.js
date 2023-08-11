// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem/index'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdrawDenomination = value => {
    this.setState(prevState => {
      let result
      if (prevState.balance - value >= 0) {
        result = {balance: prevState.balance - value}
      }
      return result
    })
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="profile-container">
            <div className="profile">
              <p>S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="paragraph">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <div className="list-container">
            <ul className="denomination-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denomination={eachItem}
                  key={eachItem.id}
                  onDeduct={this.onWithdrawDenomination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
