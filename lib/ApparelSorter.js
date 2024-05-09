/*
Copyright (c) 2015, Grant Copley
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var regexes = [
    {regex: /^osfa.*$/i, normalized: 'OSFA'},
    {regex: /^one .*$/i, normalized: 'OSFA'},
    {regex: /^one$/i, normalized: 'OSFA'},
    {regex: /^3tp/i, normalized: 'XXXS'},
    {regex: /^xxxs/i, normalized: 'XXXS'},
    {regex: /^3xs/i, normalized: 'XXXS'},
    {regex: /^xxs/i, normalized: 'XXS'},
    {regex: /^2xs/i, normalized: 'XXS'},
    {regex: /^2tp/i, normalized: 'XXS'},
    {regex: /^xs .*$/i, normalized: 'XS'},
    {regex: /^x sm.*$/i, normalized: 'XS'},
    {regex: /^extra small.*$/i, normalized: 'XS'},
    {regex: /^xs\/s*$/i, normalized: 'XS/S'},
    {regex: /^xs.*$/i, normalized: 'XS'},
    {regex: /^.* xs$/i, normalized: 'XS'},
    {regex: /^xs/i, normalized: 'XS'},
    {regex: /^tp/i, normalized: 'XS'},
    {regex: /^sm.*$/i, normalized: 'S'},
    {regex: /^.* small/i, normalized: 'S'},
    {regex: /^ss/i, normalized: 'Short Sleeve'},
    {regex: /^short sleeve/i, normalized: 'Short Sleeve'},
    {regex: /^ls/i, normalized: 'Long Sleeve'},
    {regex: /^long sleeve/i, normalized: 'Long Sleeve'},
    {regex: /^s$/i, normalized: 'S'},
    {regex: /^small.*$/i, normalized: 'S'},
    {regex: /^s\/.*$/i,  normalized: 'S'},
    {regex: /^s \/.*$/i, normalized: 'S'},
    {regex: /^s .*$/i, normalized: 'S'},
    {regex: /^p/i, normalized: 'S'},
    {regex: /^medium large/i, normalized: 'M/L'},
    {regex: /^medium_large/i, normalized: 'M/L'},
    {regex: /^m\/l.*$/i, normalized: 'M/L'},
    {regex: /^m$/i, normalized: 'M'},
    {regex: /^medium.*$/i, normalized: 'M'},
    {regex: /^.*med.*$/i,normalized: 'M'},
    {regex: /^m .*$/i,normalized: 'M'},
    {regex: /^m[A-Za-z]*/i, normalized: 'M'},
    {regex: /^M\/.*$/i, normalized: 'M'},
    {regex: /^l\/xl.*$/i, normalized: 'L/XL'},
    {regex: /^l$/i, normalized: 'L'},
    {regex: /^.*lg.*$/i, normalized: 'L'},
    {regex: /^large.*$/i, normalized: 'L'},
    {regex: /^l .*$/i, normalized: 'L'},
    {regex: /^l\/.*$/i, normalized: 'L'},
    {regex: /^g$/i, normalized: 'L'},
    {regex: /^g\/.*$/i, normalized: 'L'},
    {regex: /^lt$/i, normalized: 'L'},
    {regex: /^xl\/xxl.*$/i, normalized: 'XL/2XL'},
    {regex: /^xl\/2x.*$/i, normalized: 'XL/2XL'},
    {regex: /^xl.*$/i, normalized: 'XL'},
    {regex: /^x large.*$/i, normalized: 'XL'},
    {regex: /^extra large.*$/i, normalized: 'XL'},
    {regex: /^.* XL$/i, normalized: 'XL'},
    {regex: /^x-l.*$/i, normalized: 'XL'},
    {regex: /^l[A-Za-z]*$/i, normalized: 'XL'},
    {regex: /^petite l.*$/i,  normalized: 'Petite L'},
    {regex: /^tg.*$/i, normalized: 'XL'},
    {regex: /^1x.*$/i, normalized: 'XL'},
    {regex: /^.* 1x$/i, normalized: 'XL'},
    {regex: /^xlt$/i, normalized: 'XL'},
    {regex: /^2x.*$/i, normalized: '2XL'},
    {regex: /^.* 2X$/i, normalized: '2XL'},
    {regex: /^2tg.*$/i, normalized: '2XL'},
    {regex: /^ttg.*$/i, normalized: '2XL'},
    {regex: /^.* 2tg$/i, normalized: '2XL'},
    {regex: /^.* ttg$/i, normalized: '2XL'},
    {regex: /^XXL.*$/i, normalized: '2XL'},
    {regex: /^2xt$/i, normalized: '2XL'},
    {regex: /^2xlt$/i, normalized: '2XL'},
    {regex: /^3x.*$/i, normalized: '3XL'},
	{regex: /^XXXL.*$/i, normalized: '3XL'},
    {regex: /^3tg.*$/i, normalized: '3XL'},
	{regex: /^tttg.*$/i, normalized: '3XL'},
    {regex: /^4x.*$/i, normalized: '4XL'},
	{regex: /^XXXXL.*$/i, normalized: '4XL'},
    {regex: /^5x.*$/i, normalized: '5XL'},
	{regex: /^XXXXXL.*$/i, normalized: '5XL'},
    {regex: /^6x.*$/i, normalized: '6XL'},
	{regex: /^XXXXXXL.*$/i, normalized: '6XL'},
    {regex: /^7x.*$/i, normalized: '7XL'},
	{regex: /^XXXXXXXL.*$/i, normalized: '7XL'},
    {regex: /^8x.*$/i, normalized: '8XL'},
	{regex: /^XXXXXXXXL.*$/i, normalized: '8XL'},
    {regex: /^9x.*$/i, normalized: '9XL'},
	{regex: /^XXXXXXXXXL.*$/i, normalized: '9XL'},
    {regex: /^10x.*$/i, normalized: '10XL'},
	{regex: /^XXXXXXXXXXL.*$/i, normalized: '10XL'},
    {regex: /^11x.*$/i, normalized: '11XL'},
	{regex: /^XXXXXXXXXXXL.*$/i, normalized: '11XL'},
    {regex: /^12x.*$/i, normalized: '12XL'},
	{regex: /^XXXXXXXXXXXXL.*$/i, normalized: '12XL'},
    {regex: /^13x.*$/i, normalized: '13XL'},
	{regex: /^XXXXXXXXXXXXXL.*$/i, normalized: '13XL'},
    {regex: /^14x.*$/i,  normalized: '14XL'},
	{regex: /^XXXXXXXXXXXXXXL.*$/i, normalized: '14XL'},
    {regex: /^15x.*$/i, normalized: '15XL'},
	{regex: /^XXXXXXXXXXXXXXXL.*$/i, normalized: '15XL'},
    {regex: /^16x.*$/i, normalized: '16XL'},
	{regex: /^XXXXXXXXXXXXXXXXL.*$/i, normalized: '16XL'},
    {regex: /^17x.*$/i, normalized: '17XL'},
	{regex: /^XXXXXXXXXXXXXXXXXL.*$/i, normalized: '17XL'},
    {regex: /^18x.*$/i, normalized: '18XL'},
	{regex: /^XXXXXXXXXXXXXXXXXXL.*$/i, normalized: '18XL'},
].map(function({regex, normalized}, index) {
    return {regex: regex, normalized, index: index};
});

function matchSizesWithRegexes(size, index) {
    return findRegexMatch(patterns=regexes, iteration=0, size=size);
}

function findRegexMatch(patterns, iteration, size) {
    if (patterns.length - 1 >= iteration) {
        if (size.search(patterns[iteration].regex) >= 0) {
            return {
                regex: patterns[iteration].regex,
                index: patterns[iteration].index,
                size: size, 
                normalized: patterns[iteration].normalized,
                sizeVal: extractSizeVal(size, patterns[iteration].normalized || size),
            };
        }
        return findRegexMatch(patterns=patterns, iteration=iteration + 1, size=size);
    }
    return {
        regex: "No Match", 
        index: parseInt(size.replace(/[^\d.-]/g, '')), 
        size: size,
        normalized: size,
        sizeVal: extractSizeVal(size, size)
    };
}

function extractSizeVal (size, normalizedSize) {
    // If the size is on the lower end of the spectrum, infer it is a negative int.
    const isPotentiallyNegativeValue = normalizedSize && (normalizedSize.includes('XS') || normalizedSize.includes('TP'));
    if (isPotentiallyNegativeValue) {
        const sizeInt = parseInt(size) || 0;
        return sizeInt ? -sizeInt : 0;
    } else {
        const sizeInt = parseInt(size) || 0;
        return sizeInt ? sizeInt : 0;
    }
}

function sortSizesByIndex(size1, size2) {
    // This function name is a bit deceptive.
    // 
    // Sort sizes by index implies that we are simply sorting sizes by their index,
    // when in fact, we're also doing some fuzzy logic to coax out a number from the size,
    // which is potentially risky, given that numbers in sizes do not necessarily always correspond
    // with ascending linear progression (eg 3XS, 2XS, XS, S, M, L, XL, 2XL, 3XL).
    //
    // When originally written, a positive linear progression was inferred, which had caused unknown issues.
    //
    // `extractSizeVal` has been modified from source to infer a true linear progression.
    if (size1.index < size2.index || size1.sizeVal > 0 && size2.sizeVal > 0 && size1.sizeVal < size2.sizeVal) return -1;
    if (size1.index == size2.index || size1.sizeVal > 0 && size2.sizeVal > 0 && size1.sizeVal == size2.sizeVal) return 0;
    return 1;
}

function getSize(result, options = {}) {
    if (options.normalized) {
        return result.normalized || result.size;
    }
    return result.size;
}

function getIndex(result) {
    return result.index;
}

function getNormalizedSize(result) {
    return result.normalized
}

//////////////////////////////////////////////////////////////////

exports.sortSizes = function(sizes, options = {}) {
    if (!sizes) {
        return [];
    }
    return sizes
        .map(matchSizesWithRegexes)
        .sort(sortSizesByIndex)
        .map(result => getSize(result, options));
};

exports.sizeIndex = function(size) {
    return [size]
        .map(matchSizesWithRegexes)
        .map(getIndex)[0] || 0;
}

exports.normalizedSize = function(size){
    return [size]
    .map(matchSizesWithRegexes)
    .map(getNormalizedSize)[0] || size;
}

exports.sort = exports.sortSizes;
exports.numberify = exports.sizeIndex;
exports.index = exports.sizeIndex; // left for backwards compatability
exports.normalize = exports.normalizedSize