'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

function AnimatedResult({ title, value, unit }: { title: string, value: string, unit?: string }) {
  return (
    <div
      key={value}
      className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-4 text-center w-full animate-fade-in-up"
    >
      <p className="text-sm text-accent-foreground/80">{title}</p>
      <p className="text-3xl font-bold text-white">
        {value} {unit && <span className="text-base font-medium text-accent-foreground/80">{unit}</span>}
      </p>
    </div>
  );
}


export function CalculatorForms() {
  const [bmiResult, setBmiResult] = useState<string | null>(null);
  const [bmrResult, setBmrResult] = useState<string | null>(null);
  const [calorieResult, setCalorieResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('bmi');

  const calculateBmi = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const height = parseFloat(formData.get('height') as string);
    const weight = parseFloat(formData.get('weight') as string);
    if (height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmiResult(bmi.toFixed(2));
    }
  };

  const calculateBmr = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const height = parseFloat(formData.get('height') as string);
    const weight = parseFloat(formData.get('weight') as string);
    const age = parseInt(formData.get('age') as string);
    const gender = formData.get('gender') as string;

    if (height > 0 && weight > 0 && age > 0 && gender) {
      let bmr;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      setBmrResult(bmr.toFixed(0));
    }
  };

  const calculateCalories = (e: React-FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bmr = parseFloat(bmrResult || formData.get('bmr') as string);
    const activityLevel = parseFloat(formData.get('activityLevel') as string);

    if (bmr > 0 && activityLevel > 0) {
      const maintenanceCalories = bmr * activityLevel;
      setCalorieResult(maintenanceCalories.toFixed(0));
    }
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-white/10">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted/50">
          <TabsTrigger value="bmi">BMI</TabsTrigger>
          <TabsTrigger value="bmr">BMR</TabsTrigger>
          <TabsTrigger value="calories">Calories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="bmi" className="animate-fade-in">
          <form onSubmit={calculateBmi}>
            <CardHeader>
              <CardTitle>BMI Calculator</CardTitle>
              <CardDescription>Calculate your Body Mass Index.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bmi-height">Height (cm)</Label>
                <Input id="bmi-height" name="height" type="number" placeholder="e.g., 175" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bmi-weight">Weight (kg)</Label>
                <Input id="bmi-weight" name="weight" type="number" placeholder="e.g., 70" required />
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <Button type="submit" className="w-full">Calculate BMI</Button>
              {bmiResult && <AnimatedResult title="Your BMI is" value={bmiResult} />}
            </CardFooter>
          </form>
        </TabsContent>

        <TabsContent value="bmr" className="animate-fade-in">
          <form onSubmit={calculateBmr}>
            <CardHeader>
              <CardTitle>BMR Calculator</CardTitle>
              <CardDescription>Calculate your Basal Metabolic Rate.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup name="gender" defaultValue="male" className="flex gap-4 pt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bmr-age">Age</Label>
                <Input id="bmr-age" name="age" type="number" placeholder="e.g., 25" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bmr-height">Height (cm)</Label>
                <Input id="bmr-height" name="height" type="number" placeholder="e.g., 175" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bmr-weight">Weight (kg)</Label>
                <Input id="bmr-weight" name="weight" type="number" placeholder="e.g., 70" required />
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <Button type="submit" className="w-full">Calculate BMR</Button>
              {bmrResult && <AnimatedResult title="Your BMR is" value={bmrResult} unit="kcal/day" />}
            </CardFooter>
          </form>
        </TabsContent>

        <TabsContent value="calories" className="animate-fade-in">
          <form onSubmit={calculateCalories}>
            <CardHeader>
              <CardTitle>Daily Calorie Needs</CardTitle>
              <CardDescription>Estimate your daily maintenance calories.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="calorie-bmr">BMR (kcal)</Label>
                <Input id="calorie-bmr" name="bmr" type="number" placeholder="Calculate BMR first" defaultValue={bmrResult || ''} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="activity-level">Activity Level</Label>
                <Select name="activityLevel" required>
                  <SelectTrigger id="activity-level">
                    <SelectValue placeholder="Select your activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.2">Sedentary (little to no exercise)</SelectItem>
                    <SelectItem value="1.375">Lightly active (light exercise/sports 1-3 days/week)</SelectItem>
                    <SelectItem value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</SelectItem>
                    <SelectItem value="1.725">Very active (hard exercise/sports 6-7 days a week)</SelectItem>
                    <SelectItem value="1.9">Extra active (very hard exercise/physical job)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <Button type="submit" className="w-full">Calculate Calories</Button>
              {calorieResult && <AnimatedResult title="Maintenance Calories:" value={calorieResult} unit="kcal/day" />}
            </CardFooter>
          </form>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
