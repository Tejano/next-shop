import Page from '../components/Page.js';
import Input from '../components/Input.js';
import Field from '../components/Field.js';
import Button from '../components/Button.js';
import { useState } from 'react';
import { fetchJson } from '../lib/api.js';
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 // const [error, setError] = useState(false);
//  const [loading, setLoading] = useState(false);
  const[status,setStatus] = useState({loading:false, error:false})
  const handleSubmit = async (event) => {
    setStatus({loading: true, error: false});
    //await sleep(2000);
    try {
      event.preventDefault();
      console.log('sign in: ');
      const response = await fetchJson('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  email, password }),
      });
       setStatus({ loading: false, error: false });
      console.log('sign in: ', response);
    } catch (err) {
       setStatus({ loading: false, error: true });
      //Todo
    }
  };
  return (
    <Page title='Sign In'>
      <form onSubmit={handleSubmit}>
        <Field label='Email'>
          <Input
            type='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field label='Password'>
          <Input
            type='password'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Field>
        {status.error && (<p className='text-red-700'>Invalid credentials</p>)}
        {status.loading ? (
          <p>Loading ...</p>
        ) : (
          <Button type='submit'>Sign In</Button>
        )}
      </form>
    </Page>
  );
}

export default SignInPage;
