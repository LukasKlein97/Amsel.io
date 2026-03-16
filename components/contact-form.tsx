"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isSubmitted) {
      timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xkgjalea", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-md">
      <h3 className="text-lg font-semibold mb-4 text-white">Kontaktieren Sie uns</h3>
      <p className="text-orange-50/80 mb-6">
        Senden Sie uns eine Nachricht und wir melden uns zeitnah bei Ihnen.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-orange-100/90">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Ihr Name"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-orange-200/40 focus:ring-orange-200/20 backdrop-blur-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-orange-100/90">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ihre@email.de"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-orange-200/40 focus:ring-orange-200/20 backdrop-blur-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-orange-100/90">
            Mobilnummer
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+49 123 456789"
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-orange-200/40 focus:ring-orange-200/20 backdrop-blur-sm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-orange-100/90">
            Nachricht
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Ihre Nachricht"
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:border-orange-200/40 focus:ring-orange-200/20 backdrop-blur-sm"
          />
        </div>
        {isSubmitted ? (
          <div className="flex items-center justify-center gap-2 py-3 px-4 bg-orange-400/20 border border-orange-200/40 text-orange-100 rounded-xl backdrop-blur-sm animate-fade-in">
            <CheckCircle2 className="h-5 w-5 text-orange-200" />
            <span className="font-medium">Anfrage erfolgreich gesendet</span>
          </div>
        ) : (
          <Button type="submit" className="w-full">
            Absenden
          </Button>
        )}
      </form>
    </div>
  );
}
