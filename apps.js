new Vue({
  el: "#app",
  data: {
    bilangan1: 1,
    bilangan2: 2
  },
  computed: {
    hasil: function() {
      return this.bilangan1 + this.bilangan2;
    }
  }
});

new Vue({
  el: "#app2",
  data: {
    bilangan3: 3,
    bilangan4: 4,
    hasil2: null
  },
  methods: {
    dihitung() {
      return (this.hasil2 = this.bilangan3 + this.bilangan4);
    }
  }
});

new Vue({
  el: "#app3",
  data: {
    isidata: "",
    keterangandata: ""
  },
  watch: {
    isidata: "ketik"
  },
  methods: {
    ketik: function() {
      this.keterangandata = this.isidata;
    }
  }
});
