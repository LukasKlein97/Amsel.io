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
      <h3 className="text-lg font-semibold mb-4">Kontaktieren Sie uns</h3>
      <p className="text-gray-300 mb-4">
        Senden Sie uns eine Nachricht und wir melden uns zeitnah bei Ihnen.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Ihr Name"
            required
            className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="ihre@email.de"
            required
            className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-white">
            Nachricht
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Ihre Nachricht"
            className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400"
          />
        </div>
        {isSubmitted ? (
          <div className="flex items-center justify-center gap-2 py-2 px-4 bg-green-50 text-green-600 rounded-lg animate-fade-in">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">Anfrage erfolgreich gesendet</span>
          </div>
        ) : (
          <Button
            type="submit"
            className="w-full bg-white text-slate-900 hover:bg-gray-100"
          >
            Absenden
          </Button>
        )}
      </form>
    </div>
  );
}
