require([WEB.require.config], function(config) {
    require.config(config);
    require(['domReady', 'bootstrap', 'director'], function(domReady) {
        domReady(function() {
            var router = new Router();
            router.on('/hello', function() {
                require(['views/demo/routes/hello/script'], function(module) {
                    module();
                });
            });
            router.on('/user/:user', function(user) {
                require(['views/demo/routes/user/script'], function(module) {
                    module(user);
                });
            });
            router.init();
        });
    })
});