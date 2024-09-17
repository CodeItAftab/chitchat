import { login, setNewPassword } from "@/app/slices/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function NewPassword() {
  const { token: resetToken } = useParams();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const { payload } = await dispatch(
          setNewPassword({ token: resetToken, password })
        );
        const { status, token, message, email, userId } = payload;
        if (status === "success") {
          toast.success(message);
          dispatch(login({ isLoggedIn: true, token, email, userId }));
        } else {
          toast.error(message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  }

  if (isLoggedIn) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div className="w-full lg:grid  lg:grid-cols-2 h-full">
      <div className="flex items-center justify-center lg:py-0 lg:pb-24 py-20 ">
        <div className="mx-auto grid w-[350px] gap-8">
          <div className="grid gap-4 text-center mb-4">
            <h1 className="text-3xl font-bold">New Password</h1>

            <p className="text-balance text-muted-foreground leading-none">
              Enter a new password.
            </p>
          </div>
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
                className="border-slate-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required
                className="border-slate-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
          </form>
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
