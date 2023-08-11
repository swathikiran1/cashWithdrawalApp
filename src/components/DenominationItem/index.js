// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denomination, onDeduct} = props
  const {value} = denomination

  const onWithdraw = () => {
    onDeduct(value)
  }

  return (
    <li>
      <button className="item" onClick={onWithdraw} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
