var apparelSorter = require('../lib/ApparelSorter.js');
var assert = require('assert');

describe("sort() functionality", function() {

    it("should return empty array if not passed any sizes", function() {
        assert.deepEqual([], apparelSorter.sort());
    });

    it("should sort standard abbreviated sizes", function() {
        var unsortedSizes = ["XL", "L", "S", "M", "XS","3XL","1XL","2XL"];
        assert.deepEqual(["XS","S","M","L","XL","1XL","2XL","3XL"], apparelSorter.sort(unsortedSizes));
    });

    it("should sort XXL as if it were 2XL", function() {
        var unsortedSizes = ["3XL","1XL","XXL"];
        assert.deepEqual(["1XL", "XXL", "3XL"], apparelSorter.sort(unsortedSizes));
        var unsortedSizes = ["3XL","1XL","2XL"];
        assert.deepEqual(["1XL", "2XL", "3XL"], apparelSorter.sort(unsortedSizes));
	    var unsortedSizes = ["XXXL","XXL","XL","3XL","1XL","2XL"];
	    assert.deepEqual(["XL","1XL","XXL","2XL","XXXL","3XL"], apparelSorter.sort(unsortedSizes));
    });


    it("should sort XXL before XXXL", function() {
		var unsortedSizes = ["XXXL","XXL"];
		assert.deepEqual(["XXL","XXXL"], apparelSorter.sort(unsortedSizes));
	});

    it("should sort extended sizes", function() {
        var unsortedSizes = ["6X","5X","9XL","3XL", "2X","1X","18X","13X"];
        assert.deepEqual(["1X","2X","3XL","5X","6X","9XL","13X","18X"], apparelSorter.sort(unsortedSizes));
    });

    it("should sort size ranges with forward slashes such as X/S, S/M, etc.", function() {
        var unsortedSizes = ["L/XL","XS/S","S/M"];
        assert.deepEqual(["XS/S","S/M","L/XL"], apparelSorter.sort(unsortedSizes));
    });

    it("should sort numeric sizes", function() {
		var unsortedSizes = ["18W", "16", "14", "12", "10", "8", "6", "4", "2", "0"];
		assert.deepEqual(["0","2","4","6","8","10","12","14","16","18W"], apparelSorter.sort(unsortedSizes));
	});

	it("should sort EU shoe sizes", function() {
		var unsortedSizes = ["EU 42", "EU 34", "EU 36", "EU 40", "EU 39"];
		assert.deepEqual(["EU 34", "EU 36", "EU 39", "EU 40", "EU 42"], apparelSorter.sort(unsortedSizes));

		var unsortedSizes = ["EUR 42", "EUR 34", "EUR 36", "EUR 40", "EUR 39"];
		assert.deepEqual(["EUR 34", "EUR 36", "EUR 39", "EUR 40", "EUR 42"], apparelSorter.sort(unsortedSizes));
	});

	it("should sort US shoe sizes", function() {
		var unsortedSizes = ["US 6", "US 7", "US 12", "US 10", "US 8"];
		assert.deepEqual(["US 6", "US 7", "US 8", "US 10", "US 12"], apparelSorter.sort(unsortedSizes));
	});

	it("should sort half show sizes", function() {
		var unsortedSizes = ["US 6", "US 7.5", "US 12", "US 10.5", "US 8"];
		assert.deepEqual(["US 6", "US 7.5", "US 8", "US 10.5", "US 12"], apparelSorter.sort(unsortedSizes));
	});

    it("should sort short sleeve and long sleeve", function() {
        var unsortedSizes = ["LS", "SS"];
        assert.deepEqual(["SS","LS"], apparelSorter.sort(unsortedSizes));
        var unsortedSizes = ["Long Sleeve", "Short Sleeve"];
        assert.deepEqual(["Short Sleeve","Long Sleeve"], apparelSorter.sort(unsortedSizes));
    });

    it("should sort ranges such as 28-30, 32-34, etc.", function() {
        var unsortedSizes = ["20-22", "16-18", "10-12", "16W-18W"];
        assert.deepEqual(["10-12", "16-18", "16W-18W", "20-22"], apparelSorter.sort(unsortedSizes));
    });

    it("should sort talls", function() {
        var unsortedSizes = ["2XLT", "XLT", "LT"];
        assert.deepEqual(["LT", "XLT", "2XLT"], apparelSorter.sort(unsortedSizes));
    });

	it("should sort tall after standard sizing", function() {
		var unsortedSizes = ["XS","S","M", "L", "LT", "XLT", "XL", "MT", "ST", "2X", "2XLT", "2XT", "3X"];
		assert.deepEqual(["XS", "S", "ST", "M", "MT", "L", "LT", "XL", "XLT", "2X", "2XLT", "2XT", "3X"], apparelSorter.sort(unsortedSizes));
	});

    it("should sort unfinished lengths", function() {
        var unsortedSizes = ["36","34","35","36U"];
        assert.deepEqual(["34","35","36","36U"], apparelSorter.sort(unsortedSizes));
        var unsortedSizes = ["36","34","35","36 Unfinished"];
        assert.deepEqual(["34","35","36","36 Unfinished"], apparelSorter.sort(unsortedSizes));
        var unsortedSizes = ["36","34","35","36 Unf"];
        assert.deepEqual(["34","35","36","36 Unf"], apparelSorter.sort(unsortedSizes));
    });

    it("calling sortSizes() function instead of sort() should still work", function() {
        var unsortedSizes = ["3XL","1XL","XXL"];
        assert.deepEqual(["1XL", "XXL", "3XL"], apparelSorter.sort(unsortedSizes));
        var unsortedSizes = ["3XL","1XL","2XL"];
        assert.deepEqual(["1XL", "2XL", "3XL"], apparelSorter.sort(unsortedSizes));
    });

    it("should sort all alpha sizes, regardless of negative or positive integer, accurately", () => {
        const allAlphaSizes = [
            'XXXS',
            '3XS',
            'XXS',
            '2XS',
            'XS/S',
            'XS',
            'EXTRA SMALL',
            'S',
            'SMALL',
            'M',
            'MEDIUM',
            'M/L',
            'MEDIUM LARGE',
            'MEDIUM_LARGE',
            'L',
            'LARGE',
            'LT',
            'XL',
            'EXTRA LARGE',
            'XLT',
            'XL/2X',
            '2XL',
            'XXL',
            'XL/XXL',
            '2XLT',
            '1X',
            '3XL',
            'XXXL',
            '3XLT',
            '2X',
            'XXXXL',
            '4XL',
            '4XLT',
            '3X',
            '4X',
            '5XL',
            '6XL',
        ];

        const allAlphaSizesSortedAndNormalized = [
            'XXXS',
            'XXS',
            'XS',
            'XS/S',
            'S',
            'M/L',
            'M',
            'L',
            'XL/2XL',
            'XL',
            '2XL',
            '3XL',
            '4XL',
            '5XL',
            '6XL',
        ];

        const frenchAlphaSizes = [
            '3TP',
            '2TP',
            'TP',
            'P',
            'M',
            'G',
            'TG',
            '2TG',
            '3TG',
        ];

        const frenchAlphaSizesNormalized = [
            'XXXS',
            'XXS',
            'XS',
            'S',
            'M',
            'L',
            'XL',
            '2XL',
            '3XL'
        ]

        const sortedSizes = apparelSorter.sortSizes(allAlphaSizes);

        const sortedUniqueSizes = apparelSorter.sortSizes(allAlphaSizes, { normalized: true }).filter((value, index, array) => array.indexOf(value) === index);

        assert.deepEqual(allAlphaSizes.length, sortedSizes.length);
        assert.deepEqual([...allAlphaSizesSortedAndNormalized], sortedUniqueSizes);
        assert.deepEqual(apparelSorter.sortSizes(frenchAlphaSizes, { normalized: true }), frenchAlphaSizesNormalized);
    })

});

describe("numberify() functionality", function() {

    it("should return a numeric value for various sizes", function() {
		assert(apparelSorter.index("XS") > 0);
		assert(apparelSorter.index("Small") > 0);
		assert(apparelSorter.index("Large") > 0);
	});

    it("should return zero for unknown size", function() {
        assert(apparelSorter.index("UnknownSize") == 0);
        assert(apparelSorter.index("This is a very large unknown size") == 0);
    });

    it("calling sizeIndex() function instead of index() should still work", function() {
        assert(apparelSorter.sizeIndex("XS") > 0);
        assert(apparelSorter.sizeIndex("Small") > 0);
        assert(apparelSorter.sizeIndex("Large") > 0);
    });

});

describe("index() functionality", function() {

    it("should return same result as calling index()", function() {
        assert(apparelSorter.index("XS") == apparelSorter.numberify("XS"));
        assert(apparelSorter.index("SM") == apparelSorter.numberify("SM"));
        assert(apparelSorter.index("Large") == apparelSorter.numberify("Large"));
    });

});

describe("normalize() functionality", function() {

    it("should return a normalized size string", function() {
        assert(apparelSorter.normalize("XS") == "XS");
        assert(apparelSorter.normalize("Small") == "S");
        assert(apparelSorter.normalize("M") == "M")
        assert(apparelSorter.normalize("medium") == "M");
        assert(apparelSorter.normalize("L") == "L")
        assert(apparelSorter.normalize("LARGE") == "L");
    });

});

