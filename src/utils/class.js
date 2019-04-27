import styled from 'styled-components';
import {rem} from './helpers';

export const Wrapper = styled.section`
    position: relative;
`;

export const Container = styled.div`
    width: ${rem( 1170 )};
    margin: 0 auto;
    padding: 0px 15px;
`;

export const Center = styled.div`
    width: 100%;
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translateY( -53% ) translateX( -50% );
    -webkit-transform: translateY( -53% ) translateX( -50% );
    -moz-transform: translateY( -53% ) translateX( -50% );
    -ms-transform: translateY( -53% ) translateX( -50% );
    -o-transform: translateY( -53% ) translateX( -50% );
`;