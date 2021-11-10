function greet() {
  var day = new Date();
  var whatDay = day.getDay();
  var hour = day.getHours();

  if (hour < 6) {
    if (whatDay === 0) {
      $("#greeting").text("Good (early) morning; happy Sunday!");
    } else if (whatDay === 1) {
      $("#greeting").text("Good (early) morning; happy Monday!");
    } else if (whatDay === 2) {
      $("#greeting").text("Good (early) morning; happy Tuesday!");
    } else if (whatDay === 3) {
      $("#greeting").text("Good (early) morning; happy Wednesday!");
    } else if (whatDay === 4) {
      $("#greeting").text("Good (early) morning; happy Thursday!");
    } else if (whatDay === 5) {
      $("#greeting").text("Good (early) morning; happy Friday!");
    } else {
      $("#greeting").text("Good (early) morning; happy Saturday!");
    }
  } else if (hour < 12) {
    if (whatDay === 0) {
      $("#greeting").text("Good morning; happy Sunday!");
    } else if (whatDay === 1) {
      $("#greeting").text("Good morning; happy Monday!");
    } else if (whatDay === 2) {
      $("#greeting").text("Good morning; happy Tuesday!");
    } else if (whatDay === 3) {
      $("#greeting").text("Good morning; happy Wednesday!");
    } else if (whatDay === 4) {
      $("#greeting").text("Good morning; happy Thursday!");
    } else if (whatDay === 5) {
      $("#greeting").text("Good morning; happy Friday!");
    } else {
      $("#greeting").text("Good morning; happy Saturday!");
    }
  } else if (hour < 18) {
    if (whatDay === 0) {
      $("#greeting").text("Good afternoon; happy Sunday!");
    } else if (whatDay === 1) {
      $("#greeting").text("Good afternoon; happy Monday!");
    } else if (whatDay === 2) {
      $("#greeting").text("Good afternoon; happy Tuesday!");
    } else if (whatDay === 3) {
      $("#greeting").text("Good afternoon; happy Wednesday!");
    } else if (whatDay === 4) {
      $("#greeting").text("Good afternoon; happy Thursday!");
    } else if (whatDay === 5) {
      $("#greeting").text("Good afternoon; happy Friday!");
    } else {
      $("#greeting").text("Good afternoon; happy Saturday!");
    }
  } else {
    if (whatDay === 0) {
      $("#greeting").text("Good evening; happy Sunday!");
    } else if (whatDay === 1) {
      $("#greeting").text("Good evening; happy Monday!");
    } else if (whatDay === 2) {
      $("#greeting").text("Good evening; happy Tuesday!");
    } else if (whatDay === 3) {
      $("#greeting").text("Good evening; happy Wednesday!");
    } else if (whatDay === 4) {
      $("#greeting").text("Good evening; happy Thursday!");
    } else if (whatDay === 5) {
      $("#greeting").text("Good evening; happy Friday!");
    } else {
      $("#greeting").text("Good evening; happy Saturday!");
    }
  }
}

greet();
