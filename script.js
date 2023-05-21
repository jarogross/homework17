    for (let i = 1990; i <= 2030; i++) {
        if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0) && i % 10===0) {
          console.log("PO" + i );
        } else {
            if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
                console.log('P' + i );
        }
        else{
            if (i===1995){
                console.log("N" + i )
            }

            else{
                if(i%10===0){
                    console.log("O" + i )
                }
                else{
                    console.log( i )
                }
            }
        }
      }
    




    }
