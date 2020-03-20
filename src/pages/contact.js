import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <form className="mx-auto md:w-1/2">
          <h2>Contact opnemen</h2>
          <p className="mb-8 leading-loose">
            Heeft u een vraag voor ons team? Of bent u als ziekenhuis of bedrijf
            geïnteresseerd om met ons samen te werken of uw expertise te delen?
            Neem dan contact met ons op via het onderstaande formulier.
          </p>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="first-name"
          >
            Naam
          </label>

          <input
            className="w-full md:w-1/2 mb-6 form-input"
            id="first-name"
            placeholder="Dr. Anders"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="last-name"
          >
            Organisatie
          </label>

          <input
            className="w-full md:w-1/2 mb-6 form-input"
            id="last-name"
            placeholder="Reinier de Graaf"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            Uw bericht/vraag
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="message"
            placeholder="Laat uw bericht achter..."
            rows="8"
          />

          <button className="px-4 py-2 text-sm font-bold text-white bg-japanese border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Versturen
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
