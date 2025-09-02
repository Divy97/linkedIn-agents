import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// Lambda handler type
export type LambdaHandler = (
  event: APIGatewayProxyEvent
) => Promise<APIGatewayProxyResult>;

// Chat message types
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: string;
}

export interface ChatRequest {
  message: string;
  userId?: string;
  sessionId?: string;
  context?: any;
}

export interface ChatResponse {
  response: string;
  action?: LinkedInAction;
  requiresAuth?: boolean;
  sessionId: string;
}

// LinkedIn action types
export interface LinkedInAction {
  type: 'connection_request' | 'send_message' | 'post_content' | 'search_people' | 'get_profile' | 'custom';
  parameters: {
    [key: string]: any;
  };
  description: string;
}

export interface ConnectionRequestParams {
  profileUrls?: string[];
  searchCriteria?: {
    keywords?: string;
    company?: string;
    location?: string;
    industry?: string;
    limit?: number;
  };
  message?: string;
}

export interface SendMessageParams {
  recipientId: string;
  message: string;
  subject?: string;
}

export interface SearchPeopleParams {
  keywords: string;
  company?: string;
  location?: string;
  industry?: string;
  limit?: number;
}

// LinkedIn API response types
export interface LinkedInProfile {
  id: string;
  firstName: string;
  lastName: string;
  headline?: string;
  profilePictureUrl?: string;
  publicProfileUrl?: string;
  industry?: string;
  location?: string;
}

export interface LinkedInConnection {
  id: string;
  profile: LinkedInProfile;
  connectedAt: string;
}

// Authentication types
export interface AuthToken {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  tokenType: string;
}

export interface UserSession {
  userId: string;
  sessionId: string;
  linkedinAuth?: AuthToken;
  createdAt: string;
  lastActivity: string;
}

// API Response wrapper
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
} 