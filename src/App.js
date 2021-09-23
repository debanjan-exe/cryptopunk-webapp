import React from 'react'
import "./App.css"
// import routing
import { Switch, Route } from "react-router-dom"
// import UI elements
import { Layout, Typography, Space } from 'antd';
// import components
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: "white", textAlign: "center" }}>
            ©CryptoPunk All Rights Reserved<br />
            Get In Touch :
          </Typography.Title>
          <Space>
            <a id="footer-links" target="_blank" rel="noreferrer" href="https://github.com/debanjan-exe">GitHub</a>
            <a id="footer-links" target="_blank" rel="noreferrer" href="https://twitter.com/deba_exe">Twitter</a>
            <a id="footer-links" target="_blank" rel="noreferrer" href="https://linkedin.com/in/debanjan-acharyya">Linkedin</a>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
