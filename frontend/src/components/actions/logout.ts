"use server";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await authClient.signOut();
  redirect("/register");
}
