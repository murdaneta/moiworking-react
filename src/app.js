import React from "react"
import { render } from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Layout from './components/layouts/layout.jsx'
import View404 from './components/layouts/404.jsx'
import Home from './components/home/index.jsx'
import './styles/index.scss'
import { ParallaxProvider } from 'react-scroll-parallax';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact strict path="/" component={Home}/>
                    <Route component={View404}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}
const root = document.getElementById('root')
render(
    <ParallaxProvider>
        <App/>
    </ParallaxProvider>,
    root
)