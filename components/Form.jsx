import { useState } from 'react';
import styled from 'styled-components';

export const Form = () => {
  const [entry, setEntry] = useState({});

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;

    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }
    setEntry({ ...entry, [field.name]: value });
  };

  const handleSubmit = () => {};

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Hey, how was your day?</h2>

      <label htmlFor="date">Date</label>
      <input
        type="text"
        name="date"
        id="date"
        value={entry.date}
        onChange={handleChange}
      />

      <label htmlFor="pokemonAmount">How many pokemon did you see today?</label>
      <input
        type="number"
        name="pokemonAmount"
        id="pokemonAmount"
        value={entry.amount}
        onChange={handleChange}
      />

      <fieldset>
        <legend>Where did you see most pokemon?</legend>
        <div>
          <label>
            <input
              type="radio"
              name="location"
              value="High grass"
              checked={entry.location === 'High grass'}
              onChange={handleChange}
            />
            High Grass
          </label>
          <label>
            <input
              type="radio"
              name="location"
              value="Deep sea"
              checked={entry.location === 'Deep sea'}
              onChange={handleChange}
            />
            Deep Sea
          </label>
          <label>
            <input
              type="radio"
              name="location"
              value="L"
              checked={entry.location === 'Up in the air'}
              onChange={handleChange}
            />
            Up in the air
          </label>
        </div>
      </fieldset>

      <label>
        <input
          type="checkbox"
          name="newCaughtPokemon"
          checked={entry.onSale}
          onChange={handleChange}
        />
        Caught a new pokemon
      </label>
      <div>
        <button type="submit">Send</button>
        <button type="reset" /* handlerFn={resetForm} */>Reset</button>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
