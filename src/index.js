const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    var decodedStr = '';
var strResult = '';
var a;

    for (var i=0; i<expr.length; i= i+10) {
      str = expr.slice(i, i+10);
      decodedStr = '';
      for (var j=0; j<10; j=j+2) {
        if (str[j] === '1' && str[j+1] === '0') {
          decodedStr = decodedStr + '.';
        } else if (str[j] === '1' && str[j+1] === '1') {
          decodedStr = decodedStr + '-';
        } 
      }
      if (decodedStr !== '') {
        a = MORSE_TABLE[decodedStr];
      } else {
        a = ' ';
      }
      strResult = strResult + a;
    }
    return strResult;
}

module.exports = {
    decode
}