/*
 * Copyright 2017 Brigham Young University
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
'use strict';

const expect            = require('chai').expect;


// ----- Test Helper Functions -----
function testMockResponseSuccess(res, returnCode) {
    expect(res.statusCode).to.equal(returnCode);
    if (res.body) {
        let body = JSON.parse(res.body);
        expect(body.metadata.validation_response.return_code).to.equal(returnCode);
    }
}
exports.testMockResponseSuccess = testMockResponseSuccess;

function testMockResponseMissingRequiredBody(res) {
    expect(res.statusCode).to.equal(400);
    expect(res.body).to.have.string('Missing required body');
}
exports.testMockResponseMissingRequiredBody = testMockResponseMissingRequiredBody;


// ----- Test the helper functions -----
describe('Test Helper Functions Unit Tests', function () {
    // ----- testMockResponseSuccess -----
    it('testMockResponseSuccess should verify that the statusCode and the validation_response.return_code match the given returnCode', () => {
        testMockResponseSuccess({ statusCode: 200, body: JSON.stringify({ metadata: { validation_response: { return_code: 200 } } }) }, 200);
    });

    // ----- testMockResponseMissingRequiredBody -----
    it('testMockResponseMissingRequiredBody should verify that the statusCode and the validation_response.return_code match the given returnCode', () => {
        testMockResponseMissingRequiredBody({ statusCode: 400, body: 'Missing required body' });
    });
});