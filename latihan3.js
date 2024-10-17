function checkPosition(jerseyNumber) {
    if (typeof jerseyNumber !== 'number' || jerseyNumber < 1 || jerseyNumber > 100) {
      return "Invalid jersey number. Please enter a number between 1 and 100.";
    }
  
    let positions = [];
  
    if (jerseyNumber % 2 === 0) {
      positions.push("target attacker");
    }
  
    if (jerseyNumber % 2 === 0 && jerseyNumber >= 50 && jerseyNumber <= 100) {
      positions.push("berhak dipilih menjadi capten team");
    }
  
    if (jerseyNumber % 2 !== 0) {
      positions.push("defender");
    }
  
    if (jerseyNumber % 2 !== 0 && jerseyNumber > 90) {
      positions.push("Playmaker");
    }
  
    if (jerseyNumber % 2 !== 0 && jerseyNumber % 3 === 0 && jerseyNumber % 5 === 0) {
      positions.push("keeper");
    }
  
    return positions.length > 0 
      ? `Jersey number ${jerseyNumber} can be used for: ${positions.join(', ')}`
      : `Jersey number ${jerseyNumber} doesn't match any specific position`;
  }
  
  console.log(checkPosition(10)); 
  console.log(checkPosition(60));  
  console.log(checkPosition(15));  
  console.log(checkPosition(91));  
  console.log(checkPosition(50));  
  console.log(checkPosition(7));   
  console.log(checkPosition(101)); 