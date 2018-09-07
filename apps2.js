new Vue({
  el: "#app",
  data: {
    isi: "",
    isi2: "",
    keterangan: "",
    tampil: false
  },
  watch: {
    isi2: "tulis"
  },
  methods: {
    tulis: function() {
      if (this.isi2 == this.isi) {
        this.keterangan =
          '<i class="text-success"> Password Sama, Silahkan dilanjutkan</i>';
        this.tampil = true;
      } else {
        this.keterangan =
          '<i class="text-success"> Password Tidak Sama, Silahkan Coba Lagi</i>';
        this.tampil = false;
      }
    }
  }
});
