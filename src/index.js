module.exports = function toReadable (number) {
  
    let units = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    let tens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    let readable = [];

        if (number === 0) {
        return 'zero';
    }

     if (number >= 100) {
        readable.push(units[Math.floor(number / 100)] + " hundred");
    }

     if (number % 100 !== 0) {
      
        if (number % 100 < 20) readable.push(units[number % 100]);
        else {
            
            readable.push(tens[Math.floor((number % 100) / 10) - 2]);
        
            if (number % 10 !== 0) {
                readable.push(units[number % 10]);
            }
        }
    }
    return readable.join(" ");
}