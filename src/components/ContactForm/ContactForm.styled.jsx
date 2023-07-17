import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  padding: 12px;

  max-width: 100%;
  width: 600px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  max-width: 100%;
  width: 500px;

  color: #080842;
  font-size: 20px;
`;

export const Button = styled.button`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;

  border: 2px solid blue;
  border-radius: 5px;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;

export const Input = styled.input`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;

  border: 2px solid blue;
  border-radius: 5px;
  color: black;
  font-size: 14px;
`;
export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-left: 8px;
`;

export const LabelSpan = styled.span`
  color: black;
`;

export const FieldFormik = styled(Field)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  max-width: 100%;

  border: 0;
  outline: 0;
  border-radius: none;
  color: black;
  background-color: #f2f4f5;

  font-size: 12px;
  letter-spacing: 1.4px;
`;

export const ErrorMessage = styled(FormikError)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;

  max-width: 500px;
  color: #8c0606;
  background-color: transparent;
  backdrop-filter: blur(10.5px);
  border-radius: 8px;
`;
