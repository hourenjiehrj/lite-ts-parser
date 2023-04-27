import { strictEqual } from 'assert';

import { BigIntegerExp as Self } from './big-integer-exp';

describe('src/big-integer-exp.ts', () => {
    describe('.build(type: string)', () => {
        it('custom', () => {
            const self = new Self('(count)=>{return count*1000}');
            const res = self.eval(1000000000000000000000);
            strictEqual(res, '1000000000000000000000000');
        });
    });
});