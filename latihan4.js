function calculateCaloriesBurned(activities) {
    const calorieRates = {
      'lari': 60 / 5, 
      'push-up': 200 / 30, 
      'plank': 5 / 1  
    };
  
    let totalCalories = 0;
  
    for (let activity of activities) {
      const { type, duration } = activity;
      if (calorieRates.hasOwnProperty(type)) {
        const caloriesBurned = calorieRates[type] * duration;
        totalCalories += caloriesBurned;
        console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} selama ${duration} menit membakar ${caloriesBurned.toFixed(2)} kalori`);
      } else {
        console.log(`Aktivitas '${type}' tidak dikenal`);
      }
    }
  
    return totalCalories;
  }
  
  
  const workoutSession = [
    { type: 'lari', duration: 15 },
    { type: 'push-up', duration: 20 },
    { type: 'plank', duration: 5 },
    { type: 'lari', duration: 10 }
  ];
  
  const totalCaloriesBurned = calculateCaloriesBurned(workoutSession);
  console.log(`Total kalori yang terbakar: ${totalCaloriesBurned.toFixed(2)}`);