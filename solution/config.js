require([], function() {
    require.config({
        paths: {
            'css': 'https://cdn.bootcss.com/require-css/0.1.10/css.min',
            'text': 'https://cdn.bootcss.com/require-text/2.0.12/text.min.js',
            'jquery': 'https://cdn.bootcss.com/jquery/3.4.1/jquery.slim.min',
            'bootstrap': 'https://cdn.bootcss.com/twitter-bootstrap/4.4.1/js/bootstrap.bundle.min',
            'ejs': 'https://npmcdn.com/ejs@3.0.1/ejs.min',
            'director': 'https://cdn.bootcss.com/Director/1.2.8/director.min',
        },
        shim: {
            'bootstrap': {
                deps: [
                    'jquery',
                    'css!https://cdn.bootcss.com/twitter-bootstrap/4.4.1/css/bootstrap.min.css',
                    'css!https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css',
                ]
            }
        }
    })
});