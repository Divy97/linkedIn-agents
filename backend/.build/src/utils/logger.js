"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class Logger {
    constructor() {
        const level = process.env.LOG_LEVEL?.toLowerCase() || 'info';
        switch (level) {
            case 'debug':
                this.logLevel = LogLevel.DEBUG;
                break;
            case 'warn':
                this.logLevel = LogLevel.WARN;
                break;
            case 'error':
                this.logLevel = LogLevel.ERROR;
                break;
            default:
                this.logLevel = LogLevel.INFO;
        }
    }
    log(level, message, data) {
        if (level >= this.logLevel) {
            const timestamp = new Date().toISOString();
            const levelName = LogLevel[level];
            const logEntry = {
                timestamp,
                level: levelName,
                message,
                ...(data && { data }),
            };
            console.log(JSON.stringify(logEntry));
        }
    }
    debug(message, data) {
        this.log(LogLevel.DEBUG, message, data);
    }
    info(message, data) {
        this.log(LogLevel.INFO, message, data);
    }
    warn(message, data) {
        this.log(LogLevel.WARN, message, data);
    }
    error(message, data) {
        this.log(LogLevel.ERROR, message, data);
    }
}
exports.logger = new Logger();
//# sourceMappingURL=logger.js.map