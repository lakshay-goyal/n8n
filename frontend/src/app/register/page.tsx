"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle, Github, Sparkles } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useRef } from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";


export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleSocialAuth = async (provider: string) => {
    setIsLoading(true);
    if (provider === "Google") {
      const data = await authClient.signIn.social({
        provider: "google",
      });
      if (data.error) {
        alert(data.error.message);
        setIsLoading(false);
        return;
      }
    }
    if (provider === "Github") {
      console.log("GitHub auth initiated");
      
      const data = await authClient.signIn.social({
        provider: "github",
      });
      if (data.error) {
        alert(data.error.message);
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
  };

  async function handleEmailAuth(type: string) {
    if (type === "signin") {
      if (emailRef.current && passwordRef.current) {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const { data, error } = await authClient.signIn.email({
          email,
          password,
          rememberMe: true
        }, {
          onRequest: (ctx) => {
            setIsLoading(true);
          },
          onSuccess: (ctx) => {
            setIsLoading(false);
            redirect("/dashboard");
          }
        });
        if (error) {
          alert(error.message);
          setIsLoading(false);
          return;
        }
      }
    }
    if (type === "signup") {
      if (nameRef.current && emailRef.current && passwordRef.current && confirmPasswordRef.current) {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
          alert("Passwords do not match");
          setIsLoading(false);
          return;
        }

        const { data, error } = await authClient.signUp.email({
          name,
          email,
          password,
        }, {
          onRequest: (ctx) => {
            setIsLoading(true);
          },
          onSuccess: (ctx) => {
            setIsLoading(false);
            redirect("/dashboard");
          }
        });
        if (error) {
          alert(error.message);
          setIsLoading(false);
          return;
        }
      }
    }
    setIsLoading(false);
  };

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()

  useEffect(() => {
    if (session) {
      redirect("/dashboard");
    }
  }, [session]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-accent p-4">
        <div className="w-full max-w-md">
          {/* Logo/Brand */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent">
                FlowAI
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">Welcome back! Please sign in to continue</p>
          </div>

          <Card className="border-2 shadow-xl">
            <Tabs defaultValue="signin" className="w-full">
              <CardHeader className="space-y-1">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="signin">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent className="space-y-4">



                {/* Sign In Form */}
                <TabsContent value="signin" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input id="signin-email" type="email" placeholder="name@example.com" ref={emailRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <Input id="signin-password" type="password" placeholder="Enter your password" ref={passwordRef} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <label
                        htmlFor="remember"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    <Button variant="link" className="px-0 font-normal">
                      Forgot password?
                    </Button>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handleEmailAuth("signin")}
                    disabled={isLoading}
                  >
                    Sign In
                  </Button>
                </TabsContent>

                {/* Sign Up Form */}
                <TabsContent value="signup" className="space-y-4 mt-4">
                  <Alert className="bg-secondary border-primary/20">
                    <AlertCircle className="h-4 w-4 text-primary" />
                    <AlertDescription className="text-sm">
                      Create an account to access all automation features
                    </AlertDescription>
                  </Alert>
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input id="signup-name" type="text" placeholder="John Doe" ref={nameRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="name@example.com" ref={emailRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" placeholder="Create a password" ref={passwordRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm">Confirm Password</Label>
                    <Input id="signup-confirm" type="password" placeholder="Confirm your password" ref={confirmPasswordRef} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Button variant="link" className="px-0 h-auto font-normal">
                        Terms of Service
                      </Button>
                    </label>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handleEmailAuth("signup")}
                    disabled={isLoading}
                  >
                    Create Account
                  </Button>
                </TabsContent>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                  </div>
                </div>

                {/* Social Auth Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    onClick={() => handleSocialAuth("Google")}
                    disabled={isLoading}
                    className="w-full"
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleSocialAuth("Github")}
                    disabled={isLoading}
                    className="w-full"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>


              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Separator />
                <p className="text-center text-sm text-muted-foreground">
                  By continuing, you agree to our{" "}
                  <Button variant="link" className="px-0 h-auto font-normal text-primary">
                    Privacy Policy
                  </Button>
                </p>
              </CardFooter>
            </Tabs>
          </Card>

          {/* Back to Home Link */}
          <div className="mt-6 text-center">
            <Link href="/">
              <Button variant="ghost" className="text-sm">
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
