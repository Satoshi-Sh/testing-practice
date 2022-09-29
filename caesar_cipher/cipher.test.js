import {describe, expect, test} from '@jest/globals';

const cipher = require('./cipher')

describe('Basic',() => {
    test('a returns b', ()=>{
        expect(cipher('a')).toBe('b')
    })
})

describe('with Z',() => {
    test('zoo returns app', ()=>{
        expect(cipher('zoo')).toBe('app')
    })
})

describe('with capitals',() => {
    test('Masa returns Nbtb', ()=>{
        expect(cipher('Masa')).toBe('Nbtb')
    })
})

describe('with punctuactions',() => {
    test('hi, there', ()=>{
        expect(cipher('hi, there')).toBe('ij, uifsf')
    })
})

