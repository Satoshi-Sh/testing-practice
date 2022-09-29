import {describe, expect, test} from '@jest/globals';

const calculator = require('./calculator')
const c = calculator()


describe('Add',() => {
    test('10+3 =3', ()=>{
        expect(c.add(10,3)).toBe(13)
    })
})

describe('Subtract',() => {
    test('10-3 =7', ()=>{
        expect(c.subtract(10,3)).toBe(7)
    })
})

describe('Divide',() => {
    test('10/2 =5', ()=>{
        expect(c.divide(10,2)).toBe(5)
    })
})

describe('multiply',() => {
    test('10 * 3 = 30', ()=>{
        expect(c.multiply(10,3)).toBe(30)
    })
})