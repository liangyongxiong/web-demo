require([WEB.require.config], function(config) {
    require.config(config);
    require(['domReady', 'bootstrap', 'director'], function(domReady) {
        domReady(function() {
            var router = Router();
            router.on('/hello', function() {
                require(['views/demo/routes/hello/app'], function(module) {
                    module();
                });
            });
            router.on('/user/:user', function(user) {
                require(['views/demo/routes/user/app'], function(module) {
                    module(user);
                });
            });
            router.init();
        });
    })
});