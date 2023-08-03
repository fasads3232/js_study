function parseCount (value){
    const a = Number.parseInt(value,10);
    if(isNaN(a)){
        const error = new Error('Is not valid value!');
        throw error
    }
    return a
}

function validateCount(value){
    try{
        if(isNaN != parseCount(value)) return value
    }
    catch (error){
        parseCount(value)
    }
}

console.log(validateCount('a123asd'))