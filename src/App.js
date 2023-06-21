import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'

import { Navbar, Homepage, About, CryptoCurrencies, News, CryptoDetails } from './components'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path='/about' element={<About />} />
              <Route path='/cryptocurrencies' element={<CryptoCurrencies />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className='footer' style={{backgroundColor:'#f0f2f5'}}>
          <Typography.Title level={5} style={{ textAlign: 'center', color: 'black',fontStyle:'italic'}}>
            BitPrime <br />
            All Rights© Reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>

    </div>
  )
}

export default App
