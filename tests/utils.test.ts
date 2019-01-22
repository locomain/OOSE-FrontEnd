//@ts-ignore
import { expect } from 'chai';
import 'mocha';
import {Utils} from '@/utils/utils';

describe('Property keys to lowercase',()=>{
    it(`Should return-> { data : 1 }`,()=>{
        const data = {DATA:1};
        Utils.keysToLowerCase(data);
        expect(JSON.stringify(data)).to.equal(JSON.stringify({data:1}));
    });
});

describe('Convert database date to a readable date',()=>{
    it('Should return -> 01-01-2020',()=>{
        const result = Utils.dateToReadableDate("2020-01-01 00:00:00");
        expect(result).to.equal("01-01-2020");
    });
});


describe('Should check if a string has a uppercase char',()=>{
   it('Should return -> true',()=>{
     expect(Utils.hasUpperCaseChars("PascalCase")).to.equal(true);
   });
});
