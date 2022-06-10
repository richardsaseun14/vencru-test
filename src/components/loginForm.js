import classNames from 'classnames';
import React, { useState } from 'react';
import Button from './button';
import TextInput from './input';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

const LoginForm = (props) => {
  const { className } = props;
  const classes = classNames('text-slate-50', className);
  const [show, setShow] = useState(false);

  const togglePasswordVisibility = () => {
    setShow(!show);
  };
  return (
    <div className={classes}>
      <h5 className="text-2xl font-medium mb-6">
        Log into your Business Manager
      </h5>
      <TextInput
        label={'Email Address'}
        placeholder={'someone@email.com'}
        type={'email'}
      ></TextInput>

      <TextInput
        label={'Enter Your password'}
        placeholder={'Password'}
        type={show ? 'text' : 'password'}
        appendIcon={show ? regular('eye-slash') : regular('eye')}
        appendIconClick={togglePasswordVisibility}
      ></TextInput>
      <Button variant={'outlined'} block>
        SIGN IN
      </Button>
      <p className="font-light text-center my-6">
        Don't have an account? <span className="font-bold">Sign up</span>
      </p>
      <p className="text-center mb-6 font-bold">Forgot Password</p>
      <Button variant={'filled'} block className="font-normal text-slate-700">
        <img
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
          height="15"
          width="15"
          alt=""
          className="mr-2"
        />
        Login with Google
      </Button>
    </div>
  );
};

export default LoginForm;
