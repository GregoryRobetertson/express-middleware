'use strict';

function logoutRequest(req, res, next) {
    console.log(req.headers);
    next();
}

function requestHeaders(req, res, next) {
    console.log(req.headers);
    next();
}

module.exports = {logoutRequest, requestHeaders};