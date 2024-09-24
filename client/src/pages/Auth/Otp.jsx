import { login, verifyOtp } from "@/app/slices/auth";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function Otp() {
  const [otp, setOtp] = useState(null);

  const dispatch = useDispatch();
  const { isLoggedIn, userId } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const getEmail = localStorage.getItem("email");
    try {
      const { payload } = await dispatch(
        verifyOtp({ email: getEmail, otp: otp })
      );
      localStorage.removeItem("email");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

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
            onSubmit={handleSubmit}
          >
            <InputOTP
              maxLength={6}
              className="w-[calc(100%-40px)] "
              onChange={(value) => setOtp(value)}
            >
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
            <Button type="submit" className="w-full mx-auto">
              Verify OTP
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
