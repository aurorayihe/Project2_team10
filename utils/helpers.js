module.exports = {
    get_icon: () => {
        // TODO HERE!!!!
        const score = Math.random();
        if (score < 40) {
            return '<img src="/public/images/angrydog.jpg">';
        } else if (score > 80) {
            return '<img src="/public/images/happydog.jpg">';
        } else {
            return '<img src="/public/images/okdog.jpg">'
        }
    },
};
