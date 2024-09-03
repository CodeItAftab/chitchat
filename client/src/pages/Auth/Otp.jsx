import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import toast from "react-hot-toast";

export default function Otp() {
  const notify = () => toast.success("Here is your toast.", { duration: 2000 });

  return (
    <div className="w-full lg:grid  lg:grid-cols-2 h-full">
      <div className="flex items-center justify-center lg:py-0 lg:pb-12 py-20 ">
        <div className="mx-auto grid w-[380px] gap-6 items-start">
          <div className="grid gap-4 text-center mb-4">
            <h1 className="text-2xl font-bold">Verify OTP</h1>

            <p className="text-balance text-muted-foreground leading-none">
              Enter the OTP sent to your registered email address.
            </p>
          </div>
          <form
            className="grid gap-10 mx-auto items-start"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(e.target[0].value);
            }}
          >
            <InputOTP maxLength={6} className="w-[calc(100%-40px)] ">
              <InputOTPGroup>
                <InputOTPSlot className="border-slate-400" index={0} />
                <InputOTPSlot className="border-slate-400" index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot className="border-slate-400" index={2} />
                <InputOTPSlot className="border-slate-400" index={3} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot className="border-slate-400" index={4} />
                <InputOTPSlot className="border-slate-400" index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Button type="submit" className="w-full mx-auto" onClick={notify}>
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
