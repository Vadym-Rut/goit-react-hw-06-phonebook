import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  outline: 2px solid gray;
  border-radius: 8px;
  padding: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    margin-top: 6px;
  }

  div {
    color: #df0707;
  }

  button {
    width: 120px;
    background-color: #5ca8f4;
    border-radius: 5px;
    height: 20px;
  }

  button:hover {
    background-color: blue;
  }
`;
