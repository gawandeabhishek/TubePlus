"use client";

import { motion } from "framer-motion";
import { PlanSelector } from "@/components/pricing/plan-selector";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PremiumFeatures } from "@/components/pricing/premium-features";
import { PaymentOptions } from "@/components/pricing/payment-options";
import { FAQ } from "@/components/pricing/faq";
// import { Footer } from "@/components/pricing/footer";
import { Navbar } from "@/components/landing-page/navbar";
import { Footer } from "@/components/landing-page/footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main id="pricing" className="container mx-auto px-4 py-24 space-y-12 md:space-y-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 px-4"
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Choose Your Plan</h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
          <PlanSelector />
        </motion.section>

        <PricingCards billing="monthly" />
        <PremiumFeatures />
        <PaymentOptions />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}