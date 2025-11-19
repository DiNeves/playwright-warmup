---

### 🧪 Automate API Tests using Playwright (Lesson 6)

**Description**
We need to implement API automation tests using **Playwright** to validate different endpoints.
For this lesson, we’ll use **PokéAPI** as our main example, focusing on making requests, validating responses, and ensuring data consistency.

---

### 🎯 Goals

* Create API tests using the `request` object from Playwright.
* Validate status codes, response times, and specific fields in the response body.
* Implement reusable helper functions for API calls (e.g., `getPokemonByName`, `getPokemonByType`).
* Add assertions for data validation (e.g., Pokémon name, ID, type).
* Structure the project following the same pattern used in previous lessons.

---

### 🗂️ Tasks

* [ ] Create a new test file under `tests/api/`
* [ ] Set up a test for the PokéAPI endpoint: `https://pokeapi.co/api/v2/pokemon/{name}`
* [ ] Validate the response status is `200`
* [ ] Assert key fields (`name`, `id`, `types`) in the response body
* [ ] Add one or more negative test cases (e.g., invalid Pokémon name)
* [ ] Implement reusable API request helpers if needed
* [ ] Add proper test descriptions and follow the existing naming conventions
* [ ] Commit all changes under branch `lesson-6-api-tests`

---

### 🧩 Example snippet

```js
import { test, expect } from '@playwright/test';

test('should return correct Pokémon data', async ({ request }) => {
  const response = await request.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.name).toBe('pikachu');
  expect(body.id).toBe(25);
  expect(body.types[0].type.name).toBe('electric');
});
```

---

### ✅ Acceptance Criteria

* Tests run successfully with `npx playwright test`
* Code follows the established naming conventions and folder structure
* Clear and descriptive test names
* Includes at least one positive and one negative API test

---