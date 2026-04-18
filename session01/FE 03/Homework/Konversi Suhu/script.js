function konversiSuhu() {
  let inputAwal = document.getElementById("suhu1").value;
  let suhuAwal = document.getElementById("suhu-awal").value;
  let inputAkhir = document.getElementById("suhu2").value;
  let konversi = document.getElementById("konversi").value;
  let log = document.getElementById("log");
  if (suhuAwal == "celcius") {
    if (konversi == "celcius") {
      inputAkhir = inputAwal;
    } else if (konversi == "fahrenheit") {
      inputAkhir = (inputAwal * 9) / 5 + 32;
    } else if (konversi == "kelvin") {
      inputAkhir = inputAwal + 273.15;
    } else if (konversi == "reamur") {
      inputAkhir = (inputAwal * 4) / 5;
    }
  } else if (suhuAwal == "fahrenheit") {
    if (konversi == "celcius") {
      inputAkhir = ((inputAwal - 32) * 5) / 9;
    } else if (konversi == "fahrenheit") {
      inputAkhir = inputAwal;
    } else if (konversi == "kelvin") {
      inputAkhir = ((inputAwal - 32) * 5) / 9 + 273.15;
    } else if (konversi == "reamur") {
      inputAkhir = ((inputAwal - 32) * 4) / 9;
    }
  } else if (suhuAwal == "kelvin") {
    if (konversi == "celcius") {
      inputAkhir = inputAwal - 273.15;
    } else if (konversi == "fahrenheit") {
      inputAkhir = ((inputAwal - 273.15) * 9) / 5 + 32;
    } else if (konversi == "kelvin") {
      inputAkhir = inputAwal;
    } else if (konversi == "reamur") {
      inputAkhir = ((inputAwal - 273.15) * 4) / 5;
    }
  } else if (suhuAwal == "reamur") {
    if (konversi == "celcius") {
      inputAkhir = (inputAwal * 5) / 4;
    } else if (konversi == "fahrenheit") {
      inputAkhir = (inputAwal * 9) / 4 + 32;
    } else if (konversi == "kelvin") {
      inputAkhir = (inputAwal * 5) / 4 + 273.15;
    } else if (konversi == "reamur") {
      inputAkhir = inputAwal;
    }
  }
  document.getElementById("suhu2").value = Number(inputAkhir.toFixed(2));
}
