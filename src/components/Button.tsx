import React, { FC } from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: transparent;
    border: 0px;
    box-shadow: none;
    cursor: pointer;
    outline: none;
    padding: 14px 16px 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightGrey};
    &:active {
        color: ${({ theme }) => theme.colors.lightBlue};
    }
`;

const Button: FC = () => {
    return (
            <ButtonStyled data-testid="submit-button">
                Submit
            </ButtonStyled>
    );
};
export default React.memo(Button);