import { APIGatewayProxyResult } from 'aws-lambda';
import { ApiResponse } from '../types';

export const createResponse = (
  statusCode: number,
  body: ApiResponse,
  headers: Record<string, string> = {}
): APIGatewayProxyResult => {
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

export const successResponse = <T>(
  data: T,
  message?: string,
  statusCode: number = 200
): APIGatewayProxyResult => {
  return createResponse(statusCode, {
    success: true,
    data,
    message,
  });
};

export const errorResponse = (
  error: string,
  statusCode: number = 400,
  data?: any
): APIGatewayProxyResult => {
  return createResponse(statusCode, {
    success: false,
    error,
    data,
  });
};

export const serverErrorResponse = (
  error: string = 'Internal server error'
): APIGatewayProxyResult => {
  return createResponse(500, {
    success: false,
    error,
  });
}; 