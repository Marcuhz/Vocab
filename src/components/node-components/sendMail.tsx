import axios from 'axios';
import { Fragment, useState, FormEvent, ChangeEvent } from 'react';

function sendMail() {
  const [data, setData] = useState({
    name: '',
  });

  const SERVER: string = 'http://localhost:3000/api';
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios.post(SERVER, {
      name: data.name,
    });
  };
  const handleChange = ({ name }: { name: ChangeEvent<HTMLInputElement> }) => {
    let newData = { ...data };
    newData.name = name.target.value;
    setData(newData);
  };
  return (
    <Fragment>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          id="text"
          onChange={e => handleChange({ name: e })}
        />
      </form>
    </Fragment>
  );
}
