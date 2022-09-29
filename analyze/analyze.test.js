import {describe, expect, test} from '@jest/globals';

const analyze = require('./analyze')

describe('Array',() => {
    test('Array [1,2,3,4,5,6,7,8,9,]', ()=>{
        expect(analyze([1,2,3,4,5,6,7,8,9])).toEqual({
            average: 5,
            min: 1,
            max: 9,
            length: 9
          })
    })
})

describe('Array',() => {
    test('Array [1,8,3,4,2,6]', ()=>{
        expect(analyze([1,8,3,4,2,6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
          })
    })
})