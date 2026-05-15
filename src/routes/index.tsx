import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/water/PhoneFrame";
import { HomeScreen } from "@/components/water/HomeScreen";
import { ListingScreen } from "@/components/water/ListingScreen";
import { DetailsScreen } from "@/components/water/DetailsScreen";
import { CheckoutScreen } from "@/components/water/CheckoutScreen";
import { TrackingScreen } from "@/components/water/TrackingScreen";
import { SubscriptionScreen } from "@/components/water/SubscriptionScreen";
import { ProfileScreen } from "@/components/water/ProfileScreen";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Berain — Premium Water Delivery" },
      { name: "description", content: "Premium water delivery for the Gulf. Gallons, cartons, and subscriptions delivered in 90 minutes." },
    ],
  }),
});

const screens = (onNavigate: (id: string) => void) => [
  { id: "home", label: "Home", el: <HomeScreen onNavigate={onNavigate} /> },
  { id: "listing", label: "Shop", el: <ListingScreen onNavigate={onNavigate} /> },
  { id: "details", label: "Product", el: <DetailsScreen onNavigate={onNavigate} /> },
  { id: "checkout", label: "Checkout", el: <CheckoutScreen onNavigate={onNavigate} /> },
  { id: "tracking", label: "Tracking", el: <TrackingScreen onNavigate={onNavigate} /> },
  { id: "plans", label: "Subscription", el: <SubscriptionScreen onNavigate={onNavigate} /> },
  { id: "profile", label: "Profile", el: <ProfileScreen onNavigate={onNavigate} /> },
];

function Index() {
  const [active, setActive] = useState("home");
  const currentScreens = screens(setActive);
  const activeScreen = currentScreens.find((s) => s.id === active);

  return (
    <main className="min-h-[100dvh] bg-background text-foreground mx-auto max-w-md w-full relative overflow-x-hidden" dir="rtl">
      {activeScreen?.el}
    </main>
  );
}
