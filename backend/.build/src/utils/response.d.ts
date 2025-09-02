import { APIGatewayProxyResult } from 'aws-lambda';
import { ApiResponse } from '../types';
export declare const createResponse: (statusCode: number, body: ApiResponse, headers?: Record<string, string>) => APIGatewayProxyResult;
export declare const successResponse: <T>(data: T, message?: string, statusCode?: number) => APIGatewayProxyResult;
export declare const errorResponse: (error: string, statusCode?: number, data?: any) => APIGatewayProxyResult;
export declare const serverErrorResponse: (error?: string) => APIGatewayProxyResult;
//# sourceMappingURL=response.d.ts.map