define(function(require) {
    return {
        template: require('text!/views/demo/components/button-counter/template.html'),
        data: function () {
            return {
                count: 0
            }
        },
    }
});
