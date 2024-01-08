const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {


    async introduction(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.daftarProduk"),
          f("menu.alamatKantor")
        ],
        f("intro"),
        f("template.menu")
      );
    }

    async product(request) {
      return this.reply("Ini produk digital saya, bisa dikunjungi di http://dewakoding.com")
    }

    async alamatKantor(request) {
      return this.reply("Alamat kantor kami ada di Jakarta")
    }

    async ppdb(request){
      return this.reply("Untuk Info Seputar PPDB, anda bisa mengunjungi situs <website_ppdb>")
    }

}