function evaluateCandidate(codingScore, interviewGrade) {
    
    let codingResult;
    if (codingScore > 80) {
      codingResult = "LOLOS";
    } else if (codingScore >= 60 && codingScore <= 80) {
      codingResult = "DIPERTIMBANGKAN";
    } else {
      codingResult = "GAGAL";
    }
  
    let interviewResult = (interviewGrade === "A" || interviewGrade === "B") ? "LOLOS" : "GAGAL";
  
    if ((codingResult === "LOLOS" || codingResult === "DIPERTIMBANGKAN") && interviewResult === "LOLOS") {
      return "Selamat Kamu Berhasil Menjadi Calon Programmer";
    } else {
      return "Maaf Kamu Belum Berhasil Menjadi Calon Programmer";
    }
  }
  
  console.log(evaluateCandidate(85, "A")); 
  console.log(evaluateCandidate(75, "B")); 
  console.log(evaluateCandidate(90, "C")); 
  console.log(evaluateCandidate(55, "A")); 