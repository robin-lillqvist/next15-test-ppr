import { Suspense } from "react";
import StaticComponent from "./components/StaticComponent";
import DynamicNews from "./components/DynamicNews";

export const experimental_ppr = true;

export default function HomePage() {
  return (
    <>
      <StaticComponent />
      <Suspense fallback={<div>Loading latest news...</div>}>
        <DynamicNews />
      </Suspense>
    </>
  );
}
