const getChessField = (amount: number = 8) => {
    let row: string = '';

    for (let i = 1; i <= amount; i++) {
        for (let j = 1; j <= amount; j++) {
            if (i % 2 === j % 2) {
                row += '  ';
            } else {
                row += '██';
            }
        }
        row +="\n";
    }
    console.log(row);
};

getChessField();