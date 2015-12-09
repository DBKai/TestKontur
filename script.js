var matrixARows = 3;
var matrixAColumns = 3;
var matrixBRows = 3;
var matrixBColumns = 3;
var currentMatrix = 'A';

function CreateMatrix(matrixName, rows, columns) {
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

function insertColumn(matrix, rows, columns) {
  var id = "matrix_cell" + matrix + rows + columns;
  var placeholder = matrix.toLowerCase() + rows + "." + columns;
  var disabled = matrix === 'C' ? "disabled" : "";

  return "<input type=\"text\" class=\"matrix_cell\" placeholder=\"" + placeholder + "\" size=\"16\" id=\"" + id + "\" value=\"\" autocomplete=\"off\"" + disabled + ">";
}

function insertRow(matrix, rows) {
  var id = "matrix_row" + matrix + rows;

  return "<div class=\"matrix_row\" id=\"" + id + "\">";
}

function Multiplication_Click(control) {
  if (control === 'matrix') {
    document.getElementById('error').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'none';
  }
}

function AddRow() {
  var currentRows = currentMatrix === 'A' ? matrixARows : matrixBRows;
  var currentColumns = currentMatrix === 'A' ? matrixAColumns : matrixBColumns;
  currentRows++;
  var matrix_row =  currentMatrix === 'A' ? 'matrix_rowA' : 'matrix_rowB';
  var id = matrix_row + currentRows;
  var row = document.createElement('div');
  row.className = 'matrix_row';
  row.id = id;
  row.innerHTML = getMoreColumns(currentRows, currentColumns);
  var table = document.getElementById(matrix_row + (currentRows - 1));
  var cont = table.parentNode;
  cont.appendChild(row); // тогда добавляем в конец родительского элемента
  if (currentMatrix === 'A') {
    matrixARows++;
  } else {
    matrixBRows++;
  }
  console.log("Add Row Matrix" + currentMatrix);
}

function AddColumn() {
  var currentRows = currentMatrix === 'A' ? matrixARows : matrixBRows;
  var currentColumns = currentMatrix === 'A' ? matrixAColumns : matrixBColumns;
  currentColumns++;
  var column = document.createElement('input');
  column.type = 'text';
  column.className = 'matrix_cell';
  column.placeholder = '';
  column.size = '16';
  column.id = '';
  column.value = '';
  column.autocomplete = 'off';
  column.disabled = currentMatrix === 'C' ? "disabled" : "";
  for (var i = 1; i <= currentRows; i++) {

  }
  var table = document.getElementById('matrix_cell' + currentMatrix + i + (currentColumns - 1));
  console.log("Add Column Matrix" + currentMatrix);
}

function RemoveRow() {
  console.log("Remove Row Matrix" + currentMatrix);
}

function RemoveColumn() {
  console.log("Remove Column Matrix" + currentMatrix);
}

function getMoreColumns(rows, columns) {
  var htmlString = "";
  for (var i = 1; i <= columns; i++) {
    htmlString += insertColumn(currentMatrix, rows, i);
  }
  return htmlString;
}

function getMoreRows() {
  var htmlString = "";

  return htmlString;
}

function changeMatrix(obj) {
  currentMatrix = obj.value[1];
}