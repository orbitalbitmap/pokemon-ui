import React from 'react'
import styled from 'styled-components'
import Forms from './Forms'
import Types from './Types'

import returnImagePathString from '../helpers/returnImagePath'
import { typeColors } from '../public/javascript/typeTextColor'

const PokemonPage = styled.div`
  font-size: 24px;
  text-align: center;
`

const PokemonImage = styled.img`
  margin: 10px 0;
`

const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  margin: 50px auto;
  padding: 10px;
  width: 500px;

  ${({ color }) => `
    box-shadow: 0px 0px 150px ${typeColors[color]};
  `}

`

export default ({
  formsList,
  genNumber,
  pokemonId,
  pokemonName,
  typesList,
  color,
}) => (
  <PokemonPage>

    <Card color={color}>
      <div>
        {
          pokemonId < 100
            ? `#0${pokemonId}: ${pokemonName}`
            : `#${pokemonId}: ${pokemonName}`
        }
      </div>
      <PokemonImage src={returnImagePathString(genNumber, pokemonName)} alt={pokemonName} />
      <div>{`Generation: ${genNumber}`}</div>
      <div>
        <Types typesList={typesList} />
      </div>
      <div>
        {
          formsList.length
            ? (<Forms formsList={formsList} />)
            : 'Currently, there are no known alternative forms for this Pokemon.'
        }
      </div>
    </Card>
  </PokemonPage>
)
