define(function(require) {
    return {
        baseUrl: WEB.static.base,
        waitSeconds: 0,
        paths: {
            'domReady': 'https://cdn.bootcss.com/require-domReady/2.0.1/domReady.min',
            'css': 'https://cdn.bootcss.com/require-css/0.1.10/css.min',
            'text': 'https://cdn.bootcss.com/require-text/2.0.12/text.min',
            'jquery': 'https://cdn.bootcss.com/jquery/3.4.1/jquery.slim.min',
            'bootstrap': 'https://cdn.bootcss.com/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min',
            'ejs': 'https://npmcdn.com/ejs@3.0.1/ejs.min',
            'director': 'https://cdn.bootcss.com/Director/1.2.8/director.min',
            'axios': 'https://cdn.bootcss.com/axios/0.19.2/axios.min',
            'vue': 'https://cdn.bootcss.com/vue/2.6.11/vue.min',
            'vuex': 'https://cdn.bootcss.com/vuex/3.1.2/vuex.min',
            'vue-router': 'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min',
        },
        shim: {
            'bootstrap': {
                deps: [
                    'jquery',
                    'css!https://cdn.bootcss.com/twitter-bootstrap/4.4.1/css/bootstrap.min.css',
                    'css!https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css',
                ]
            }
        },
        config: {
            'text': {
                useXhr: function (url, protocol, hostname, port) {
                    // allow cross-domain requests
                    // remote server allows CORS
                    return true;
                },
            },
        },
    }
});