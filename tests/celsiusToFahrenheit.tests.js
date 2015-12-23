var expect = require('chai').expect,
	  app = require('../src/app/celsiusToFahrenheit');

    describe('convertCtoF', function () {
    	it('should return 0 when passed the param (-17.778)', function () {
    		expect(app.convertCtoF(-17.778)).to.equal(0);
    	});
    });
