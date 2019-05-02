
/*
* PX to REM 
* Usage: rem( 16 );
*/
export const rem = ( px ) => `${px / 16}rem`;

/*
* Sort array random
* Usage: shuffle( array );
*/
export const shuffle = ( array ) => array.sort( () => Math.random() - 0.5 );