import { CalculatorForms } from "./calculator-forms";

export default function CalculatorsPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Fitness Calculators</h1>
        <p className="text-muted-foreground mt-2">
          Essential tools to understand your body and help you plan your fitness goals.
        </p>
      </div>
      <div>
        <CalculatorForms />
      </div>
    </div>
  );
}
