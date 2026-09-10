export type CertificateCategory = "ai" | "computerScience" | "web" | "design";

export interface Certificate {
  title: string;
  year: string;
  category: CertificateCategory;
}

export const certificates: Certificate[] = [
  { title: "Prompt Engineering for ChatGPT", year: "2025", category: "ai" },
  { title: "DeepLearning AI", year: "2025", category: "ai" },
  { title: "Algorithmic Toolbox", year: "2024", category: "computerScience" },
  { title: "Data Structures", year: "2024", category: "computerScience" },
  { title: "Interactive SQL", year: "2024", category: "computerScience" },
  { title: "HTML, CSS and JavaScript", year: "2024", category: "web" },
  { title: "UI/UX Design", year: "2024", category: "design" },
  { title: "Python Beginners", year: "2023", category: "computerScience" },
];
