/*
  Clay & Canopy design reminder:
  Project data is presented as an architectural archive: specific, calm, and factual.
  Only project names, locations, categories, and scope labels found in the source archive are used.
*/
export type Project = {
  slug: string;
  name: string;
  place: string;
  category: string;
  scope: "Bricks used" | "Construction";
  image: string;
  gallery: { src: string; label: string; alt: string }[];
  summary: string;
};

const materialDetail = "https://willdale.co.zw/wp-content/uploads/2022/10/Topaz-Dark-Rustic.jpg";

export const projects: Project[] = [
  {
    slug: "joina-city-building",
    name: "Joina City Building",
    place: "Harare CBD",
    category: "Commercial",
    scope: "Bricks used",
    image: "https://willdale.co.zw/wp-content/uploads/2022/06/joina.png",
    gallery: [
      { src: "https://willdale.co.zw/wp-content/uploads/2022/06/joina.png", label: "Project view", alt: "Joina City Building in Harare CBD" },
      { src: materialDetail, label: "Material reference", alt: "Warm fired-clay face brick detail" },
    ],
    summary: "A selected commercial project in Harare CBD, recorded in the Willdale project archive as a bricks-used project.",
  },
  {
    slug: "corner-house",
    name: "Corner House",
    place: "Harare CBD",
    category: "Commercial",
    scope: "Bricks used",
    image: "https://willdale.co.zw/wp-content/uploads/2022/06/C-lBiJsXoAEf0xb.jpeg",
    gallery: [
      { src: "https://willdale.co.zw/wp-content/uploads/2022/06/C-lBiJsXoAEf0xb.jpeg", label: "Project view", alt: "Corner House in Harare CBD" },
      { src: "https://willdale.co.zw/wp-content/uploads/2022/10/ash-blue-rustic.jpg", label: "Material reference", alt: "Ash blue rustic face brick detail" },
    ],
    summary: "A selected commercial project in Harare CBD, recorded in the Willdale project archive as a bricks-used project.",
  },
  {
    slug: "reserve-bank-of-zimbabwe",
    name: "Reserve Bank of Zimbabwe",
    place: "Harare CBD",
    category: "Civic",
    scope: "Bricks used",
    image: "https://willdale.co.zw/wp-content/uploads/2022/06/0811-1-1-RBZ-BUILDING.webp",
    gallery: [
      { src: "https://willdale.co.zw/wp-content/uploads/2022/06/0811-1-1-RBZ-BUILDING.webp", label: "Project view", alt: "Reserve Bank of Zimbabwe building in Harare" },
      { src: "https://willdale.co.zw/wp-content/uploads/2022/10/blue-multi-rustic-1.jpg", label: "Material reference", alt: "Blue multi rustic face brick detail" },
    ],
    summary: "A selected civic project in Harare CBD, recorded in the Willdale project archive as a bricks-used project.",
  },
  {
    slug: "northwest-high-school",
    name: "Northwest High School",
    place: "Harare",
    category: "Education",
    scope: "Construction",
    image: "https://willdale.co.zw/wp-content/uploads/2022/06/Northwest-High-School.jpg",
    gallery: [
      { src: "https://willdale.co.zw/wp-content/uploads/2022/06/Northwest-High-School.jpg", label: "Project view", alt: "Northwest High School in Harare" },
      { src: "https://willdale.co.zw/wp-content/uploads/2022/10/ash-blue-smooth-1.jpg", label: "Material reference", alt: "Ash blue smooth face brick detail" },
    ],
    summary: "A selected education project in Harare, recorded in the Willdale project archive as a construction project.",
  },
  {
    slug: "sam-levys-village",
    name: "Sam Levy’s Village",
    place: "Borrowdale, Harare",
    category: "Commercial",
    scope: "Bricks used",
    image: "https://willdale.co.zw/wp-content/uploads/2022/11/Adidas-Performance-Store.jpg",
    gallery: [
      { src: "https://willdale.co.zw/wp-content/uploads/2022/11/Adidas-Performance-Store.jpg", label: "Project view", alt: "Sam Levy’s Village project in Borrowdale, Harare" },
      { src: materialDetail, label: "Material reference", alt: "Dark rustic face brick detail" },
    ],
    summary: "A selected commercial project in Borrowdale, Harare, recorded in the Willdale project archive as a bricks-used project.",
  },
  {
    slug: "west-end-clinic",
    name: "West End Clinic",
    place: "Harare",
    category: "Healthcare",
    scope: "Bricks used",
    image: "https://willdale.co.zw/wp-content/uploads/2022/11/kkk.png",
    gallery: [
      { src: "https://willdale.co.zw/wp-content/uploads/2022/11/kkk.png", label: "Project view", alt: "West End Clinic in Harare" },
      { src: "https://willdale.co.zw/wp-content/uploads/2022/10/ash-blue-rustic.jpg", label: "Material reference", alt: "Ash blue rustic face brick detail" },
    ],
    summary: "A selected healthcare project in Harare, recorded in the Willdale project archive as a bricks-used project.",
  },
  {
    slug: "aspire-heights",
    name: "Aspire Heights",
    place: "Harare",
    category: "Residential",
    scope: "Construction",
    image: "https://willdale.co.zw/wp-content/uploads/2023/05/Aspire-Hi.jpg",
    gallery: [
      { src: "https://willdale.co.zw/wp-content/uploads/2023/05/Aspire-Hi.jpg", label: "Project view", alt: "Aspire Heights project in Harare" },
      { src: "https://willdale.co.zw/wp-content/uploads/2022/10/Topaz-Dark-Rustic.jpg", label: "Material reference", alt: "Topaz dark rustic face brick detail" },
    ],
    summary: "A selected residential project in Harare, recorded in the Willdale project archive as a construction project.",
  },
  {
    slug: "psc-sanganai-flats",
    name: "PSC Sanganai Flats",
    place: "Harare",
    category: "Residential",
    scope: "Construction",
    image: "https://willdale.co.zw/wp-content/uploads/2023/05/PSC-Sanganai-flats.jpg",
    gallery: [
      { src: "https://willdale.co.zw/wp-content/uploads/2023/05/PSC-Sanganai-flats.jpg", label: "Project view", alt: "PSC Sanganai Flats project in Harare" },
      { src: "https://willdale.co.zw/wp-content/uploads/2022/10/blue-multi-rustic-1.jpg", label: "Material reference", alt: "Blue multi rustic face brick detail" },
    ],
    summary: "A selected residential project in Harare, recorded in the Willdale project archive as a construction project.",
  },
];

export const projectCategories = ["All", "Commercial", "Civic", "Education", "Healthcare", "Residential"];
