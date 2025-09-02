import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { successResponse } from '../utils/response';
import { logger } from '../utils/logger';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info('Health check endpoint called', { 
    path: event.path, 
    method: event.httpMethod 
  });

  return successResponse({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    service: 'linkedin-agent-backend',
    stage: process.env.STAGE || 'dev',
  }, 'Service is running successfully');
}; 