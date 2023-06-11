<script>
    var phone_number = document.querySelector("#phone_number");
    phone_number.addEventListener("input", numara_degisti);
    function numara_degisti (e) {
        if (phone_number.value.length <= 0) {
            return;
        }
        var bosluklu_numara  = phone_number.value;
        var bosluksuz_numara = bosluklu_numara.replace(/[^\d]/g, "");
        if (bosluksuz_numara.length <= 0) {
            phone_number.value = "";
            return;
        }
        bosluksuz_numara = bosluksuz_numara.substring(0, 11);
        if (!bosluksuz_numara.startsWith("0")) {
            bosluksuz_numara = "0" + bosluksuz_numara;
        }
        var bosluksuz_uzunluk = bosluksuz_numara.length;
        var yeni_numara       = bosluksuz_numara;
        if (bosluksuz_uzunluk > 4) {
            var operator    = bosluksuz_numara.substring(0, 4);
            var yeni_numara = operator;
            var ilk_3       = bosluksuz_numara.substring(4, 7);
            yeni_numara     = yeni_numara + " " + ilk_3;
            if (bosluksuz_uzunluk > 7) {
                var orta_2  = bosluksuz_numara.substring(7, 9);
                yeni_numara = yeni_numara + " " + orta_2;
                if (bosluksuz_uzunluk > 9) {
                    var son_2   = bosluksuz_numara.substring(9, 11);
                    yeni_numara = yeni_numara + " " + son_2;
                }
            }
        }
        if (bosluklu_numara !== yeni_numara) {
            phone_number.value = yeni_numara;
        }
    }
</script>
