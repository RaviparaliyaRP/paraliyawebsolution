import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filename = searchParams.get('file');

  if (!filename) {
    return NextResponse.json({ error: 'File not specified' }, { status: 400 });
  }

  // Whitelist of allowed files
  const allowedFiles = [
    'Paraliya-Website-Launch-Checklist.pdf',
    'Paraliya-SEO-Starter-Guide.pdf',
    'Paraliya-Website-Cost-Guide.pdf'
  ];

  if (!allowedFiles.includes(filename)) {
    return NextResponse.json({ error: 'File not allowed' }, { status: 403 });
  }

  try {
    const filePath = path.join(process.cwd(), 'public', 'downloads', filename);
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Error reading file:', error);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
