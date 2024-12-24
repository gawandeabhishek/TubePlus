"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PasswordSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="currentPassword" className="text-sm font-medium">
              Current Password
            </label>
            <Input id="currentPassword" type="password" />
          </div>

          <div className="grid gap-2">
            <label htmlFor="newPassword" className="text-sm font-medium">
              New Password
            </label>
            <Input id="newPassword" type="password" />
          </div>

          <div className="grid gap-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm New Password
            </label>
            <Input id="confirmPassword" type="password" />
          </div>

          <Button className="w-fit">Update Password</Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}