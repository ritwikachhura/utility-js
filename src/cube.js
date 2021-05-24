
const cube = (base,a=3) => {
    if (a != 0)
        return (base * cube(base, a - 1));
    else
        return 1;   
}
module.exports = cube;

