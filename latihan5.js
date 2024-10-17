function calculateAdmissionFee(age, height) {
    if (age < 1) {
      return "Dilarang masuk";
    } else if (age < 3) {
      let fee = 30000;
      if (age >= 2 && height > 70) {
        fee += 10000;
      }
      return `Rp ${fee}`;
    } else if (age < 7) {
      let fee = 40000;
      if (age >= 4 && height > 120) {
        fee += 15000;
      }
      return `Rp ${fee}`;
    } else if (age < 10) {
      let fee = 50000;
      if (age >= 8 && height > 150) {
        fee += 20000;
      }
      return `Rp ${fee}`;
    } else {
      return "Rp 80000";
    }
  }
  

  console.log("Umur 0 tahun:", calculateAdmissionFee(0, 50));
  console.log("Umur 2 tahun, tinggi 65 cm:", calculateAdmissionFee(2, 65));
  console.log("Umur 2 tahun, tinggi 75 cm:", calculateAdmissionFee(2, 75));
  console.log("Umur 5 tahun, tinggi 110 cm:", calculateAdmissionFee(5, 110));
  console.log("Umur 5 tahun, tinggi 125 cm:", calculateAdmissionFee(5, 125));
  console.log("Umur 9 tahun, tinggi 145 cm:", calculateAdmissionFee(9, 145));
  console.log("Umur 9 tahun, tinggi 155 cm:", calculateAdmissionFee(9, 155));
  console.log("Umur 12 tahun, tinggi 160 cm:", calculateAdmissionFee(12, 160));