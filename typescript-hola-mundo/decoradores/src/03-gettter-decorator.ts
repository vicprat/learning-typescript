function Dec1(_constructor: Function){
    console.log('decorador 1');
    
}

function Dec2(_constructor: Function){
    console.log('decorador 2');
    
}

@Dec1
@Dec2
class User {}

export {}