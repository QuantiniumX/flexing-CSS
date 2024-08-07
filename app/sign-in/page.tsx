import LoginForm from "@/components/Login-form";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Page() {
  const { userId } = auth();
  const isAuth = !!userId;

  if (isAuth) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <LoginForm />
    </div>
  );
}
