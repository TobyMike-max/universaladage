"use client"
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { toast } from "sonner";

import { Textarea } from "@/components/ui/textarea";
import { PiCheckLight, PiSmiley } from "react-icons/pi";
import Navbar from "@/components/Navbar";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Universaladage for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Talent and Artist Management",
    "Wikipedia and PR Services",
    "Website Development",
    "SEO & Advertising",
    "Music & Movie Distribution",
    "Social Media Management",
  ]),
  info: z.string(),
  terms: z.boolean(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help: "Evaluate Universaladage for my company" | "Learn More" | "Get a Quote" | "Other";
  services:
    | "Talent and Artist Management"
    | "Wikipedia and PR Services"
    | "Website Development"
    | "SEO & Advertising"
    | "Music & Movie Distribution"
    | "Social Media Management";
  info: string;
  terms: boolean;
};

function scrollToService() {
  // Implement the scroll to service functionality here
}

function scrollToFaq() {
  // Implement the scroll to FAQ functionality here
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      help: "Learn More",
      services: "Talent and Artist Management",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Navbar 
      scrollToFaq={scrollToFaq}
      scrollToService={scrollToService}
      />
      <div className="mt-15 md:flex items-start justify-center md:py-20 px-6">
        <div className="">
          <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our sales team
          </div>
          <div
            className="py-4 text-gray-300"
          >
            Let&apos;s talk about how Universaladage can help your team work better.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
              Empower brands & talents with powerful marketing, social media, and SEO strategies
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
              Promote artists and influencers through strategic 
              talent management and digital growth.
              </div>
            </div>

            <div className="flex gap-4  ">
              <div className=" font-normal pb-4 ">
              Distribute and amplify content across global music 
              and movie platforms <br />to tell compelling stories that 
              captivate audiences and drive influence.
              </div>
            </div>
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3">
              <div className="md:flex items-center gap-6 ">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-sm bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        First name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center w-full">
                      <FormLabel className="text-sm bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Last name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Company name?
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Services you are interested in
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="flex gap-4">
                          <SelectItem value="Talent and Artist Management">
                          Talent and Artist Management
                          </SelectItem>
                        </div>
                        <SelectItem value="Wikipedia and PR Services">Wikipedia and PR Services</SelectItem>
                        <SelectItem value="Website Development">Website Development</SelectItem>
                        <SelectItem value="SEO & Advertising">SEO & Advertising</SelectItem>
                        <SelectItem value="Music & Movie Distribution">Music & Movie Distribution</SelectItem>
                        <SelectItem value="Social Media Management">Social Media Management</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem className="items-center justify-center  w-full">
                    <FormLabel className="text-sm bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      How can we help ?
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <div className="flex gap-4">
                          <SelectItem value="Evaluate Bird for my company">
                            Evaluate Universaladage for my company
                          </SelectItem>
                        </div>
                        <SelectItem value="Learn More">Learn More</SelectItem>
                        <SelectItem value="Get a Quote">Get a Quote</SelectItem>

                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-center justify-center w-full">
                    <FormLabel className="text-sm bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Anything else ?
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 items-center">
                <div>
                  <Checkbox
                    className="
                outline
                border-2
                text-sm
                font-light
                bg-clip-text text-white bg-gradient-to-b from-neutral-50 to-neutral-400
                "
                  />
                </div>
                <div className="text-xs font-light  md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  I agree to Universaladage&apos; sending marketing communications related
                  to bird.
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="text-sm font-light" disabled={loading} onClick={() => form.handleSubmit(onSubmit)}>
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div
                className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
                <div className="w-80 py-20">
                  <PiSmiley className="text-6xl text-[#6c6684] mx-auto" />

                  <div className="text-gray-500 font-light  text-center justify-center mx-auto py-10">
                    We&apos;ve received your inquiry and will be contacting you
                    via email shortly.
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}