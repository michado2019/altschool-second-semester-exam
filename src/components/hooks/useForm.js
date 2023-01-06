import { useState } from 'react';

export default function useForm(initial = {}) {

  //Set state 
  const [inputs, setInputs] = useState(initial);

  //Handle change
  function handleChange(e) {
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }
  return {
    inputs,
    handleChange,
  };
}