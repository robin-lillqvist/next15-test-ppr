import { Suspense } from "react";
import StaticCategory from "../../components/StaticCategory";
import DynamicCategoryArticles from "../../components/DynamicCategoryArticles";

export const experimental_ppr = true;

export default function CategoryPage({ params }) {
  return (
    <>
      <StaticCategory id={params.id} />
      <Suspense fallback={<div>Loading articles...</div>}>
        <DynamicCategoryArticles id={params.id} />
      </Suspense>
    </>
  );
}
