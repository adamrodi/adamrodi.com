// src/data/projects.ts

export type ProjectSection = { heading: string; body: string };

export type Project = {
  title: string;
  summary: string;
  chips: string[];
  links?: { demo?: string; repo?: string };
  sections: ProjectSection[];
};

export const PROJECTS: Record<string, Project> = {
  "multiplayer-game-server": {
    title: "Multiplayer Game Server",
    summary:
      "Real-time Rust backend with matchmaking and WebSockets, deployed on a VM.",
    chips: ["Rust", "Axum", "Tokio", "React", "TypeScript"],
    links: { demo: "https://adamrodi.com/game", repo: "#" },
    sections: [
      {
        heading: "Problem",
        body: "Enable multiple players to create/join matches by code and keep game state in sync with low latency.",
      },
      {
        heading: "Architecture",
        body: "Rust (Axum/Tokio) WebSocket server; in-memory session registry; broadcast loop; React client; VM behind reverse proxy.",
      },
      {
        heading: "Key Decisions",
        body: "WebSockets for stateful updates; Axum/Tokio for async; simple JSON protocol for clarity and speed.",
      },
      {
        heading: "Impact",
        body: "Stable sessions under concurrent play; predictable tick loop; clear separation of transport vs game logic.",
      },
      {
        heading: "Next",
        body: "Add Redis for persistence; metrics; reconnect handling; horizontal scaling strategy.",
      },
    ],
  },
  "opensearch-troubleshooting-bot": {
    title: "AWS OpenSearch Troubleshooting Bot",
    summary:
      "Lex + Lambda chatbot to triage and resolve common OpenSearch yellow/red cluster issues.",
    chips: ["AWS Lex", "Lambda", "CloudWatch", "API Gateway"],
    links: { demo: "#", repo: "#" },
    sections: [
      {
        heading: "Problem",
        body:
          "Manual triage of yellow/red state clusters required repetitive checks for node failures, low disk, or JVM pressure. We aimed to automate diagnostics through a conversational interface.",
      },
      {
        heading: "Architecture",
        body:
          "AWS Lex chatbot triggers Lambda functions via intents; each Lambda path corresponds to a diagnostic cause. Logs and metrics tracked in CloudWatch; optional API Gateway integration for external triggers.",
      },
      {
        heading: "Key Decisions",
        body:
          "Used Lex for guided conversation flow and modular decision trees; designed stateless Lambdas; standardized responses for consistent troubleshooting guidance.",
      },
      {
        heading: "Impact",
        body:
          "Reduced triage time for common yellow-cluster incidents; improved reproducibility of diagnostic steps; increased transparency for support engineers.",
      },
      {
        heading: "Next",
        body:
          "Integrate with incident runbooks; expand coverage to red-cluster states; add feedback metrics for diagnostic accuracy.",
      },
    ],
  },
  "zebrafish-data-mining": {
    title: "Zebrafish Neural Data Mining",
    summary:
      "Unsupervised clustering and visualization of zebrafish brain imaging data for stress vs control group differentiation.",
    chips: ["Python", "NumPy", "pandas", "matplotlib"],
    links: { demo: "#", repo: "#" },
    sections: [
      {
        heading: "Problem",
        body:
          "Analyze zebrafish brain imaging data to identify differences between stress and control groups without labeled outcomes.",
      },
      {
        heading: "Architecture",
        body:
          "Used Python with pandas and NumPy for preprocessing, then applied dimensionality reduction and clustering methods to reveal structure in neural activity data.",
      },
      {
        heading: "Key Decisions",
        body:
          "Selected unsupervised methods due to lack of labels; visualized clusters with matplotlib; tuned preprocessing pipeline for noise reduction and normalization.",
      },
      {
        heading: "Impact",
        body:
          "Found distinct neural activation patterns between stress and control groups; visualized clusters that aligned with known biological expectations.",
      },
      {
        heading: "Next",
        body:
          "Experiment with semi-supervised extensions; integrate temporal dynamics; validate results on larger datasets.",
      },
    ],
  },
};
