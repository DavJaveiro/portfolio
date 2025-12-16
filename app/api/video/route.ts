import { NextResponse } from 'next/server';

const JAVA_API_URL = 'http://100.31.216.33:8080/api/v1/youtube/latest';

export async function GET() {
    try {
        // O servidor do Next.js chama o Java (Servidor -> Servidor não tem bloqueio HTTP)
        const response = await fetch(JAVA_API_URL, {
            cache: 'no-store', // Garante dados sempre frescos
            next: { revalidate: 0 }
        });

        if (!response.ok) {
            throw new Error(`Erro ao conectar no Java: ${response.status}`);
        }

        const data = await response.json();

        // Repassa os dados para o seu Frontend
        return NextResponse.json(data);

    } catch (error) {
        console.error('Erro no Proxy:', error);
        return NextResponse.json(
            { error: 'Falha ao buscar vídeo' },
            { status: 500 }
        );
    }
}