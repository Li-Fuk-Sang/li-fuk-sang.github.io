export function ParseString(x){
    let i = 0; 
    let line = 0; 
    let data = [];
    let key = 0;

    while (i < x.length) {
        //Enter here every newline
        
        let transactionName = '';
        let currentObject = {
            transactionName: "",
            amount: "",
            personPaid: "",
            key: undefined, 
        }

        let expecting = "amount";

        while (x[i] !== '\n') {
            let char = x[i];

            //Encountered number, where i is the beginning index of the number
            if (is_number(char)) {
                //Go forward to check whether it is a "price"
                let amountResult = is_amount(x, i);
                if (amountResult !== false) {
                    //Amount identified TODO
                    //Not expecting amount: 
                    if (expecting !== "amount") {
                        alert("Line " + line + ": Expected '" + expecting + "' While received amount");
                        return;
                    }
                    
                    currentObject.amount = parseFloat(amountResult);
                    i += amountResult.length;
                    expecting = "player";
                    continue;
                }
            }
            //Encountered a player's name
            if (char === "(") {
                let playerResult = is_playerName(x, i);
                if (playerResult === false) {
                    //Throw error;
                    console.log("PLAYER ERROR!")
                    return;
                }
                else {
                    //Player identified TODO
                    if (expecting !== "player") {
                        alert("Line " + line + ": Expected '" + expecting + "' While received name of person who paid");
                        return;
                    }
                    
                    //TODO
                    currentObject.personPaid = playerResult; 
                    i += (playerResult.length + 2);
                    expecting = "newline";
                    continue;
                }
            }
            //Assumed to be transaction name:
            if (expecting === "amount") {
                transactionName += char;
            }

            i++;
        }
        //Encountered newline symbol
        line++; 
        
        currentObject.transactionName = transactionName; 
        currentObject.key = key; 
        key++;

        data.push(currentObject);
        
        i++;
    }
    console.log(data);
    return data;

    // while(i < x.length){

    //     let char = x[i];

    //     //React end of line, push the newly generated object into the array
    //     if(char === "\n"){
    //         line++; 
    //         expecting = "amount";
    //         console.log("Identified Transaction: " + transactionName);
    //         transactionName = '';
    //         i++; 
    //         continue;
    //     }
    //     //Encountered number, where i is the beginning index of the number
    //     if(is_number(char)){
    //         //Go forward to check whether it is a "price"
    //         let amountResult = is_amount(x, i);
    //         if(amountResult !== false){
    //             //Amount identified TODO
    //             if(expecting != "amount"){
    //                 alert("Line " + line + ": Expected '" + expecting + "' While received amount");
    //                 return;
    //             }
    //             console.log("Identified Amount: " + amountResult);
    //             i += amountResult.length;
    //             expecting = "player";
    //             continue;
    //         }
    //     }
    //     //Encountered a player's name
    //     if(char === "("){
    //         let playerResult = is_playerName(x, i);
    //         if(playerResult === false){
    //             //Throw error;
    //             console.log("PLAYER ERROR!")
    //             return;
    //         }
    //         else{
    //             //Player identified TODO
    //             if(expecting != "player"){
    //                 alert("Line " + line + ": Expected '" + expecting + "' While received name of person who paid");
    //                 return;
    //             }
    //             console.log("Identified Player: " + playerResult);
    //             i += (playerResult.length + 2);
    //             expecting = "newline";
    //             continue;
    //         }
    //     }
    //     //Assumed to be transaction name:
    //     if(expecting === "amount"){
    //         transactionName += char; 
    //     }

    //     i++; 

    // }
}

export function is_number(i){
    return(i === '0' || i === '1' || i === '2' || i === '3' || i === '4' || i === '5' || i === '6' || i === '7' || i === '8' || i === '9' || i === ".");
}

// APPLE   341  (Tommy)
/**
 * Check whether the char in the given position is a player name
 * 
 * @param {String[]} x Entire string to be checked
 * @param {Number} i Position of the first player character: Opening bracket
 * @returns Player String is a player is identified, false if otherwise
 */
export function is_playerName(x, i){
    if(x[i] !== "("){
        return false; 
    }
    i++;
    let playerName = "";
    while(x[i] !== undefined){
        let char = x[i];
        if(char === " "){
            i++;
        }
        else if(char === ")"){
            //PlayerName is terminated with )
            return playerName;
        }
        else if(char === "("){
            //Duplicated (
            return false;
        }
        else if(char === '\n'){
            //Unexpected newline
            return false; 
        }
        else{
            //Got proper character:
            playerName+= char; 
            i++; 
        }
    }
    return false; 
    //x[i] encountered to be undefined
}

/**
 * Check whether the number is the position given is a ledger amount
 * 
 * @param {String[]} x Entire string to be checked
 * @param {Number} i Position of the first number character
 * @returns Whether the number at the given position is a ledger amount: False/Amount
 */
export function is_amount(x, i){
    //The first character must be a number
    if(!is_number(x[i])){
        return false;
    }
    let amount = ''; 
    while(x[i] !== undefined){
        let char = x[i];
        if(!is_number(char)){
            //If x[i] is not a number
            if(char === ' '){
                //If char is spacebar:
                //Go forward until encounter a "("
                let j = i + 1; 
                while(true){
                    if(x[j] === ' '){
                        j++;
                        continue;
                    }
                    else if(x[j] === "("){
                        //Spacebar until (
                        return amount; 
                    }
                    else if(is_number(x[j])){
                        //Not a number: {Num}{Space*N}{Num}
                        return false;
                    }
                    else{
                        //Not a number: {Num}{Space*N}{Letter/Undef}
                        return false;
                    }
                }
                
            }
            else{
                if(char === "("){
                    //Spacebar until (
                    return amount; 
                }
                else{
                    return false;
                }
            }
        }
        else{
            //The current char is a number
            //Append the current char to the amount
            amount += char; 
            i++; 
        }
    }
    //Reached Undefined
    return false;
}