import React from 'react'
import styled from 'styled-components'
import Forms from './Forms'
import Types from './Types'

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

const Description = styled.div`
  margin-bottom: 12px;
`

export default ({
  formsList,
  genNumber,
  pokemonId,
  pokemonName,
  typesList,
  color,
  slug,
  description1,
  description2,
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
      <PokemonImage src={`images/gen${genNumber}/${slug}.png`} alt={pokemonName} />
      <div>{`Generation: ${genNumber}`}</div>
      <div>
        <Types typesList={typesList} />
      </div>
      <Description>
        { Math.random() >= 0.5
          ? description1
          : description2
        }
      </Description>
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
