import { NextRequest, NextResponse } from 'next/server';
import middleware from '@/app/components/middleware';

export async function GET(req: NextRequest) {
    const res = new NextResponse('GET Request Successful')
    middleware(res, req)
    return res
}

export async function POST(req: NextRequest) {
    const res = new NextResponse('POST Request Successful')
    middleware(res, req)
    return res
}

export async function OPTIONS(req: NextRequest) {
    const res = new NextResponse('Preflight Options Passed')
    middleware(res, req)
    return res
}