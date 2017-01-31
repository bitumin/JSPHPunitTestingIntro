describe("LineWrapper", function () {
    beforeAll(function () {
        this.lnWrapper = typeof LineWrapper !== 'undefined' ? LineWrapper : require('../src/LineWrapper');
    });

    it("does not wrap short lines", function () {
        expect(this.lnWrapper.wrap('hola', 50)).toBe('hola');
    });

    it("wraps long lines", function () {
        expect(this.lnWrapper.wrap('esternocleidomastoideo', 4)).toBe('este\nrnoc\nleid\nomas\ntoid\neo');
    });
});
