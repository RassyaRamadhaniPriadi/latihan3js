function analyzePerson(name, age, residence, savings) {
    if (age > 40 && ["Nevada", "New York", "Havana"].includes(residence) && savings > 10000000) {
      return `${name} kemungkinan adalah seorang anggota mafia dengan pangkat Don.`;
    } else if (age >= 25 && age <= 40 && ["New Jersey", "Manhattan", "Nevada"].includes(residence) && savings >= 1000000 && savings <= 2000000) {
      return `${name} kemungkinan adalah seorang anggota mafia dengan pangkat Underboss.`;
    } else if (age >= 18 && age <= 24 && ["California", "Detroit", "Boston"].includes(residence) && savings < 1000000) {
      return `${name} kemungkinan adalah seorang anggota mafia dengan pangkat Capo.`;
    } else {
      return `${name} tidak mencurigakan.`;
    }
  }
  
  console.log(analyzePerson("Vito Corleone", 45, "New York", 15000000));
  console.log(analyzePerson("Sonny Corleone", 30, "New Jersey", 1500000));
  console.log(analyzePerson("Michael Corleone", 22, "California", 500000));
  console.log(analyzePerson("Kay Adams", 25, "New Hampshire", 100000));