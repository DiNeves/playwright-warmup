import { test, expect } from '@playwright/test';

test('Pokemon List', async ({ request }) => {

    const response = await request.get('https://pokeapi.co/api/v2/pokemon/');
    // if we change the status code in the toBe command, it's an easy way to validate if what we're receiving is the expected value or not.
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.count).toBe(1328);
    expect(body.results[0].name).toBe('bulbasaur');

    const pokemonResponse = await request.get(body.results[0].url);
    const pokemonResponseBody = await pokemonResponse.json();
    expect(pokemonResponseBody.types[0].type.name).toBe('grass');
    expect(pokemonResponseBody.types[1].type.name).toBe('poison');  

});