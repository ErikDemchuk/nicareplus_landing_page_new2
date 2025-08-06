import { NextResponse } from 'next/server';
import { generateCompletion, generateProductRecommendation } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const { message, type = 'completion' } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check OpenAI configuration
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        success: false,
        error: 'OpenAI API key not configured'
      }, { status: 500 });
    }

    // Generate response based on type
    let response;
    if (type === 'recommendation') {
      response = await generateProductRecommendation(message);
    } else {
      response = await generateCompletion(message);
    }

    return NextResponse.json({
      success: true,
      message: 'AI response generated',
      response,
    });
  } catch (error) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate AI response',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 