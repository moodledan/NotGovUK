import * as React from 'react';
import FormGroup from './form-group';
import Hint from './hint';
import ErrorMessage from './error-message';

const FormGroupWithFieldset: React.SFC<any> = props => (
  <FormGroup id={props.id} className={props.className}>
    <fieldset className={props.fieldsetClassName}>
        <legend>{props.legend}</legend>
        {props.hint && <Hint id={`${props.id}-hint`}>{props.hint}</Hint>}
        {props.error && <ErrorMessage id={`${props.id}-error`}>{props.error}</ErrorMessage>}
        {props.children}
    </fieldset>
  </FormGroup>
);

export default FormGroupWithFieldset;
