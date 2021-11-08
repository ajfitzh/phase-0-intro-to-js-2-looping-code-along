const messages = [];

function writeCards(names,eventName){
    for(let i=0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
 return messages;
}

function countDown(int){
    let i=10;
    while(i>=0) {
        console.log(i);
        i--;
    }
    return int;
}


