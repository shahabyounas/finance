
// Declare commonly used functions here

const SINGLE__SPACE = ' ';

export const animate =  (props) => {
    const base = 'animate__animated'
    const prefix = `${SINGLE__SPACE}animate__`;
    return [base, ...props.split(SINGLE__SPACE)].join(prefix);
}