import styled from 'styled-components';
import { ORANGE } from '../../utils/variables';

export const Title = styled.div`
    position: relative;
    z-index: 2;
    font-size: 18px;
    margin-top: 70px;
    display: inline-block;
`;

export const BoxOptions = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 20px;
`;

export const Option = styled.li`
    border-radius: 4px;
    border: 1px solid #222;
    padding: 10px;
    cursor: pointer;

    &.active{
        border-color: ${ORANGE};
        color: ${ORANGE};
    }

    &:hover{
        opacity: 0.4;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
`;