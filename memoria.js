function createBoard(numFilas,numCol){
    let filas = []
    for(let i = 0; i<numFilas; i++){
        let casillas=[]

        //crear casillas
        for(let j= 0;j<numCol;j++){
            casillas.push(0)
        }

        filas.push(casillas)
    }
    return filas
}

function printBoard(board){
    for(let fila of board){
        let filaStr = " "
        for(let casilla of fila){
            filaStr = filaStr + casilla +" "
        }
        console.log(filaStr)
    }
}
function setvalue(board, fila, col, valor){
    board[fila][col]=valor

}

//function getvalue(board,fila,col){
const getvalue =(board,row,col)=>{
    return board[fila][col]
}

let board = createBoard(6,4)
printBoard(board)
setvalue(board, 1, 1, 7)
printBoard(board)
setvalue(board, 5, 3, 7)
printBoard(board)
console.log(getvalue(board, 5,3))
//  console.log(board[1])