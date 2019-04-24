const checkLeapYear = require("./leap_year").checkLeapYear;
describe("To test leap years", () => {
    it("should check whether year is leap year or not", ()=> {
        expect(checkLeapYear(1285)).toBeTruthy();
    })
})