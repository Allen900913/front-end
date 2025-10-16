import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getTasks, addTask } from "@/app/actions-db/action";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const tasks = await getTasks(userId);
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  if (!body.title?.trim()) {
    return NextResponse.json({ error: "Title required" }, { status: 400 });
  }

  const newTask = await addTask(body.title, userId);
  return NextResponse.json(newTask, { status: 201 });
}
