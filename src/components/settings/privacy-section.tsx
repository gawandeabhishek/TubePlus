"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Trash2 } from "lucide-react";

export default function PrivacySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Privacy Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Data Sharing</h4>
            <div className="flex items-center space-x-2">
              <Checkbox id="dataSharing" />
              <label
                htmlFor="dataSharing"
                className="text-sm text-muted-foreground"
              >
                Allow data sharing with third parties
              </label>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download My Data
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Trash2 className="h-4 w-4" />
              Clear Search History
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}