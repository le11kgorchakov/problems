const finalGrade = (exam, projects) => {
    return exam > 90 || projects > 10
      ? 100
      : exam > 75 && exam < 90 && projects >= 5
      ? 90
      : exam > 50 && exam < 75 && projects >= 2
      ? 75
      : 0;
    // if (exam > 90 || projects > 10){
    //   return 100;
    // }
    // if (exam > 75 && exam < 90 && projects >=  5){
    //     return 90
    // }
    // if (exam > 50 && exam < 75 && projects >=  2){
    //     return 75
    // }
    // else{
    //     return 0
    // }
  };
  
  console.log(finalGrade(100, 12));
  console.log(finalGrade(99, 0));
  console.log(finalGrade(10, 15));
  console.log(finalGrade(85, 5));
  console.log(finalGrade(55, 3));
  console.log(finalGrade(55, 0));
  console.log(finalGrade(20, 2));
  