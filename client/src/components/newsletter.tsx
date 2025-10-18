import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertNewsletterSignupSchema, type InsertNewsletterSignup } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const { toast } = useToast();
  
  const form = useForm<InsertNewsletterSignup>({
    resolver: zodResolver(insertNewsletterSignupSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertNewsletterSignup) => {
      return await apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertNewsletterSignup) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-24 sm:py-32 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Stay Connected
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Subscribe to our newsletter for updates, behind-the-scenes content, and special offers
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="Enter your email address" 
                        {...field} 
                        data-testid="input-newsletter-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={mutation.isPending}
                data-testid="button-subscribe"
              >
                {mutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
