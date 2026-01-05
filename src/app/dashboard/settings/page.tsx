import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import Image from 'next/image';

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="relative overflow-hidden rounded-lg bg-card p-8 min-h-[250px] flex flex-col justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1590487988256-5ed24a3e3535?q=80&w=2070&auto=format&fit=crop"
          alt="Settings"
          fill
          className="object-cover"
          data-ai-hint="gym settings"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Settings
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your account, profile, and notification preferences.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" defaultValue="28" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select defaultValue="male">
                  <SelectTrigger id="gender">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">Height (cm)</Label>
                <Input id="height" type="number" defaultValue="175" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" type="number" defaultValue="82.0" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="goal">Fitness Goal</Label>
              <Select defaultValue="muscle-gain">
                <SelectTrigger id="goal">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight-loss">Weight Loss</SelectItem>
                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="activity-level">Activity Level</Label>
              <Select defaultValue="intermediate">
                <SelectTrigger id="activity-level">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Manage your reminders.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
              <Label
                htmlFor="workout-reminders"
                className="flex flex-col space-y-1"
              >
                <span>Workout Reminders</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Get notified when it's time for your workout.
                </span>
              </Label>
              <Switch id="workout-reminders" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
              <Label
                htmlFor="meal-reminders"
                className="flex flex-col space-y-1"
              >
                <span>Meal Reminders</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Stay on track with your nutrition plan.
                </span>
              </Label>
              <Switch id="meal-reminders" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
              <Label
                htmlFor="water-reminders"
                className="flex flex-col space-y-1"
              >
                <span>Water Intake Reminders</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Stay hydrated throughout the day.
                </span>
              </Label>
              <Switch id="water-reminders" />
            </div>
            <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
              <Label
                htmlFor="inactivity-alerts"
                className="flex flex-col space-y-1"
              >
                <span>Inactivity Alerts</span>
                <span className="font-normal leading-snug text-muted-foreground">
                  Get a nudge when you've been inactive for too long.
                </span>
              </Label>
              <Switch id="inactivity-alerts" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
