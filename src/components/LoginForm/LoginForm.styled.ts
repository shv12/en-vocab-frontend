import styled from "@emotion/styled";
import { ErrorMessage } from "formik";

export const FormLabel = styled.label`
  margin-right: 1vw;
`;

export const FormError = styled(ErrorMessage)`
  color: red;
  margin-bottom: 1vh;
  font-size: 0.8em;
`;

