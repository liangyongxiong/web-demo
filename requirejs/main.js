require(['config'], function() {
    require(['bootstrap', 'ejs'], function() {
        var str = "Hello <%= include('file', {person: 'John'}); %>";
        var fn = ejs.compile(str, {client: true});
        fn({}, null, function(path, d) {
            console.log(path);
            console.log(d);
        });
    })
});