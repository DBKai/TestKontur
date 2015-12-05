var matrixARows = 3;
var matrixAColumns = 3;
var matrixBRows = 3;
var matrixBColumns = 3;

function CreateMatrix(matrixName, rows , columns) {
  for (var i = 1; i <= rows; i++) {
    document.write(insertRow(matrixName, i));
    for (var j = 1; j <= columns; j++) {
      document.write(insertColumn(matrixName, i, j));
    }
    document.write("</div>");
  }
}

function ClearMatrix() {
  var matrix = null;
  var rows = 0;
  var columns = 0;

  for (var m = 1; m <= 2; m++) {
    matrix = m === 1 ? 'A' : 'B';
    rows = m === 1 ? matrixARows : matrixBRows;
    columns = m === 1 ? matrixAColumns : matrixBColumns;

    for (var i = 1; i <= rows; i++) {
      for (var j = 1; j <= columns; j++) {

        var id = "matrix_cell" + matrix + i + j;

        document.getElementById(id).value = null;
      }
    }
  }
}

function insertColumn(matrix, x, y) {
  var id = "matrix_cell" + matrix + x + y;
  var placeholder = matrix.toLowerCase() + x + "." + y;
  var disabled = matrix === 'C' ? "disabled" : "";

  return "<input type=\"text\" class=\"matrix_cell\" placeholder=\"" + placeholder + "\" size=\"16\" id=\"" + id + "\" value=\"\" autocomplete=\"off\"" + disabled + ">";
}

function insertRow(matrix, x) {
  var id = "matrix_row" + matrix + x;

  return "<div class=\"matrix_row\" id=\"" + id + "\">";
}

function Multiplication_Click(control) {
  if (control === 'matrix') {
    document.getElementById('error').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'none';
  }
}

function addRow(matrix) {


}

