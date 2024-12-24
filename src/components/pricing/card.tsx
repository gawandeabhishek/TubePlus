"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PriceDisplay } from "./price-display";
import { Plan } from "./types";
import { useToast } from "@/hooks/use-toast";

interface PricingCardProps {
  plan: Plan;
  billing: "monthly" | "yearly";
}

export function PricingCard({ plan, billing }: PricingCardProps) {
  const { toast } = useToast();
  const price = billing === "yearly" ? plan.price * 0.8 : plan.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ translateY: -8 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className={cn(
        "relative h-full transition-all duration-300",
        "hover:shadow-2xl",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br",
        `before:${plan.gradient}`,
        "before:opacity-20 before:transition-opacity hover:before:opacity-30",
        plan.popular && "border-2 border-primary shadow-xl",
        "transform-gpu perspective-1000 preserve-3d",
        "hover:translate-z-10"
      )}>
        <div className="relative z-10">
          {plan.popular && (
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1.5 shadow-lg">
                <Sparkles className="w-4 h-4 mr-2 inline-block" />
                Most Popular
              </Badge>
            </div>
          )}
          <CardHeader className="space-y-2 pt-8 pb-4">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-4xl font-bold tracking-tight">
                <PriceDisplay price={price} />
              </span>
              <span className="text-muted-foreground text-sm">
                per {billing === "monthly" ? "month" : "year"}
              </span>
            </div>
          </CardHeader>
          <CardContent className="pb-8">
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className={cn(
                "w-full h-12 text-base font-medium transition-all duration-300",
                plan.popular ? 
                  "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg hover:shadow-xl" :
                  "hover:scale-105"
              )}
              variant={plan.popular ? "default" : "outline"}
              onClick={() => {
                toast({
                  title: "Starting free trial",
                  description: `You selected the ${plan.name} plan.`,
                });
              }}
            >
              Start Free Trial
            </Button>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}