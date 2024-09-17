import { resetPassword } from "@/app/slices/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { payload } = await dispatch(resetPassword({ email }));
      const { status, message } = payload;
      if (status === "success") {
        toast.success(message);
        setEmail("");
        navigate("/auth/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setEmail("");
    }
  }

  return (
    <div className="w-full lg:grid  lg:grid-cols-2 h-full">
      <div className="flex items-center justify-center lg:py-0 py-24 ">
        <div className="mx-auto grid w-[350px] gap-8">
          <div className="grid gap-4 text-center mb-4">
            <h1 className="text-3xl font-bold">Reset Password</h1>

            <p className="text-balance text-muted-foreground leading-none">
              Enter your email below to reset your password.
            </p>
          </div>
          <form className="grid gap-8" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                required
                className="border-slate-400"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Aready have an account?
            <Link href="#" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src=""
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
