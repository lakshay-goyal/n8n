"use client"

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Workflow
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  async function logoutHandler() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/register");
        },
      },
    });
  }

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()

  useEffect(() => {
    if (session) {
      setIsLogin(true);
    }
  }, [session]);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pink-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" ><div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Workflow className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
              AutoFlow AI
            </span>
          </div></Link>

          <div className="hidden md:flex items-center gap-8">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-pink-600">
                    Features
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Explore our powerful features</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button variant="ghost" className="text-gray-700 hover:text-pink-600">
              Integrations
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-pink-600">
              Pricing
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-pink-600">
              Docs
            </Button>
          </div>

          <div className="flex items-center gap-3">
            {isLogin ? (
              <div className="flex items-center gap-4">
                <div className="text-gray-700 hover:text-pink-600">
                  Welcome, {session?.user?.name}
                </div>
              <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white" onClick={logoutHandler}>
                Logout
              </Button>
              </div>
            ) : (
              <div>
                <Button variant="ghost" className="text-gray-700 hover:text-pink-600" onClick={() => router.push("/register")}>
                  Sign In
                </Button>
                <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white" onClick={() => router.push("/register")}>
                  Start Free Trial
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
