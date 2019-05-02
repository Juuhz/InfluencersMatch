import styled from 'styled-components';
import { YELLOW } from '../../utils/variables';

export const BoxInfluencers = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    margin-top: 90px;
`;

export const Influence = styled.div`
    position: relative;
    cursor: pointer;
    width: 21%;
    margin-bottom: 50px;

    &:hover{
        opacity: 0.6;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
`;

export const Thumbnial = styled.img`
    width: 100%;
    display: block;
`;

export const Infos = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    background: rgba( 0, 0, 0, 0.5 );
    color: #FFF;
    z-index: 2;
    width: 100%;
    padding: 10px 12px;
`;

export const Category = styled.div`
    color: ${YELLOW};
    font-size: 11px;
    position: absolute;
    top: 0px;
    left: 0px;
    background: rgba( 0, 0, 0, 0.5 );
    padding: 5px 7px;
`;

export const Name = styled.h2`
    font-size: 15px;
    font-weight: 400;
`;