export interface Feature {
    text: string;
    tooltip?: string;
  }
  
  export interface Plan {
    name: string;
    price: number;
    features: Feature[];
    popular: boolean;
    gradient: string;
  }