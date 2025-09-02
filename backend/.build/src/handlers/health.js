"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const response_1 = require("../utils/response");
const logger_1 = require("../utils/logger");
const handler = async (event) => {
    logger_1.logger.info('Health check endpoint called', {
        path: event.path,
        method: event.httpMethod
    });
    return (0, response_1.successResponse)({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        version: '1.0.0',
        service: 'linkedin-agent-backend',
        stage: process.env.STAGE || 'dev',
    }, 'Service is running successfully');
};
exports.handler = handler;
//# sourceMappingURL=health.js.map