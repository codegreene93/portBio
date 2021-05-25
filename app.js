
const header = new Vue ({
    el: '#header',
    data: {
        introduction: `Hello, my name is Amy and I'm a Web Developer`,
        image: {
            src: 'https://images.unsplash.com/photo-1531040153975-38c7b2ceb3d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
            alt: 'A very good boy',
            image: false
        },
        description: 'I am presently trying to learn vueJS and how it operates. This is my first front end frame work',
        showDetails: false,
    },
    methods: {
        toggle: function () {
            this.showDetails = !this.showDetails;
        }
    }

})