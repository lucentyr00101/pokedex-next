import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // return new Response('api route in /api/pokemon')
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const res = await data.json()
  return NextResponse.json(res)
}