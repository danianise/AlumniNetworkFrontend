import React from 'react'

function EventForm() {

  const initialState = { 
    name: '',
    location: '',
    dateTime: '',
    description: '',
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = event => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // do something with the data in the component state
    console.log(formState);
    // clear the form
    setFormState(initialState);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={formState.name}
      />
      <label htmlFor="location">Location:</label>
      <input
        id="location"
        type="text"
        onChange={handleChange}
        value={formState.location}
      />
      <label htmlFor="dateTime">Date/Time:</label>
      <input
        id="dateTime"
        type="text"
        onChange={handleChange}
        value={formState.dateTime}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        rows='10'
        cols='60'
        id='description'
        onChange={handleChange}
        type='text'>
      </textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EventForm