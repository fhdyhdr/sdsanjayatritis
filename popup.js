


(function(){
    'use strict';

    var $mainButton = $(".main-button"),
        $closeButton = $(".close-button"),
        $buttonWrapper = $(".button-wrapper"),
        $ripple = $(".ripple"),
        $layer = $(".layered-content"),
        $navPage = $(".nav--produk"),
        $navbarNav = $("#navbarNav"), // Elemen collapse navbar
        $navbarToggler = $(".navbar-toggler"); // Tombol navbar toggler

    const $body = $("body");
    const scrollClass = "scroll";

    // Fungsi yang sama seperti klik pada .main-button
    function triggerMainButtonAction() {
        // Menonaktifkan scroll di halaman asli dan menyembunyikan scrollbar
        $("body").css("overflow", "hidden");
        $("body::-webkit-scrollbar").css("display", "none");

       
            $buttonWrapper.addClass("clicked").delay(800).queue(function(next){
                $layer.addClass("active");
                next();
            });
 

        if (window.innerWidth > 576) {
            $body.addClass(scrollClass);
        }
    }

    // Ketika tombol utama diklik
    $mainButton.on("click", function(){
        triggerMainButtonAction();
    });

    // Ketika link Produk diklik, trigger aksi yang sama seperti main button
    $navPage.on("click", function(event){
        event.preventDefault(); // Mencegah halaman meloncat ke #process
        triggerMainButtonAction(); // Menjalankan aksi yang sama

        // Menutup navbar
        if ($navbarNav.hasClass("show")) {
            $navbarToggler.click(); // Menyimulasikan klik untuk menutup navbar
        }
    });

    // Ketika tombol close diklik
    $closeButton.on("click", function(){
        // Mengaktifkan kembali scroll di halaman asli dan menampilkan scrollbar
        $("body").css("overflow", "auto");

        // Menghapus gaya untuk menyembunyikan scrollbar
        $("body::-webkit-scrollbar").css("display", "block");

        $layer.removeClass("active");
        $buttonWrapper.removeClass("clicked");
    });
})();
