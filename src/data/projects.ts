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
  "cargo-games": {
    title: "Cargo Games: Real-Time Multiplayer Game & Chat Server",
    summary: `
A WebSocket-based multiplayer platform built in Rust to explore real-time systems, concurrency, and backend architecture in a team setting.

Users can create or join game rooms, play multiplayer games, and chat live while playing.

The games themselves are intentionally simple; the technical focus was on building multiplayer, real-time infrastructure using the WebSocket protocol rather than complex game mechanics.

![Multiplayer Game Server Demo](/cargo_games/cargo_games_hero.png "A game of UNO in progress on the site.")
`,
    type: "University Course Project",
    stack: ["Rust", "Axum", "Tokio", "WebSockets", "React", "TypeScript"],
    links: {
      live_demo: "https://adamrodi.com/game",
      repo: "https://github.com/arlemoine/CMPS401/tree/main/Project",
    },
    sections: [
      {
        heading: "Context & My Role",
        body: `
This project was built for a university course as a collaborative team effort. We had four members, with two members focusing on frontend and two on backend development.

I served as a backend developer and was assigned group leader, with primary ownership over the WebSocket implementation, message protocol design, and VM deployment.
I also implemented the UNO and Rock-Paper-Scissors game logic, validation, and state management.

The project spanned approximately 2 months, from idea to final presentation.
`,
      },
      {
        heading: "Why This Project?",
        body: `
Most of my prior backend experience was in request–response systems (e.g., REST APIs). For this course, I wanted to push beyond that comfort zone by working on a system that requires:
- long-lived connections 
- event-driven data flow (rather than transactional)
- shared state across concurrent clients
- and real-time updates

A real-time multiplayer game and chat server forced us to confront these challenges directly. The goal wasn't to build new or complex games. It was to build robust infrastructure that could support them. 

With that being said, we did implement three games (UNO, Rock-Paper-Scissors, and Tic-Tac-Toe) and a lobby-based chat feature to validate our system.
`,
      },
      {
        heading: "Architecture Overview",
        body: `
The backend is a real-time, asynchronous WebSocket server written in Rust and organized around room-scoped, authoritative state. Clients maintain long-lived connections and send intent-based messages, while the server validates all actions, mutates state, and broadcasts updates to the appropriate room.

To manage the freedom and complexity of WebSockets, the system is built around a strict, typed message protocol shared across all games and chat. Messages are routed by type and game_id, allowing multiple games and chat sessions to run concurrently without shared-state conflicts.

Key architectural components:
- **WebSocket Connections**: Each client maintains a persistent WebSocket connection to the server.
- **Rooms**: Each game or chat session occurs within a room, isolating state and messages.
- **Message Protocol**: All communication uses a typed JSON envelope which acts as a contract between frontend and backend.
- **Authoritative Server**: The server is the single source of truth, validating all client actions and managing game state.

#### Example (UNO):

The server:
- enforces turn order 
- validates card plays
- applies card effects
- broadcasts public game state to all players
- sends private hand updates only to the owning client 

This separation of public vs private state was a design challenge and reinforced the importance of server authority in our architecture.

![Architecture Diagram](/cargo_games/architecture_diagram_cargo_games.drawio.svg "High-level architecture of the multiplayer game server.")

`,
      },
      {
        heading: "WebSockets: The Core Challenge",
        body: `
The biggest mindset shift for this project was adapting to the WebSocket programming model. Unlike request-response systems, WebSockets requires you to think in terms of:
- two-way continuous communication
- sender and receiver channels
- broadcasts vs direct messages
- partial failures (disconnects, invalid messages, race conditions)

As a team, this was our first time building anything with this architecture. We quickly learned that the freedom WebSockets provides can become a liability without structure.

To address this:
- We agreed on a message protocol early to standardize communication.
- We documented every message type and expected behavior.
- Each backend team member owned specific message types and their handling logic.

This upfront discipline reduced integration issues between frontend and backend and made debugging far more manageable.
`,
      },
      {
        heading: "Message Protocol Design",
        body: `
I designed and documented the [message protocol](https://github.com/arlemoine/CMPS401/blob/main/Project/docs/message_protocol.md) used for Rock-Paper-Scissors and UNO and co-designed the protocol for chat and game room connection messages.

Key characteristics:
- Single JSON envelope with typed message variants
- Separation of concerns through message types (e.g., game actions vs chat messages)
- Server generated authoritative responses and broadcasts

Maintaining the protocol as a living document became critical to team velocity and correctness, especially as new games and features were added.
`,
      },
      {
        heading: "Game State Management (UNO)",
        body: `
While all games shared the same infrastructure, I implemented the **UNO game model**, which required more complex state management.

The server enforces:
- Turn order
- Action validation
- Card effects (e.g., Draw Two, Skip, Reverse)

After each move:
- Public state is broadcast to all players
- Private hand data is sent only to the owning client

`,
      },
      {
        heading: "Key Learnings",
        body: `
This project taught me lessons I wouldn't have learned from request-response systems alone.

Key takeaways:
- Clear protocol design is critical for collaboration
- State ownership must be disciplined
- Real-time systems require thinking about data flow differently than traditional APIs

Most importantly, it strengthened my ability to **learn quickly when outside my comfort zone** and own development tasks with unfamiliar technologies.
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
