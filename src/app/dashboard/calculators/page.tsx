import { CalculatorForms } from "./calculator-forms";

export default function CalculatorsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Fitness Calculators</h1>
        <p className="text-muted-foreground">
          Essential tools to understand your body and plan your goals.
        </p>
      </div>
      <CalculatorForms />
    </div>
  );
}
