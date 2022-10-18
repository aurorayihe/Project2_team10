module.exports = {
    get_icon: (score) => {
        // TODO HERE!!!!
        if (score < 40) {
            return '<img src="/public/images/angrydog.jpg">';
        } else if (score > 80) {
            return '<img src="/public/images/happydog.jpg">';
        } else {
            return '<img src="/public/images/okdog.jpg">'
        }
    }
}
