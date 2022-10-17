module.exports = {

    get_score: () => {
        if (score > 40) {
            return `<figure class="image is-64x64">
            <img src="/public/images/angrydog.jpg">
          </figure>`
        } else if (score > 70) {
            return `<figure class="image is-64x64">
                    <img src="/public/images/okdog.jpg">
                  </figure>`
        } else {
            return `<figure class="image is-64x64">
            <img src="/public/images/happydog.jpg">
          </figure>`
        }
    },
};