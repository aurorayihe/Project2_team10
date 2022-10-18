
module.exports = {
    get_icon: (score) => {
        // const score = Math.max(100);
        // TODO HERE!!!!
console.log(score);
    //     if (score < 40) {
    //         return '<img src="/public/images/angrydog.jpg">';
            
    //     } else if (score > 80) {
    //         return '<img src="/public/images/happydog.jpg">';
    //     } else {
    //         return '<img src="/public/images/okdog.jpg">';
    //     }
    },
};

// Handlebars.registerHelper('each_upto', function(ary, max, options) {
//     if(!ary || ary.length == 0)
//         return options.inverse(this);

//     var result = [ ];
//     for(var i = 0; i < max && i < ary.length; ++i)
//         result.push(options.fn(ary[i]));
//     return result.join('');
// });

// module.exports = Handlebars;