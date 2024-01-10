import React from "react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground ">
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" size="sm">
              Privacy Policy
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <h2 className="text-lg font-medium">Privacy Policy</h2>
              <p>
                This Privacy Policy outlines how your personal information is
                collected, used, and protected when you use our services.
              </p>
              <p>
                We may collect minimal personal information necessary for app
                functionality, and we do not share this information with third
                parties.
              </p>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" size="sm">
              Terms & Conditions
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <h2 className="text-lg font-medium">Terms & Conditions</h2>
              <p>
                By using our services, you agree to abide by the following terms
                and conditions. Failure to comply may result in the termination
                of your account.
              </p>
              <p>
                You are responsible for maintaining the security of your account
                and password. Do not share your password with others.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Footer;
