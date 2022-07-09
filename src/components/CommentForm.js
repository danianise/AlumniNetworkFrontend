import React from 'react'

function CommentForm() {

  const initialState = {
    body: " "
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
      <label htmlFor="body">Comment:</label>
      <input
        id="body"
        type="text"
        onChange={handleChange}
        value={formState.body}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm