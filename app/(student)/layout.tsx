import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import React from "react";

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  return <RoleGate allowedRole={UserRole.USER}>{children}</RoleGate>;
};

export default StudentLayout;
