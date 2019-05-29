new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    name: 'Oleksandr Malakhov',
    url: 'https://novelslist.com',
    classes: ["one", "two"],
    wage: 10,
    coords: { x: 0, y: 0},
    jeff: "Jeff"
  },
  methods: {
    greet(time) {
      return `Hello and good ${time}, ${this.name}. Lets rocks!`
    },
    changeWage(amount) {
      this.wage += amount;
    },
    logEvent(e) {
      console.log(e)
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    },
    updateName(e) {
      //console.log(e.target.value)
      this.jeff = e.target.value;
    },
    logMessage() {
      console.log("hello console window")
    }
  }
})