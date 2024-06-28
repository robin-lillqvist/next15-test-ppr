import { Suspense } from "react";
import StaticProfile from "../components/StaticProfile";
import DynamicUserActivity from "../components/DynamicUserActivity";

export const experimental_ppr = true;

export default function ProfilePage() {
  return (
    <>
      <StaticProfile />
      <Suspense fallback={<div>Loading user activity...</div>}>
        <DynamicUserActivity />
      </Suspense>
    </>
  );
}
