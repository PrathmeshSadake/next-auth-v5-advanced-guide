"use client";

import { UserRole } from "@prisma/client";

import { useCurrentRole } from "@/hooks/use-current-role";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { LogoutButton } from "./logout-button";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  // if (role !== allowedRole) {
  //   return (
  //     <FormError message='You do not have permission to view this content!' />
  //   );
  // }
  if (role !== allowedRole) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Card className={"w-[380px] mx-auto"}>
          <CardHeader>
            <CardTitle>
              You do not have permission to view this content!
            </CardTitle>
            <CardDescription>
              You don&apos;t have access to this. Your sign-in was successful
              but you don&apos;t have permission to access this resource.
            </CardDescription>
          </CardHeader>
          {/* <CardContent className='grid gap-4'>
            <div className=' flex items-center space-x-4 rounded-md border p-4'>
              <div className='flex-1 space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  Push Notifications
                </p>
                <p className='text-sm text-muted-foreground'>
                  Send notifications to device.
                </p>
              </div>
            </div>
          </CardContent> */}
          <CardFooter>
            <Button className='w-full'>
              <LogoutButton>Login with a different account?</LogoutButton>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};
