var matrixARows = 3;
var matrixACells = 3;
var matrixBRows = 3;
var matrixBCells = 3;
var matrixCRows = 3;
var matrixCCells = 3;

function insertCell(matrix, x, y) {
  var id = "matrix_cell" + matrix + x + y;
  var change = "rem_cell(1," + x + "," + y + ")";
  var placeholder = matrix.toLowerCase() + x + "." + y;
  var disabled = matrix === 'C'?"disabled":"";

  return "<input type=\"text\" class=\"matrix_cell\" placeholder=\"" + placeholder + "\" size=\"16\" id=\"" + id + "\" value=\"\" onchange=\"" + change + "\" autocomplete=\"off\"" + disabled + ">";
}

function insertRow(matrix, x) {
  var id = "matrix_row" + matrix + x;

  return "<div class=\"matrix_row\" id=\"" + id + "\">";
}
