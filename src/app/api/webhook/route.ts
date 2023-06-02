import { NextRequest, NextResponse } from 'next/server';
import middleware from '@/app/components/middleware';

export async function GET(req: NextRequest) {
    const res = new NextResponse('GET Request Successful')
    middleware(res, req)
    return res
}

export async function POST(req: NextRequest) {
  const payload = await req.json(); // Parse the JSON payload from the request body
  console.log(payload); // Log the payload for debugging purposes

  const eventType = req.headers.get('X-GitHub-Event'); // Get the event type from the request headers

  if (eventType === 'push') {
    // Handle push event
    // Perform actions like pulling changes, rebuilding, and redeploying
    // You can use Git commands or automation tools (CI/CD pipelines) for this

    // Example:
    console.log('Performing pull, build, and redeploy actions...');
    // Your pull, build, and redeploy logic here
  } else if (eventType === 'ping') {
    // Handle ping event
    // This is typically a test event sent by GitHub to check the webhook's connectivity
    // You can log or perform any necessary actions for testing or verification
    console.log('Received ping event from GitHub');
  } else {
    // Handle other event types as needed
    // Log or perform actions based on the specific event types you want to handle
    console.log('Received unknown event type:', eventType);
  }

  const res = new NextResponse('POST Request Successful');
  middleware(res, req);
  return res;
}


export async function OPTIONS(req: NextRequest) {
    const res = new NextResponse('Preflight Options Passed')
    middleware(res, req)
    return res
}