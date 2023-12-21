"use server";
import { revalidatePath } from 'next/cache'
import { create } from "@/database/models/calendar";

export async function initializeDayAction(formData: FormData) {
  const date = formData.get("date");
  const entity = await create(date as string);
  revalidatePath("/" + date);
  return { data: entity }
}