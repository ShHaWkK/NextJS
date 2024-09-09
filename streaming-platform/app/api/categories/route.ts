import { NextResponse } from 'next/server'

const categories = ["Web Development", "React", "JavaScript", "CSS", "HTML"]

export async function GET() {
  return NextResponse.json(categories)
}
