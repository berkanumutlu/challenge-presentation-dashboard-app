import { Response as ExpressResponse, Request as ExpressRequest, NextFunction } from "express";
import { User } from "@prisma/client";

export type Request = ExpressRequest & AuthenticatedRequest;
export type Response = ExpressResponse & {
    success: (data: any, message?: string, status?: number) => void;
    warning: (message?: string, status?: number) => void;
    error: (err: any, message?: string, status?: number) => void;
};
export type Next = NextFunction;
export type AuthenticatedRequest = ExpressRequest & {
    token: string;
    user: User;
};