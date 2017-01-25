describe("PasswordValidator", function () {
    beforeAll(function () {
        this.validator = typeof Validator !== 'undefined' ? Validator : require('../src/PasswordValidator');
    });

    // afterAll(function() {
    //
    // });
    //
    // beforeEach(function() {
    //
    // });
    //
    // afterEach(function() {
    //
    // });

    it("invalidates no uppercase", function () {
        expect(this.validator.isValid('hola_1234')).toBe(false);
    });

    it("invalidates no lowercase", function () {
        expect(this.validator.isValid('HOLA_1234')).toBe(false);
    });

    it("invalidates no underscore", function () {
        expect(this.validator.isValid('HOLAx1234')).toBe(false);
    });

    it("invalidates no number", function () {
        expect(this.validator.isValid('HOLA_hola')).toBe(false);
    });

    it("invalidates too short", function () {
        expect(this.validator.isValid('hO_1')).toBe(false);
    });

    it("validates valid", function () {
        expect(this.validator.isValid('HOLA_hola_1234')).toBe(true);
    });

    // redundante, pero nos sirve como ejemplo de uso de spyOn
    it("calls all validations on valid", function() {
        // spyOn es un stub, si queremos que se llame al método original podemos agregar and.callThrough()
        spyOn(this.validator, 'hasUppercase').and.callThrough();
        spyOn(this.validator, 'hasLowercase').and.callThrough();
        spyOn(this.validator, 'hasUnderscore').and.callThrough();
        spyOn(this.validator, 'hasNumber').and.callThrough();
        spyOn(this.validator, 'isLongEnough').and.callThrough();

        this.validator.isValid('HOLA_hola_1234');

        expect(this.validator.hasUppercase).toHaveBeenCalled();
        expect(this.validator.hasLowercase).toHaveBeenCalled();
        expect(this.validator.hasUnderscore).toHaveBeenCalled();
        expect(this.validator.hasNumber).toHaveBeenCalled();
        expect(this.validator.isLongEnough).toHaveBeenCalled();
    });
});
