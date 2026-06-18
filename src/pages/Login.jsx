import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginUser } from "../api/auth";
import useAuth from "../Hooks/useAuth";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await loginUser(data);
      console.log("Login response:", response);
      
      // The response should contain token and possibly user data
      // Adjust these field names based on your backend response
      const token = response.token || response.accessToken;
      const user = response.user || response.userData || { email: data.email };
      
      if (!token) {
        throw new Error("No token received from server");
      }
      
      login(user, token);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      const errorMessage = 
        err.response?.data?.message || 
        err.message || 
        "Login failed. Please try again.";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient (circle_at_top,_rgba(99,102,241,0.15),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),transparent_25%),linear-gradient(180deg,#eef2ff_0%,#eef7ff_100%)] flex items-center justify-center px-4 py-10">
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md">
        <Card className="shadow-2xl border border-white/70 bg-white/95 backdrop-blur-xl overflow-hidden">
          <CardHeader className="text-center pb-4 pt-8 px-6">
            <div className="mx-auto mb-5 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
              <LogIn className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-semibold text-slate-900">Welcome Back</CardTitle>
            <CardDescription className="mx-auto mt-2 max-w-xs text-sm text-slate-500">
              Sign in to your UniverseTrip account and continue planning your next great adventure.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 px-6 pb-4">
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            )}

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-sm font-medium text-slate-700">
                    Email Address
                  </FieldLabel>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 h-11 border-slate-200 bg-slate-50 focus:border-blue-500 focus:ring-blue-500"
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                    />
                  </div>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-sm font-medium text-slate-700">
                    Password
                  </FieldLabel>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 h-11 border-slate-200 bg-slate-50 focus:border-blue-500 focus:ring-blue-500"
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-700"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-4 px-8 pb-8 pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600">
              <span>Don't have an account?</span>
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="ml-1 font-semibold text-blue-600 hover:text-blue-800"
              >
                Sign up
              </button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default Login;