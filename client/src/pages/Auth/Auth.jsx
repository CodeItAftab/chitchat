import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import googlLogo from "../../assets/google.svg";

import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "@/app/slices/auth";

Auth.propTypes = {
  isLoginPage: PropTypes.bool,
};

export default function Auth({ isLoginPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let data;
    try {
      if (isLoginPage) {
        data = { email: formData.email, password: formData.password };
      } else {
        data = { ...formData };
      }

      const url = `http://localhost:3000/auth/${
        isLoginPage ? "login" : "register"
      }`;

      console.log(data);
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await resp.json();
      if (res.status === "success") {
        toast.success(res.message, { duration: 3000 });
        if (isLoginPage) {
          dispatch(login({ isLoggedIn: true, token: res.token }));
        } else {
          navigate("/auth/verify-otp", { replace: true });
        }
      } else if (res.status === "error") {
        toast.error("Incorrect Email or password", { duration: 3000 });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full lg:grid  lg:grid-cols-2 h-full">
      <div className="flex items-center justify-center lg:py-0 py-10 ">
        <div className="mx-auto grid w-[350px] gap-8">
          <div className="grid gap-4 text-center mb-4">
            <h1 className="text-3xl font-bold">
              {isLoginPage ? "Login" : "Register"}
            </h1>
            {isLoginPage ? (
              <p className="text-balance text-muted-foreground leading-none">
                Enter your email below to login to your account
              </p>
            ) : (
              <p className="text-balance text-muted-foreground leading-none">
                Enter your details to register
              </p>
            )}
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            {!isLoginPage && (
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="Your Name"
                  required
                  className="border-slate-400"
                  autoComplete="on"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => {
                      return { ...prev, name: e.target.value };
                    })
                  }
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-slate-400"
                autoComplete="on"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="border-slate-400"
                autoComplete="on"
                value={formData.password}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
            </div>
            <Link
              to="/reset-password"
              className=" inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button
              variant="outline"
              className="w-full mt-4 flex items-center gap-2 justify-center"
            >
              <img src={googlLogo} alt="google-logo" className="h-5" />
              <span>Login with Google</span>
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?
            <Link href="#" className="underline">
              Sign up
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
