var tanya = true;
while (tanya) {
  var p = prompt("pilih: batu, gunting, kertas");
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "batu";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "kertas";
  }
  var hasil = "";

  if (p == comp) {
    hasil = "Waduh seriii...";
  } else if (p == "gunting") {
    hasil = comp == "kertas" ? "hore kamu menang" : " yaaaa...kalah HAHAHAHA";
  } else if (p == "kertas") {
    hasil = comp == "gunting" ? "hore kamu menang" : "yaaaa... kalah HAHAHAHA";
  } else if (p == "batu") {
    hasil = comp == "gunting" ? "hore kamu menang" : " yaaaa...kalah HAHAHAHA";
  }
  alert("kamu memilih : " + p + " dan komputer memilih :" + comp + "\nMaka hasilnya :" + hasil);
  tanya = confirm("lagi gak ?");
}
alert("terimakasih sudah mampir di game gabut wkkwk");
