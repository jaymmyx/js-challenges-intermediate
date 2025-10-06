function analyzeCarMileage(cars) {
  const highestMileageCar = cars.reduce((highest, car) => {
    if (highest.mileage < car.mileage) {
      return car;
    } else {
      return highest;
    }
  }, cars[0]);

  const lowestMileageCar = cars.reduce((lowest, car) => {
    if (car.mileage < lowest.mileage) {
      return car;
    } else {
      return lowest;
    }
  }, cars[0]);

  const totalMileage = cars.reduce((total, car) => {
    return total + car.mileage;
  }, 0);

  const averageMileage = totalMileage / cars.length;

  const averageObj = {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar: highestMileageCar,
    lowestMileageCar: lowestMileageCar,
    totalMileage: parseFloat(totalMileage.toFixed(2)),
  };

  return averageObj;
}

module.exports = analyzeCarMileage;
