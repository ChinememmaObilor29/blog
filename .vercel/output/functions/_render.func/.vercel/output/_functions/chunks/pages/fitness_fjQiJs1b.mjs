/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, n as renderComponent } from '../astro_bm6pIj0q.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getCollection, $ as $$MainLayout } from './404_O_MtFCEQ.mjs';
import { $ as $$ArticleCard } from './__HU-nRFwG.mjs';

const $$Astro$1 = createAstro();
const $$Fitness$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Fitness$1;
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const healthTagArticles = allBlogArticles.filter(
    (article) => article.data.tags.includes("Fitness")
  );
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="text-2xl pb-3">Fitness</h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${healthTagArticles.map((article) => renderTemplate`${renderComponent($$result, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div>`;
}, "C:/Users/DELL/Documents/CODES/blog/src/components/Fitness.astro", void 0);

const $$Astro = createAstro();
const $$Fitness = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Fitness;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FitnessCompo", $$Fitness$1, {})} ` })}`;
}, "C:/Users/DELL/Documents/CODES/blog/src/pages/fitness.astro", void 0);

const $$file = "C:/Users/DELL/Documents/CODES/blog/src/pages/fitness.astro";
const $$url = "/fitness";

const fitness = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fitness,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Fitness$1 as $, fitness as f };
