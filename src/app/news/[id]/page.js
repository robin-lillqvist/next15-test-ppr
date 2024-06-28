import { Suspense } from "react";
import DynamicArticle from "../../components/DynamicArticle";

export const experimental_ppr = true;

export default function NewsArticlePage({ params }) {
  return (
    <>
      <Suspense fallback={<div>Loading article...</div>}>
        <DynamicArticle id={params.id} />
      </Suspense>
    </>
  );
}
