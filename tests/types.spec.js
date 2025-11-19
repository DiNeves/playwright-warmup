import { test, expect } from '@playwright/test';
import { TYPES } from './data/pokemonType.data';

test('Validate Normal TYPE', async ({ request }) => {

    const response = await request.get('https://pokeapi.co/api/v2/type/normal');

    const body = await response.json();

    /**
     * the source of trust is the data that was provided to us on PokemonType.data.js.
     * the content on the expect is related to the API of the webpage that we want to validate by comparing to the PokemonType.data.js file.
     * the next command is similar to have expect(body.damage_relations.double_damage_from[0].name).toBe('fighting');
     */
    expect(body.damage_relations.double_damage_from[0].name).toBe(
        TYPES[0].doubleDamage
    );

});