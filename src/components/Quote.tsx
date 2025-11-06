"use client";

import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Thank you! We will get back to you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);

      // toast.error("Something went wrong. Please try again.",error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xovpzode"
        method="POST"
        className="space-y-6"
      >
        {/* Hidden fields for better email delivery */}
        <input
          type="hidden"
          name="_subject"
          value="Belgium Buses"
        />

        {/* Reason for Travel */}
        <div>
          <Label htmlFor="reason_for_travel">
            Reason For Travel <span className="text-red-500">*</span>
          </Label>
          <Select name="reason_for_travel" required>
            <SelectTrigger>
              <SelectValue placeholder="Please Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="For Company">For Company</SelectItem>
              <SelectItem value="For School">For School</SelectItem>
              <SelectItem value="For Leisure">For Leisure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstname">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input id="firstname" name="firstname" required />
          </div>
          <div>
            <Label htmlFor="lastname">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input id="lastname" name="lastname" required />
          </div>
        </div>

        {/* Email & Phone */}
        <div>
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input id="email" type="email" name="email" required />
        </div>
        <div>
          <Label htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input id="phone" type="tel" name="phone" required />
        </div>

        {/* Company/School */}
        <div>
          <Label htmlFor="company">
            Company/School <span className="text-red-500">*</span>
          </Label>
          <Input id="company" name="company" required />
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message">Your Request Details</Label>
          <Textarea id="message" name="message" rows={4} />
        </div>

        <Button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </>
  );
}
