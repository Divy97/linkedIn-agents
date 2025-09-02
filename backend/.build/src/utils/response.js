"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverErrorResponse = exports.errorResponse = exports.successResponse = exports.createResponse = void 0;
const createResponse = (statusCode, body, headers = {}) => {
    return {
        statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type,Authorization',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
            ...headers,
        },
        body: JSON.stringify(body),
    };
};
exports.createResponse = createResponse;
const successResponse = (data, message, statusCode = 200) => {
    return (0, exports.createResponse)(statusCode, {
        success: true,
        data,
        message,
    });
};
exports.successResponse = successResponse;
const errorResponse = (error, statusCode = 400, data) => {
    return (0, exports.createResponse)(statusCode, {
        success: false,
        error,
        data,
    });
};
exports.errorResponse = errorResponse;
const serverErrorResponse = (error = 'Internal server error') => {
    return (0, exports.createResponse)(500, {
        success: false,
        error,
    });
};
exports.serverErrorResponse = serverErrorResponse;
//# sourceMappingURL=response.js.map