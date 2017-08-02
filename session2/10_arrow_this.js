const randomWinner = function (drivers) {
    const winner = Math.floor(Math.random() * (0 - drivers.length) + drivers.length);
    return drivers[winner];
};

const F1Race = {
    drivers: [
        'Alonso',
        'Vettel',
        'Button',
        'Massa'
    ],

    // init: function() {
    //     console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
    //     setTimeout((function() {
    //         console.log('this es F1Race?', this === F1Race);
    //         console.log('El ganador es', randomWinner(this.drivers));
    //     }), 1000);
    //     // }).bind(this), 1000);
    // }
};

// F1Race.init();

//// If we redefine the init function including an arrow:

F1Race.init = function () {
    console.log('Los siguientes pilotos van a comenzar la carrera:', this.drivers);
    setTimeout(() => {
        //Arrow function no crea un nuevo contexto
        console.log('this es F1Race?', this === F1Race);
        console.log('El ganador es', randomWinner(this.drivers))
    }, 1000);
};

F1Race.init();
