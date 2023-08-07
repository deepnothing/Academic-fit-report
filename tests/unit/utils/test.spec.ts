import {
  addZeroes,
  formatScores,
  getInitials,
  getFirstLetterOfLastName,
} from "../../../src/utils/utils";

describe("addZeroes", () => {
  it("adds zeroes to a number with fewer than 2 decimal places", () => {
    expect(addZeroes(10)).toBe("10.00");
    expect(addZeroes(3.5)).toBe("3.50");
    expect(addZeroes(123.456)).toBe("123.456");
  });

  it("does not change a number with 2 or more decimal places", () => {
    expect(addZeroes(10.25)).toBe("10.25");
    expect(addZeroes(3.75)).toBe("3.75");
  });
});

describe("formatScores", () => {
  it("formats scores as a range", () => {
    expect(formatScores(85, 90)).toBe("85-90");
    expect(formatScores("NA", "NA")).toBe(" Not Reported");
  });
});

describe("getInitials", () => {
  it("returns initials for a full name", () => {
    expect(getInitials("John Doe")).toBe("JD");
    expect(getInitials("Alice Smith")).toBe("AS");
  });

  it('returns "?" for an empty name', () => {
    expect(getInitials("")).toBe("?");
  });

  it("returns a single initial for a single name", () => {
    expect(getInitials("John")).toBe("J");
  });
});

describe("getFirstLetterOfLastName", () => {
  it("returns the first letter of the last name", () => {
    expect(getFirstLetterOfLastName("John Doe")).toBe("D");
    expect(getFirstLetterOfLastName("Alice Smith")).toBe("S");
  });

  it('returns "a" for an empty name', () => {
    expect(getFirstLetterOfLastName("")).toBe("a");
  });
});
