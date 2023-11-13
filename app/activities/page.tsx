"use client";

import React from "react";
import { HomePage } from "@/components/home";
import Form from "@/components/activities/form";
import { ActivitiesPage } from "@/components/activities";

export default function Home() {
  return (
    <div className="">
      {/* <Form /> */}
      <ActivitiesPage />
    </div>
  );
}
