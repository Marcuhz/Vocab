import React, { useState } from 'react';
import { Fragment } from 'react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '60a35038ffmsh7ccea4824b0556bp1e04b7jsna1e9d9d21bca',
//     'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
//   },
// };
// function checkWord(word: string) {
//   fetch(
//     `https://twinword-word-graph-dictionary.p.rapidapi.com/reference/?entry=${word}`,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// }

export const Word = () => {
  let [input, setInput] = useState('');
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(input);
    // checkWord(input);
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit} id="form">
        <input
          type="text"
          id="input"
          placeholder="Press enter to submit"
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
      <div id="result" placeholder="result"></div>
    </Fragment>
  );
};
