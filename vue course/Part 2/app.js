new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue Ninja',
    name: 'Oleksandr Malakhov',
    url: 'https://novelslist.com',
    classes: ["one", "two"],
    wage: 10,
    coords: { x: 0, y: 0},
    jeff: "Jeff",
    showName: true,
    showAge: true,
    items: ["ga1", "ga2","ga3","ga4","ga5"],
    ninjas: [
      {name: 'Crystal', age: '25', belt: 'Black'},
      { name: 'Dave', age: '45', belt: 'Yellow' },
      { name: 'Shaun', age: '17', belt: 'Red' }
    ]
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
    },
    toggleName(){
      this.showName = !this.showName;
    },
    toggleAge() {
      this.showAge = !this.showAge;
    }
  }
})