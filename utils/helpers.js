module.exports = {
    get_icon: () => {
        const score = Math.max(100);
        // TODO HERE!!!!
        if (score < 40) {
            return '<img src="/public/images/angrydog.jpg">';
        } else if (score > 80) {
            return '<img src="/public/images/happydog.jpg">';
        } else {
            return '<img src="/public/images/okdog.jpg">';
        }
    },
};