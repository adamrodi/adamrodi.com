export type ProjectSection = { heading: string; body: string };

export type Project = {
  title: string;
  summary: string;

  // ProjectMeta fields
  type?: string;
  stack: string[];
  links?: { live_demo?: string; repo?: string };
  sections: ProjectSection[];
};

export const PROJECTS: Record<string, Project> = {
  "multiplayer-game-server": {
    title: "Real-Time Multiplayer Game & Chat Server",
    summary: `
A WebSocket-based multiplayer platform built in Rust to explore **real-time systems**, **concurrency**, and **backend architecture** in a team setting.

Users can create or join game rooms, play multiplayer games, and chat live while playing.

The games themselves are intentionally simple; the technical focus was on building **correct, observable, real-time infrastructure** rather than complex game mechanics.
`,
    type: "University Course Project (Team of 4)",
    stack: ["Rust", "Axum", "Tokio", "WebSockets", "React", "TypeScript"],
    links: {
      live_demo: "https://adamrodi.com/game",
      repo: "https://github.com/arlemoine/CMPS401/tree/main/Project",
    },
    sections: [
      {
        heading: "Context & Goals",
        body: `
This project was built for a university course as a collaborative team effort.

I served as the **backend architecture lead** and assigned group leader, with primary responsibility for system design decisions.

The primary goals were:
- Move beyond request–response backends
- Gain hands-on experience with **real-time, asynchronous systems**
- Manage shared state across multiple concurrent clients
`,
      },
      {
        heading: "Architecture Overview",
        body: `
The backend is an **asynchronous Rust WebSocket server** built with Axum and Tokio.

The server is **authoritative**:
- Clients send intent
- The server validates actions
- Game state is mutated centrally
- Updates are broadcast to the appropriate room

Each game room is isolated, allowing multiple games and chat sessions to run concurrently without shared-state leakage.
`,
      },
      {
        heading: "WebSockets & Concurrency Challenges",
        body: `
WebSockets required a fundamentally different programming model than request–response systems.

Key challenges included:
- Managing long-lived connections
- Coordinating sender and receiver channels
- Broadcasting messages to many clients

We also had to handle:
- Unexpected disconnects
- Invalid client behavior
- Consistent shared-state updates under concurrency
`,
      },
      {
        heading: "Message Protocol Design",
        body: `
I designed and documented the **message protocol** used across games and chat.

All communication flows through a **typed JSON envelope**, with messages defined by intent:
- Join room
- Make move
- Send chat message

Treating the protocol as a living document significantly reduced frontend–backend integration issues and improved team alignment.
`,
      },
      {
        heading: "Game State Management (UNO)",
        body: `
While all games shared the same infrastructure, I implemented the **UNO game model**, which required more complex state management.

The server enforces:
- Turn order
- Action validation
- Card effects

After each move:
- Public state is broadcast to all players
- Private hand data is sent only to the owning client

This reinforced the importance of an **authoritative backend** in real-time systems.
`,
      },
      {
        heading: "Deployment & Real-World Behavior",
        body: `
I deployed the backend to a **personal VM** and ran the production WebSocket server.

Running the system in production exposed issues that never appeared locally:
- Malformed messages
- Network disconnects
- Timing-related edge cases

These observations grounded the system in real-world behavior.
`,
      },
      {
        heading: "Key Learnings",
        body: `
This project demonstrated how quickly complexity emerges in real-time systems—even with simple domains.

Key takeaways:
- Clear protocol design is critical
- State ownership must be disciplined
- Documentation matters in async systems

Most importantly, it strengthened my ability to **learn outside my comfort zone** and contribute effectively on a backend team.
`,
      },
    ],
  },
  "opensearch-troubleshooting-bot": {
    title: "AWS OpenSearch Troubleshooting Bot",
    summary:
      "Lex + Lambda chatbot to triage and resolve common OpenSearch yellow/red cluster issues.",
    type: "Internship Project",
    stack: ["AWS Lex", "Lambda", "CloudWatch", "API Gateway"],
    links: { live_demo: "#", repo: "#" },
    sections: [
      {
        heading: "Problem",
        body: `
Manual triage of yellow/red state clusters required repetitive checks for node failures, low disk, or JVM pressure.

We aimed to automate diagnostics through a conversational interface.
`,
      },
      {
        heading: "Architecture",
        body: `
- AWS Lex chatbot triggers Lambda functions via intents
- Each Lambda path corresponds to a diagnostic cause
- Logs and metrics tracked in CloudWatch
- Optional API Gateway integration for external triggers
`,
      },
      {
        heading: "Key Decisions",
        body: `
- Used Lex for guided conversation flow and modular decision trees
- Designed stateless Lambdas
- Standardized responses for consistent troubleshooting guidance
`,
      },
      {
        heading: "Impact",
        body: `
- Reduced triage time for common yellow-cluster incidents
- Improved reproducibility of diagnostic steps
- Increased transparency for support engineers
`,
      },
      {
        heading: "Next",
        body: `
- Integrate with incident runbooks
- Expand coverage to red-cluster states
- Add feedback metrics for diagnostic accuracy
`,
      },
    ],
  },
  "zebrafish-data-mining": {
    title: "Zebrafish Neural Data Mining",
    summary:
      "Unsupervised clustering and visualization of zebrafish brain imaging data for stress vs control group differentiation.",
    type: "Research Project",
    stack: ["Python", "NumPy", "pandas", "matplotlib"],
    links: { live_demo: "#", repo: "#" },
    sections: [
      {
        heading: "Problem",
        body: `
Analyze zebrafish brain imaging data to identify differences between stress and control groups without labeled outcomes.
`,
      },
      {
        heading: "Architecture",
        body: `
- Used Python with pandas and NumPy for preprocessing
- Applied dimensionality reduction and clustering methods
- Revealed structure in neural activity data
`,
      },
      {
        heading: "Key Decisions",
        body: `
- Selected unsupervised methods due to lack of labels
- Visualized clusters with matplotlib
- Tuned preprocessing pipeline for noise reduction and normalization
`,
      },
      {
        heading: "Impact",
        body: `
- Found distinct neural activation patterns between stress and control groups
- Visualized clusters that aligned with known biological expectations
`,
      },
      {
        heading: "Next",
        body: `
- Experiment with semi-supervised extensions
- Integrate temporal dynamics
- Validate results on larger datasets
`,
      },
    ],
  },
};
