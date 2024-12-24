import { Plan } from "./types";

export const plans: Plan[] = [
    {
      name: "Basic",
      price: 9.99,
      features: [
        { text: "Basic features", tooltip: "Access to essential features to get you started" },
        { text: "1 user", tooltip: "Perfect for individual users" },
        { text: "5GB storage", tooltip: "Secure cloud storage for your files" },
        { text: "Email support", tooltip: "Get help within 24 hours" },
        { text: "Basic analytics", tooltip: "Track basic usage metrics" }
      ],
      popular: false,
      gradient: "from-blue-500/20 to-cyan-400/20"
    },
    {
      name: "Premium",
      price: 19.99,
      features: [
        { text: "All Basic features", tooltip: "Everything in Basic, plus more" },
        { text: "5 users", tooltip: "Perfect for small teams" },
        { text: "50GB storage", tooltip: "Expanded storage for growing needs" },
        { text: "Priority support", tooltip: "Get help within 4 hours" },
        { text: "Advanced analytics", tooltip: "Detailed insights and reports" },
        { text: "Custom branding", tooltip: "Add your logo and brand colors" }
      ],
      popular: true,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Family",
      price: 29.99,
      features: [
        { text: "All Premium features", tooltip: "Everything in Premium, plus more" },
        { text: "10 users", tooltip: "Perfect for larger teams" },
        { text: "100GB storage", tooltip: "Ample space for all your needs" },
        { text: "24/7 support", tooltip: "Round-the-clock assistance" },
        { text: "Enterprise analytics", tooltip: "Advanced reporting and insights" },
        { text: "Custom integrations", tooltip: "Connect with your favorite tools" },
        { text: "API access", tooltip: "Build custom solutions" }
      ],
      popular: false,
      gradient: "from-orange-500/20 to-yellow-500/20"
    }
  ] as const;