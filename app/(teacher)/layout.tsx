import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import React from "react";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  return <RoleGate allowedRole={UserRole.TEACHER}>{children}</RoleGate>;
};

export default TeacherLayout;
