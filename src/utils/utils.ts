import Rainbow from "rainbowvis.js";

export const addZeroes = (num: number) =>
  Number(num).toFixed(Math.max(num.toString().split(".")[1]?.length, 2) || 2);

export const formatScores = (min: number | string, max: number | string) => {
  if (typeof min === "number") {
    return `${min}-${max}`;
  } else {
    return " Not Reported";
  }
};

export const getInitials = (name: string) => {
  if (name === "") return "?";
  const namesArray = name.trim().split(/\s+/);
  if (namesArray.length === 0) {
    return "";
  }
  if (namesArray.length === 1) {
    let firstInitial = namesArray[0][0];
    return firstInitial.toUpperCase();
  }
  let firstInitial = namesArray[0][0];
  let lastInitial = namesArray[namesArray.length - 1][0];

  return `${firstInitial.toUpperCase()}${lastInitial.toUpperCase()}`;
};

export const getFirstLetterOfLastName = (inputString: string) =>
  inputString.trim().split(" ").pop()?.charAt(0) ?? "a";

// Following the color guidelines didnt produce an accurate pattern to the pdf image,
// Creating a color gradient array and assigning color based on computed gpa difference is more accurate...
const rainbow = new Rainbow();
rainbow.setSpectrum("#75ace5", "#a6a8da", "#b4a7d6", "#c194b5", "#d7737d");
const colorGradientArray: string[] = Array.from({ length: 100 }, (_, i) =>
  rainbow.colourAt(i + 1)
);

export const getColorFromGPA = (schoolGPA: number, athleteGPA: number) => {
  const difference = Math.round((schoolGPA - athleteGPA) * 1000);
  const index =
    // If GPA is below/above 0.1 default to first/last index
    difference <= -100
      ? 0
      : difference >= 100
      ? 99
      : // 100 is the scale factor for converting -0.1 - 0 - 1 range to 0 - 50 -100 values
        ((difference + 100) / 200) * 100;
  return `#${colorGradientArray[index]}`;
};
