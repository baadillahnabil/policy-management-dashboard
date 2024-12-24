import { redirect } from "next/navigation";

import { PATH } from "@/app/_utils/routes";

export async function GET() {
  return redirect(PATH.OVERVIEW);
}
