"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import VantaFog from "./components/VantaFog";
import { AuroraText } from "./components/magicui/aurora-text";
import { ShimmerButton } from "./components/magicui/shimmer-button";
import { MagicCard } from "./components/magicui/magic-card";
import { Marquee } from "./components/magicui/marquee";
import { CardContent, CardHeader } from "./components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";

import styles from "./HomePage.module.css";

const profile = "/profile.jpg";

const reviews = [
  { name: "Arjun Malhotra", username: "@arjun_founder", body: "SOW Generator helped me save so much time preparing contracts..." },
  { name: "Neha Gupta", username: "@neha_g", body: "The AI-driven templates were precise and professional..." },
  { name: "Vikram Rao", username: "@vikram_startup", body: "Instead of writing everything from scratch, I had a complete draft in minutes..." },
  { name: "Sofia Khan", username: "@sofia_k", body: "We quickly customized the SOW for multiple clients, thanks to the AI suggestions..." },
  { name: "Karan Patel", username: "@karanp_growth", body: "The workflow made client onboarding much smoother..." },
  { name: "Emily Chen", username: "@emily_builds", body: "As a freelancer, I finally have professional SOWs without the legal headache..." },
];

const steps = [
  { title: "Step 1: Enter Project Details", description: "Provide your project scope, deliverables, and timelines." },
  { title: "Step 2: Define Roles & Responsibilities", description: "Specify who is responsible for each part of the project." },
  { title: "Step 3: Set Milestones & Payment Terms", description: "Outline key milestones and payment schedules." },
  { title: "Step 4: Review & Customize", description: "The AI generates a draft SOW which you can tweak." },
  { title: "Step 5: Download & Share", description: "Get a polished SOW ready to send to clients." },
];

const ReviewCard = ({ name, username, body }: { name: string; username: string; body: string }) => (
  <figure className={styles.reviewCard}>
    <div className={styles.reviewHeader}>
      <Image className="rounded-full" width={32} height={32} alt={name} src={profile} />
      <div>
        <figcaption className={styles.reviewName}>{name}</figcaption>
        <p className={styles.reviewUsername}>{username}</p>
      </div>
    </div>
    <blockquote className={styles.reviewBody}>{body}</blockquote>
  </figure>
);

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className={styles.main}>
      <VantaFog />

      {/* Hero Section */}
       <section className={styles.heroSection}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">
          <AuroraText speed={0.5}>
            Generate Your SOW Effortlessly
          </AuroraText>
        </h1>
        <p className="text-lg mb-6 text-center md:text-left">
          Let AI help you create professional Statements of Work in minutes.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link href="/generate-sow">
            <ShimmerButton className="!bg-black !text-white">
            <span>Build My SOW</span>
          </ShimmerButton>
          </Link>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="pt-20 lg:pt-32 pb-10 px-4 md:px-36 mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black dark:text-blue-500">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <MagicCard
              key={idx}
              className="rounded-xl px-5 py-4 bg-white shadow-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 h-full"
            >
              <CardHeader className="p-0">
                <h3 className="text-lg font-semibold text-black dark:text-white">{step.title}</h3>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-sm leading-snug text-gray-800 dark:text-gray-300">{step.description}</p>
              </CardContent>
            </MagicCard>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className={styles.reviewsSection}>
        <Marquee pauseOnHover>
          {reviews.slice(0, 3).map((review) => <ReviewCard key={review.username} {...review} />)}
        </Marquee>
        <Marquee reverse pauseOnHover>
          {reviews.slice(3).map((review) => <ReviewCard key={review.username} {...review} />)}
        </Marquee>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h1 className="text-4xl font-bold mb-8">FAQ's</h1>
        <Accordion type="single" collapsible defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the SOW Generator?</AccordionTrigger>
            <AccordionContent>
              It is an AI-powered tool that generates professional Statements of Work quickly, based on your project details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I customize the generated SOW?</AccordionTrigger>
            <AccordionContent>
              Yes! The generated SOW can be edited to fit your specific project requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it suitable for freelancers and agencies?</AccordionTrigger>
            <AccordionContent>
              Absolutely. The tool is designed for both individual freelancers and agencies handling multiple clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}