"use client";

import React from "react";
import ExamplePage from "@/components/ExamplePage";
import { DifficultyEnum } from "@/enums/difficulty.enum";
import { StatusEnum } from "@/enums/status.enum";

const MinaSchedulerPage: React.FC = () => {
  const conclusions = {
    keyPoints: [],
    detailedDescription:
      "A customizable and flexible calendar component for React that allows you to manage and display events in day, week, or month views. This library uses Next UI components for its user interface, so to ensure a consistent UI experience, make sure to use it inside a Next UI project.",
    pros: [
      "Highly customizable and flexible for various use cases",
      "Supports multiple views (day, week, month)",
      "Built-in event management with validation",
      "Responsive design for mobile devices",
      "Smooth animations using Framer Motion",
      "Integrates well with Next UI and Shadcn UI components",
      "Uses Zod for schema validation, ensuring data integrity",
    ],
    cons: [],
  };

  return (
    <ExamplePage
      title="Mina Scheduler"
      description="A customizable and flexible calendar component for React using Next UI."
      difficulty={DifficultyEnum.Medium}
      status={StatusEnum.Pending}
      conclusions={conclusions}
    >
      <MinaSchedulerComponent />
    </ExamplePage>
  );
};

export default MinaSchedulerPage;

const MinaSchedulerComponent = () => {
  return (
    <div>
      <h1>Mina Scheduler Component</h1>
      <p>This is a placeholder for the Mina Scheduler component.</p>
    </div>
  );
};
