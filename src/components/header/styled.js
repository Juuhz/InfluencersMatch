import styled from 'styled-components';
import { Wrapper } from '../../utils/class';

export const Section = styled(Wrapper)`
    width: 100%;
    text-align: center;
    height: 420px;
    background: url('/static/images/header-bg.png') no-repeat bottom center;
    background-size: cover;
`;

export const Title = styled.h1`
    color: #FFF;
    position: relative;
    z-index: 2;
    font-size: 55px;
    font-weight: 100;
    margin-top: 130px;
    display: inline-block;
`;