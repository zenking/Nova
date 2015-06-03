/// <reference path="../../server.d.ts" />
'use strict';

module.exports = {
  ip: process.env.IP || undefined<% if (filters.backend === 'mongo') { %>,
  mongo: {
    uri: 'mongodb://localhost/<%= slugName %>'
  }<% } %>
};
