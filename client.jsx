import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import GenerationPage from './pages/GenerationPage'
import PokemonPage from './pages/PokemonPage'
import PokemonDetailsPage from './pages/PokemonDetailsPage'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/generation" component={PokemonPage} />
      <Route path="/pokemon" component={PokemonDetailsPage} />
      <Route exact path="/" component={GenerationPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
