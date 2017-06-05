/**
 *  @license
 *    Copyright 2016 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';
const byuApi = require('node-byuapi-framework');
const express = require('express');

const app = express();

// add sans-server middleware for express
app.use(byuApi.express({
  controllers: './controllers',
  development: true,
  swagger: './swagger.json'
}));

let port = process.env.PORT || 8081;
app.listen(port);