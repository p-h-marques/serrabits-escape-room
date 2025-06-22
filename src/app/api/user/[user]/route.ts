import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ user: string }> }) {
  const { user } = await params;

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  }

  return NextResponse.json({ user });
}