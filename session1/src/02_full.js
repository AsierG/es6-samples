var a = 'I am global';

function foo() {
    let b = 'I am local';
    console.log('Existe a en el alcance local?', !!a);
    console.log('Existe b en el alcance local?', !!b);

    if (true) {
        let c = 'Soy una variable de la condición if';
    }
    // console.log('Existe c en el fuera del if?', !!c);

    for (let d = 0; d < 10; d++) {
        // ...
    }

    console.log('Existe d fuera del for?', !!d);

}

foo();
// console.log('Existe a en el alcance global??', !!a);