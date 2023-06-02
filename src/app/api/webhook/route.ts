import { NextRequest, NextResponse } from 'next/server';
import middleware from '@/app/components/middleware';

export async function GET(req: NextRequest) {
    const res = new NextResponse('GET Request Successful')
    middleware(res, req)
    return res
}

export async function POST(req: NextRequest) {
    const res = NextResponse.json({message: 'POST Request Successful'})
    console.log('POST successful')
    middleware(res, req)
    console.log('Response sent:', res.json);
    return res
}

export async function OPTIONS(req: NextRequest) {
    const res = new NextResponse('Preflight Options Passed')
    middleware(res, req)
    return res
}