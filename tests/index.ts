import { expect } from 'chai';
import { MockService } from './MockService';
import test from '../service/impl/abstract.common.http.service.impl';

import 'isomorphic-fetch';

describe('MockService', () => {
    it('can be initialized', () => {
        const s = new MockService();
        expect(s).to.not.be.undefined;
        console.log(test());
    });
   
    it('assertion success', async () => {
        const s = new MockService();
        const result = await s.getTime();
        console.log("Result is:", result);
        expect(result.data).to.not.be.undefined;
    });
})