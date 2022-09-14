import styled from "styled-components";
import {Link as LinkSc} from 'react-scroll';

export const Button = styled(LinkSc)`
    border-radius: 10px;
    background: #0D47A1;
    white-space: nowrap;
    padding: 14px;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    text-transform:uppercase;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: #1565C0;
    }

    @media screen and (max-width: 480px) {
        font-size: 10px;
        padding: 8px;
    }
`