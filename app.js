new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    name: 'Oleksandr Malakhov',
    url: 'https://novelslist.com',
    classes: ["one", "two"]
  },
  methods: {
    greet(time) {
      return `Hello and good ${time}, ${this.name}. Lets rocks!`
    }
  }
})