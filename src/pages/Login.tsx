import * as React from 'react';
import { Box } from 'grommet';
import { ContentWrapper } from '../components/';

const Login = () => {
  return (
    <ContentWrapper>
      <Box
        direction="column"
        align="center"
        justify="center"
        background="light-2"
        pad={{ vertical: 'small', horizontal: 'medium' }}
        elevation="medium"
        width="30vw"
        height="50vh"
      >
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username</label>
          <br />
          <input name="username" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input name="password" />
          <br />
        </form>
      </Box>
    </ContentWrapper>
  );
};

export default Login;
