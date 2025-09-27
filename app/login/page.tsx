import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
import RahLogo from "@/app/ui/rah-logo";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="flex w-full items-end bg-blue-500 p-3">
          <div className="w-32 text-white md:w-36">
            <RahLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
