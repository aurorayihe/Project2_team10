module.exports = {
    get_icon: () => {
<<<<<<< HEAD
=======
        const score = Math.max(100);
>>>>>>> d701d328cfe52aeb2c4f5be8e4f96268dc0e34d6
        // TODO HERE!!!!
        const score = Math.random();
        if (score < 40) {
            return '<img src="/public/images/angrydog.jpg">';
        } else if (score > 80) {
            return '<img src="/public/images/happydog.jpg">';
        } else {
            return '<img src="/public/images/okdog.jpg">';
        }
    },
<<<<<<< HEAD
};
=======
};
>>>>>>> d701d328cfe52aeb2c4f5be8e4f96268dc0e34d6
