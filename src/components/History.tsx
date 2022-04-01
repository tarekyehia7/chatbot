import React, { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    flex-grow: 1;
    overflow: auto;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
`;
  
export const History: FC = (props) => {
    const historyRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (historyRef && historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [props.children]);

    return (
        <HistoryStyled ref={historyRef}>
            {props.children}
        </HistoryStyled>
    );
};
