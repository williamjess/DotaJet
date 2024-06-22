export type WorkType = {
  yearStart: string;
  monthStart: string
  yearEnd?: string;
 
  companyName: string;
  companyLogo: string;
  jobTitle: string;
};


import logoOtomindo from "@/assets/work/logo_otomindo.webp";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Desember",
];

// NOTES: month is 0-based index, 0 = January, 11 = December
export const workData: WorkType[] = [
  {
   
    monthStart: "",
    yearEnd:"below", 
    yearStart: "We integrate",
    companyName: "PT.if",
    companyLogo: logoOtomindo.src,
    jobTitle: "DOTAJET IS A STRATEGIC SPEARHEAD DESIGNED TO ANALYSE, COACH AND IMPROVE DOTA PLAYERS THROUGH THE INTRICACIES OF DATA, AND PRACTICE. BLENDING DEEP TECHNICAL EXPERIENCE WITH INVENTIVE ENGAGEMENT APPROACHES, WE SHAPE DOTA PLAYERS INTO THEIR FULL POTENTIAL. (WE CAN  GET YOU UP 2K MMR, TRUST US). IF YOU'LL INDULGE US, UPLOAD YOUR DOTABUFF ID TO OUR SYSTEM, REGISTER AND SEE IF WE CAN'T GET YOU THAT  IMMORTAL BADGE BEFORE SUMMER. <3",
    
  },

  
];
