import {describe, expect, test} from '@jest/globals';

const capitalize = require('./capitalize')

describe('test', () => {
  test('test', () => {
    expect(1+1).toBe(2);
  });
});


describe('Capitalize',() => {
    test('test return T', ()=>{
        expect(capitalize('test')).toBe('Test')
    })
})

describe('Capitalize',() => {
    test('Anyways return A', ()=>{
        expect(capitalize('Anyways')).toBe('Anyways')
    })
})

describe('Capitalize',() => {
    test('test with non-character', ()=>{
        expect(capitalize('9test')).toBe('9test')
    })
})

