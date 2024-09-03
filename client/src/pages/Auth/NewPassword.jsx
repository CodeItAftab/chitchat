import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewPassword() {
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
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
                className="border-slate-400"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="confirmPassword"
                placeholder="Confirm Password"
                required
                className="border-slate-400"
              />
            </div>
            <Button type="submit" className="w-full">
              Reset Password
            </Button>
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
