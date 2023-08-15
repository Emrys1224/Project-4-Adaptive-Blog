const between = (x, min, max) => {
  return x >= min && x <= max;
};

export const formatCount = (count) => {
  let suffix = "";
  let dispNum = count;

  if (between(count, 1000, 1000000 - 1)) {
    dispNum = count / 1000;
    suffix = "k";
  } else if (between(count, 1000000, 1000000000 - 1)) {
    dispNum = count / 1000000;
    suffix = "M";
  } else if (between(count, 1000000000, 1000000000000 - 1)) {
    dispNum = count / 1000000000;
    suffix = "B";
  }

  if (count > 1000) {
    if (dispNum >= 10) dispNum = dispNum.toFixed(0);
    else dispNum = dispNum.toFixed(1);
  }

  return dispNum.toString().concat(suffix).replace(".", ",");
};

export const printCurrentDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${month} ${day}, ${year}`;
};
