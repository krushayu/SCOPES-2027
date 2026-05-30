var fs = require('fs');
var c = fs.readFileSync('src/Components/Navbar.js', 'utf8');

var start = c.indexOf('<div className="info-item">\r\n                    <span className="info-icon">\uD83D\uDCCD</span>');
var end = c.indexOf('</div>', c.indexOf('4th - 6th February 2027')) + 6;

console.log('start=' + start + ' end=' + end);
console.log(c.slice(start, end));

var newBlock = '<div className="conference-info-details">\r\n                    <div className="info-item">\r\n                      <span className="info-icon">\uD83D\uDCCD</span>\r\n                      <span className="info-text">Centurion University of Technology and Management, Paralakhemundi, Odisha</span>\r\n                    </div>\r\n                    <div className="info-item">\r\n                      <span className="info-icon">\uD83D\uDCC5</span>\r\n                      <span className="info-text">4th - 6th February 2027</span>\r\n                    </div>\r\n                  </div>';

var result = c.slice(0, start) + newBlock + c.slice(end);
fs.writeFileSync('src/Components/Navbar.js', result, 'utf8');
console.log('Done');
