"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PlanSelector } from "@/components/pricing/plan-selector";

const plans = [
  {
    name: "Basic Plan",
    price: "₹0",
    features: [
      "Basic video sharing",
      "Limited playlists",
      "Community access",
    ],
  },
  {
    name: "Premium Plan",
    price: "$29",
    period: "/mo",
    features: [
      "Unlimited video sharing",
      "Custom playlists",
      "Group watching",
      "Priority support",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "$49",
    period: "/mo",
    features: [
      "All Premium features",
      "API access",
      "Custom branding",
      "Dedicated support",
      "Analytics dashboard",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Affordable Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
          <PlanSelector />
        </motion.div>

        {/* WIP: get the data from commented cards (features data) */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div> */}

        <PricingCards billing="monthly"  />
      </div>
    </section>
  );
}