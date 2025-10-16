"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { Roles } from "../../../types/globals";
import { revalidatePath } from "next/cache";

export async function setRole(formData: FormData) {
  const { sessionClaims } = await auth();
  const role = sessionClaims
    ? (sessionClaims as unknown as CustomJwtSessionClaim).metadata?.role
    : undefined;

  if (role !== "admin") {
    throw new Error("Only admins can set roles.");
  }

  const client = await clerkClient();
  const userId = formData.get("id") as string;
  const newRole = formData.get("role") as Roles;

  try {
    await client.users.updateUser(userId, {
      publicMetadata: {
        role: newRole,
      },
    });
    revalidatePath("/admin");
  } catch (error) {
    throw new Error("Failed to update user role.");
  }
}

export async function removeRole(formData: FormData) {
  const { sessionClaims } = await auth();
  const role = sessionClaims
    ? (sessionClaims as unknown as CustomJwtSessionClaim).metadata?.role
    : undefined;

  if (role !== "admin") {
    throw new Error("Only admins can remove roles.");
  }

  const client = await clerkClient();
  const userId = formData.get("id") as string;

  try {
    await client.users.updateUser(userId, {
      publicMetadata: {
        role: null,
      },
    });
    revalidatePath("/admin");
  } catch (error) {
    throw new Error("Failed to remove user role.");
  }
}
