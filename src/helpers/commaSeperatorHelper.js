// hunction that will add commas to the number in the desired position
function commaSeperator(value) {
    const stringValue = value.toString();

    return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

module.exports = {
    commaSeperator
};
