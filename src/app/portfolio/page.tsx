import { Metadata } from "next";

import { PortfolioList } from "@/components/portfolio";
import { Container } from "@/components/container";

import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of DotaJet Users",
};

export default function Portfolio() {
  return (
    <Container>
      <section className="mb-12">
        <h2 className="mb-4 text-7xl font-bold">Blog</h2>
        <p>
          
        </p>
      </section>

      <PortfolioList portfolioData={portfolioData} />
    </Container>
  );
}
