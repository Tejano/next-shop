import React from 'react';
import Page from '../components/Page.js';
import Input from '../components/Input.js';
import Field from '../components/Field.js';
import Button from '../components/Button.js';
function SignInPage() {
  return (
    <Page title='Sign In'>
      <form>
        <Field label='Email'>
          <Input type='email' />
        </Field>
        <Field label='Password'>
          <Input type='password' />
        </Field>
        <Button type='submit'>
            Sign In
        </Button>
      </form>
    </Page>
  );
}

export default SignInPage;
