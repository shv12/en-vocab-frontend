import styled from "@emotion/styled";
import { ErrorMessage } from "formik";

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 40vw;
  row-gap: 2vh;
`;

export const FormLabel = styled.label`
  display: block;
  justify-self: right;
  margin-right: 1rem;
`;

export const FormError = styled(ErrorMessage)`
  justify-self: center;
  color: red;
  margin-bottom: 1vh;
  font-size: 0.8em;
`;

