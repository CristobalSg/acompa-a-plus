import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Asegúrate de que la ruta sea correcta

export async function GET() {
  try {
    const services = await prisma.service.findMany(); // Esto debe funcionar si el modelo está definido correctamente
    return NextResponse.json(services);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener servicios' }, { status: 500 });
  }
}