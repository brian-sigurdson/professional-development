let row1 = [1, 2, 3];
let row2 = [4, 5, 6];
let row3 = [7, 8, 9, 10, 11, 12];

let matrix = [row1, row2, row3];

for (let row = 0; row < matrix.length; row++) {
    let tmp_row = matrix[row];
    let tmp_val = "";

    for (let col = 0; col < tmp_row.length; col++) {
        tmp_val += tmp_row[col] + " ";
    }
    console.log(tmp_val);
}