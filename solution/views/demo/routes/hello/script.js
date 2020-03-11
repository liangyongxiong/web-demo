define(function(require) {
    axios = require('axios');
    Vue = require('vue');
    Vuex = require('vuex');
    Vue.use(Vuex);

    VueRouter = require('vue-router');

    return function() {
        $('#main').html(require('text!/views/demo/routes/hello/template.html'));

        var store = new Vuex.Store({
            state: {
                answer: 'unknown',
            },
            mutations: {
                sync(state, answer) {
                    state.answer = answer;
                }
            }
        });

        var app1 = new Vue({
            el: '.hello-app-1',
            data: {
                seen: true,
                message: 'Hello World!',
                title: '页面加载于 ' + new Date().toLocaleString(),
                todos: [
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ],
                question: '',
                answer: '',
            },
            watch: {
                question: function (newQuestion, oldQuestion) {
                    this.answer = 'Waiting for you to stop typing...';
                    this.getAnswer();
                }
            },
            created: function() {
                this.answer = this.getAnswer();
            },
            methods: {
                reverseMessage: function () {
                    this.message = this.message.split('').reverse().join('')
                },
                getAnswer: function () {
                    if (this.question.indexOf('?') === -1) {
                        this.answer = 'Questions usually contain a question mark. ;-)';
                        return;
                    }
                    this.answer = 'Thinking...';
                    var vm = this;
                    axios.get('https://yesno.wtf/api')
                        .then(function(response) {
                            vm.answer = response.data.answer;
                            store.commit('sync', vm.answer);
                        }).catch(function(error) {
                            vm.answer = 'Error! Could not reach the API. ' + error;
                        });
                }
            }
        });

        var app2 = new Vue({
            el: '.hello-app-2',
            computed: {
                answer: function() {
                    return store.state.answer;
                }
            }
        });
    };
});