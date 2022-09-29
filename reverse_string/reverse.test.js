import {describe, expect, test} from '@jest/globals';

const reverse = require('./reverse')

describe('Reverse',() => {
    test('test returns tset', ()=>{
        expect(reverse('test')).toBe('tset')
    })
})

describe('Reverse',() => {
    test('Anyways returns syawynA', ()=>{
        expect(reverse('Anyways')).toBe('syawynA')
    })
})

describe('Reverse',() => {
    test('9test returns tset9', ()=>{
        expect(reverse('9test')).toBe('tset9')
    })
})