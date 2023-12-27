export const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
]

export const articles = [
  { id: 1, url: '#' },
  { id: 2, url: '#' },
  { id: 3, url: '#' },
  { id: 4, url: '#' },
  { id: 5, url: '#' },
  { id: 6, url: '#' },
  { id: 7, url: '#' },
  { id: 8, url: '#' },
]

export const certificate = [
  { 
    name: "TypeScript",
    provider: "ITVDN",
    date: "",
    color: "#457fd6",
  },
  { 
    name: "Front-end",
    provider: "Prometheus",
    date: "",
    color: "#6B237D",
  },
  { 
    name: "QA course",
    provider: "DataArt",
    date: "",
    color: "#FF9900",
  },
  { 
    name: "UX/UI design",
    provider: "ITVDN",
    date: "",
    color: "#78A2E1",
  },
]

export type ProjectFilters = {
  key: string,
  label: string,
  options: { key: string, label: string }[],
}

export const filtersOfProjects: ProjectFilters[] = [
  {
    key: "status",
    label: "Status",
    options: [
      { key: "open", label: "In process" },
      { key: "closed", label: "Completed" },
    ],
  },
  {
    key: "type",
    label: "Scope",
    options: [
      { key: "commercial", label: "Commercial" },
      { key: "pet-project", label: "Pet-project" },
      // { key: "volunteering", label: "Volunteering" },
    ],
  },
  {
    key: "type",
    label: "Type",
    options: [
      { key: "calculator", label: "Calculators" },
      { key: "timer", label: "Timers" },
      { key: "generator", label: "Generators" },
      { key: "game", label: "Games" },
      { key: "other", label: "Other" },
    ],
  },
]