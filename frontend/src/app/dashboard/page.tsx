import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import Navbar from "@/components/Navbar";
import { redirect } from "next/navigation";

export default async function Dashboard() {

const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})

if(!session){
    redirect("/register");
}

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
    </div>
  );
}
