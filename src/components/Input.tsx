import React, { FC, FormEventHandler, useMemo, useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

interface InputProps {
  onSubmit?: (message: string) => void;
}

const FormStyled = styled.form`
    display: flex;
    align-items: stretch;
    border-top-style: solid;
    border-top-color: rgb(238, 238, 238);
`;

const InputStyled = styled.input`
    flex-grow: 1;
    margin: 5px;
    border: transparent;
    padding-left: 0.4rem;
    &:focus {
        outline: none;
    }
`;

const Input: FC<InputProps> = (props) => {
  const [message, setMessage] = useState('');

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (message !== '') {
      setMessage('');
      props.onSubmit?.(message);
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit} data-testid="form-submit">
        <InputStyled
        
            placeholder="type here"
            autoFocus
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        <Button />
    </FormStyled>
  );
};
export default React.memo(Input);