import React from 'react'
import { Button } from 'antd'
import './countProduct.scss'

const CountProduct = (props) => {
  const { count, setCount } = props

  const handleOnChangeCount = (number) => {
    let newCount = count
    if (newCount < 10 && number > 0) {
      newCount += number
    }
    if (newCount > 1 && number < 0) {
      newCount += number
    }
    setCount(newCount)
  }

  const handleInputCount = (e) => {
    const value = Number(e.target.value)
    if (value > 10) {
      setCount(10)
      return
    }
    if (value < 1) {
      setCount(1)
      return
    }
    setCount(value)
  }

  return (
    <div className="count-product">
      <Button
        className="count-product--icon-minus"
        onClick={() => handleOnChangeCount(-1)}
      >
        <span className="far fa-minus" />
      </Button>

      <input
        type="number"
        name="count"
        className="count-product--input"
        onChange={handleInputCount}
        value={count}
      />

      <Button
        className="count-product--icon-plus"
        onClick={() => handleOnChangeCount(1)}
      >
        <span className="far fa-plus" />
      </Button>
      <p className="count-product--text">Min: 1 - Max: 10</p>
    </div>
  )
}

export default CountProduct
