import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { currencies, wallet, tiers } from './constant'

const walletObj = {}
wallet.forEach(item => {
    walletObj[item.currency] = item.amount
})

const tiersObj = {}
tiers.forEach(item => {
    tiersObj[item.from_currency] = item.rates[0].rate
})

const myCurrencies = currencies.filter(item => ['BTC', 'ETH', 'CRO'].includes(item.code))

const format = (v) => {
    return Number(v).toFixed(2)
}

function App() {
    const [count, setCount] = useState(0)

    console.log(tiersObj)

    return (
        <div className='container'>
            {myCurrencies.map((item) => {
                const { colorful_image_url, name, code, symbol } = item
                const amount = walletObj[code]
                return (
                    <div className='item'>
                        <div>
                            <div className='item-left'>
                                <img src={colorful_image_url} alt="img" />
                                <div style={{marginLeft: '8px'}}>{name}</div>
                            </div>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <div>{amount} {symbol}</div>
                            <div>{'$'} {format(amount * tiersObj[code])}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default App
