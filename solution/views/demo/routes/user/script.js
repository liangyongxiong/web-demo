define(function(require) {
    Vue = require('vue');

    return function(user) {
        $('#main').html(require('text!/views/demo/routes/user/template.html'));

        var app1 = new Vue({
            el: '.user-app-1',
            data: {
                user: user,
                title: '页面加载于 ' + new Date().toLocaleString(),
            },
        });

        var app2 = new Vue({
            el: '.user-app-2',
            components: {
                'button-counter': require('views/demo/components/button-counter/script'),
            },
        });
    };
});
