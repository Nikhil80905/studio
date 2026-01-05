import Image from "next/image";
import { CalculatorForms } from "./calculator-forms";

export default function CalculatorsPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
       <div className="relative overflow-hidden rounded-lg bg-card p-8 min-h-[250px] flex flex-col justify-center text-center">
         <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
            alt="Fitness Calculators"
            fill
            className="object-cover"
            data-ai-hint="fitness gym"
          />
         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 z-0"></div>
        <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Fitness Calculators</h1>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Essential tools to understand your body and help you plan your fitness goals.
            </p>
        </div>
      </div>
      <div>
        <CalculatorForms />
      </div>
    </div>
  );
}
