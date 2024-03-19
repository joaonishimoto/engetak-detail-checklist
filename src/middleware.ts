import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token')?.value
  const signInURL = new URL('/login', request.url)

  if(!token) {
    console.log("REDIRECIONANDO PARA TELA DE LOGIN")
    return NextResponse.redirect(new URL(signInURL))
  }

  console.log("USUÁRIO LOGADO")
}

export const config = {
  matcher: ['/home/:slug*'],
};

