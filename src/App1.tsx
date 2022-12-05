import React, { useState } from 'react';
import './App.css';
// import { Form1, Form2 } from 'form-builder';
// import { A, App2 } from 'libtest1';
// import { Requirements } from 'portexe-react-pwr';

export const App1 = () => {
  // const [valid, setValid] = useState(false);
  // const [password, setPassword] = useState('');
  // const [username, setUsername] = useState('');

  // const passwordRequirements = [
  //   {
  //     text: 'Must be at least 8 characters',
  //     validator: (val) => val.length >= 8,
  //   },
  //   {
  //     text: 'Must contain at least one number',
  //     validator: (val) => /\d/g.test(val),
  //   },
  //   {
  //     text: 'Must contain at least one lower-case letter',
  //     validator: (val) => /[a-z]/g.test(val),
  //   },
  //   {
  //     text: 'Must contain at least one upper-case letter',
  //     validator: (val) => /[A-Z]/g.test(val),
  //   },
  // ];
  return (
    <div className="App">
      <h1>Type app</h1>
      
      {/* <Requirements
        value={password}
        requirements={passwordRequirements}
        onValidChange={(isValid) => setValid(isValid)}
      />

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <App2 />
      <Form1 />
      <Form2 /> */}
    </div>
  );
};
