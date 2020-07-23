import React, { useState } from 'react';

function App() {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
  })

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser(user => ({ ...user, [name]: value }))
  };

  return (
    <div className="App">
      <h1>Hello, {user.firstName} {user.lastName}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="firstName" placeholder="Enter First Name" onChange={onChange} value={user.firstName} /> <br />
        <input type="text" name="lastName" placeholder="Enter Last Name" onChange={onChange} value={user.lastName} /> <br />
        <input type={"submit"} value={"Save"} />
      </form>
    </div>
  );
}

export default App;
