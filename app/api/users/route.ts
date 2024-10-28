// app/api/users/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Aquí iría la lógica para obtener datos, como consultas a una base de datos
  const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
  
  return NextResponse.json(users);
}
