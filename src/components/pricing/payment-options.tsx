"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export function PaymentOptions() {
  return (
    <section className="text-center space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold"
      >
        Secure Payment Options
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center items-center space-x-6"
      >
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visa.svg" alt="Visa" className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity" />
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mastercard.svg" alt="Mastercard" className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity" />
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/paypal.svg" alt="PayPal" className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity" />
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/applepay.svg" alt="Apple Pay" className="h-8 w-auto opacity-50 hover:opacity-100 transition-opacity" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex justify-center items-center text-sm text-muted-foreground"
      >
        <Lock className="h-4 w-4 mr-2" />
        Secured by SSL encryption
      </motion.div>
    </section>
  );
}