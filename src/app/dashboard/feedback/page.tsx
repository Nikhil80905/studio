import Image from "next/image";
import { FeedbackForm } from "./feedback-form";

export default function FeedbackPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
       <div className="relative overflow-hidden rounded-lg bg-card p-8 min-h-[250px] flex flex-col justify-center text-center">
         <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop"
            alt="Feedback"
            fill
            className="object-cover"
            data-ai-hint="team discussion"
          />
         <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/40 z-0"></div>
        <div className="relative z-10">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Submit Feedback</h1>
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              We value your opinion. Let us know how we can improve.
            </p>
        </div>
      </div>
      <div>
        <FeedbackForm />
      </div>
    </div>
  );
}
