// Code your solution in this file!
  const returnFirstTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = (multiplier) => {
    return (fare) => {
      return fare * multiplier;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = (arrayOfDrivers, callback) => {
    return callback(arrayOfDrivers);
  };
  
 