import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>About BitPrime</h2>
      <p style={{ fontSize: '16px', marginBottom: '20px' }}>
        Welcome to BitPrime! We are a leading platform that provides information about global cryptocurrency statistics, various cryptocurrencies, and the latest news from the crypto world.
        Our mission is to empower individuals and businesses with valuable insights and knowledge to navigate the dynamic and evolving cryptocurrency market.
        Whether you're a seasoned crypto enthusiast or a beginner exploring the world of digital currencies, we've got you covered.
      </p>
      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        Thank you for choosing BitPrime as your go-to platform for crypto information.
        We are committed to delivering a user-friendly experience and keeping you updated with the latest trends, news, and statistics from the crypto world.
        Whether you're looking to track prices, explore new cryptocurrencies, or stay informed about the industry, we've got you covered.
        Happy exploring!
      </p>
      <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Top Exchanges for Trading</h3>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Binance: </span>
          <a href="https://www.binance.com" style={{ marginRight: '10px' }}>www.binance.com</a>

        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Coinbase Exchange:</span>
          <a href="https://www.coinbase.com/exchange" style={{ marginRight: '10px' }}>www.coinbase.com</a>

        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Bybit:</span>
          <a href="https://www.bybit.com/en-US/" style={{ marginRight: '10px' }}>www.bybit.com</a>

        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', marginRight: '10px' }}>OKX:</span>
          <a href="https://www.okx.com" style={{ marginRight: '10px' }}>www.okx.com</a>

        </li>
        <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Huobi:</span>
          <a href="https://www.huobi.com/en-us/" style={{ marginRight: '10px' }}>www.huobi.com</a>

        </li>
        {/* Add more exchanges as needed */}
      </ul>

    </div>
  );
};

export default About;
