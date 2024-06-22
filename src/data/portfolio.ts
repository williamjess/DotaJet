export type PortfolioType = {
  url?: string;
  urlMissingReason?: string;
  year: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

import kelaslyImage from "@/assets/portfolio/kelasly.webp";
import bonImage from "@/assets/portfolio/bon.webp";
import bpsdmPuprImage from "@/assets/portfolio/bpsdm-pupr.webp";
import lspBpsdmImage from "@/assets/portfolio/lsp-bpsdm.webp";
import posParkingTulungagungImage from "@/assets/portfolio/pos-parking-tulungagung.webp";
import puspasUnairImage from "@/assets/portfolio/puspas-unair.webp";
import exitaImage from "@/assets/portfolio/exita.webp";
import trakerKediriImage from "@/assets/portfolio/traker-kediri.webp";
import simantuImage from "@/assets/portfolio/simantu.webp";
import ePelatihanImage from "@/assets/portfolio/e-pelatihan.webp";
import panglimaEkspresImage from "@/assets/portfolio/panglima-ekspres.webp";
import meijiTimbanganImage from "@/assets/portfolio/meiji-timbangan.webp";
import ekinImage from "@/assets/portfolio/ekin.webp";
import appaDairyImage from "@/assets/portfolio/appa-dairy.webp";
import appaSportImage from "@/assets/portfolio/appa-sport.webp";
import lhrImage from "@/assets/portfolio/lhr.webp";

export const portfolioData: PortfolioType[] = [
  {
    url: "https://www.dota2.com/newsentry/4115798034511524384",
    year: "16th June 2024",
    title: "TI COPENHAGEN",
    description:
      "Returning this September, the best Dota teams from around the world will clash in Copenhagen's Royal Arena.",
    image: lhrImage.src,
    tags: ["News", "Esports", "DPC", "Tournament"],
  },
  {
    url: "https://dota2protracker.com/cheatsheets",
    year: "15th June 2024",
    title: "STRATZ CHEAT SHEETS",
    description: "ProTracker Cheat Sheets - Find  Item and Skill Builds for  Patch 7.36 Meta on one  page. Updates daily.",
    image: appaSportImage.src,
    tags: ["Esports", "Meta", "Informative", "Ranked"],
  },
  {
    url: "https://www.dota2.com/patches/7.36",
    year: "12th June 2024",
    title: "DOTA PATCH 7.36",
    description: "Dota update patch 7.36 has landed, with gameplay changes, item and hero updates, and more.  ",
    image: appaDairyImage.src,
    tags: ["Meta", "Informative", "Gameplay", "News"],
  },
  {
    url: "https://dota2protracker.com/meta",
    year: "12th June 2024",
    title: "PROTRACKER UPDATE",
    description:
      "See  Dota2protrackers new meta page, updated and overhauled completely for patch 7.36.",
    image: ekinImage.src,
    tags: ["Meta", "Informative", "Gameplay", "News"],
  },
  {
    urlMissingReason: "Match data not parsed yet",
    year: "7th June 2024",
    title: "High Rank NA Game",
    description:
      "",
    image: meijiTimbanganImage.src,
    tags: ["Arteezy", "Samson", "Sumail", "Resolution", "11k" , "Close match", "Comeback/Throw"],
  },
  {
    urlMissingReason: "Match data not parsed yet",
    year: "6th June 2024",
    title: "High Rank SEA Game",
    description:
      "",
    image: panglimaEkspresImage.src,
    tags: ["Raven", "Ares", "Ice", "Kenchi", "10k", "Comeback/Throw", "Flame"],
  },
  {
    urlMissingReason: "Match data not parsed yet",
    year: "4th June 2024",
    title: "High Rank SEA Game",
    description:
      "",
    image: ePelatihanImage.src,
    tags: ["Raven", "Moon", "Mushi", "MidOne", "Kenchi", "MtR",  "KaNG","Close game"],
  },
  {
    urlMissingReason: "Match  data not parsed yet",
    year: "4th June 2024",
    title: "High Rank EUW Game",
    description:
      "",
    image: simantuImage.src,
    tags: ["Slahser", "syndereN", "RYZE","Aonir", "Black^", "Fata,",  "Flame"],
  },
  {
    url: "https://stratz.com/matches/7807688617",
    year: "21st June 2024",
    title: "HIGH RANK NA GAME",
    description:
      "",
    image: trakerKediriImage.src,
    tags: ["12k","SumaiL", "swq", "9m", "GH", "OneJey", "Kiritych", "Flame"],
  },
  {
    url: "https://stratz.com/matches/7807688617",
    year: "21s June 2024",
    title: "HIGH RANK NA GAME",
    description:
      "",
    image: exitaImage.src,
    tags: ["10k", "LSM", "Samson" , "N1ne", "XRT", "Close game", "Flame", "Pauses"],
  },
  {
    url: "https://stratz.com/matches/7806515101",
    year: "20th June 2024",
    title: "HIGH RANK EU GAME",
    description:
      "",
    image: puspasUnairImage.src,
    tags: ["11K", "Qojqva", "N1ne", "Xibbe","Yamich", "Prada", "Whitemon", "Flame", ],
  },
  

];
