
module.exports = {
    get_icon: (score) => {
        // const score = Math.max(100);
        // TODO HERE!!!!
console.log(score);
        if (score < 50) {
            return `
            <div class='has-text-centered'>
            <figure class="image is-64x64 is-inline-block">
            <img src="/images/angrydog.jpg">
          </figure>
          </div>`;
            
        } else if (score > 50  && score < 80) {
            return `
            <div class='has-text-centered'>
            <figure class="image is-64x64 is-inline-block">
            <img src="/images/okdog.jpg">
          </figure>
          </div>`;
        } else {
            return`
            <div class='has-text-centered'>
            <figure class="image is-64x64 is-inline-block">
            <img src="/images/happydog.jpg">
          </figure>
          </div>`;
        }
    },
};

