import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import React from "react";
import { Navbar } from "../(protected)/_components/navbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoleGate allowedRole={UserRole.ADMIN}>
      {" "}
      <div className='h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
        <Navbar />
        {children}
      </div>
    </RoleGate>
  );
};

export default AdminLayout;
