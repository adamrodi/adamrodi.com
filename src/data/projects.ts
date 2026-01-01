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

![Cargo Games Landing Page](/cargo_games/hero_light_cargo_games.png "Landing page of Cargo Games showing games.")

![Uno In Progress](/cargo_games/uno_in_progress_light.png "A game of UNO between three legends.")
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

This case study focuses on the backend architecture and implementation since my primary contributions were there.

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

With that being said, we did implement three games: UNO, Rock-Paper-Scissors, and Tic-Tac-Toe; and a lobby-based chat feature to validate our system.

![REST vs WebSockets](/cargo_games/rest_vs_ws_light.svg "Comparison of REST request-response model vs WebSocket continuous connection model.")
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

  "activ-ate": {
    title: "Activ-Ate: Full-Stack Fitness & Nutrition Tracker",
    summary: `
A full-stack web application built to track workouts and nutrition with persistent user-specific data.

![Activ-Ate Landing Page](/activ-ate/activ-ate_hero.png "Landing page of Activ-Ate.")

![Activ-Ate Macros View](/activ-ate/activ-ate_macros.png "Nutrition tracking page showing one days macro-nutrient breakdown.")
`,
    type: "University Course Group Project",
    stack: ["C#", "ASP.NET Core", "REST APIs", "React", "TypeScript", "SQL"],
    sections: [
      {
        heading: "Context & My Role",
        body: `
Activ-Ate was built as part of a lower division software engineering course in a four person team. The goal was to build a full-stack web application with end-to-end functionality.

Specifically, we wanted to design a complete system that includes a relational database layer, backend that exposes a RESTful API, and a frontend client.

My contributions focused on owning the nutrition tracking domain on all layers:
- Developing backend API endpoints for CRUD operations on nutrition data
- Implementing frontend components for logging and viewing nutrition information
- Integrating frontend and backend through consistent API contracts

Additionally, I contributed to the overall data modeling and database schema design.

This case study focuses on system design decisions and lessons learned from shipping an end-to-end app under real constraints (time, scope, and coordination).
`,
      },
      {
        heading: "Problem & Scope",
        body: `
Many beginner fitness apps turn into "feature lists" without clear boundaries. For this project we prioritized a smaller, reliable end-to-end system over breadth.

Core goals:
- Persist user-specific workout and nutrition entries
- Provide clean CRUD flows through a consistent API
- Keep the frontend responsive and state-consistent while data changes

Non-goals (intentionally excluded due to scope):
- Public hosting
- Full authentication/authorization
- Automated testing and CI
`,
      },
      {
        heading: "Architecture Overview",
        body: `
Activ-Ate follows a classic three-tier web architecture:

- **Frontend (React)**: Presents forms, tables, and progress views.
- **Backend (ASP.NET Core)**: Owns business rules, validation, and API orchestration.
- **Database (SQL)**: Persists workouts, meals, and progress-related entities.

The separation between UI, API, and persistence helped us divide work across the team, iterate quickly, and reduce merge conflicts.
`,
      },
      {
        heading: "Data Modeling",
        body: `
A major part of making the app feel "real" was getting the data model right.

We modeled the application around user-owned entries (e.g., workouts and nutrition logs) with timestamps and structured fields to support common workflows:
- Logging an entry (create)
- Editing past entries (update)
- Reviewing history (read)
- Removing incorrect entries (delete)

As requirements changed, we had to evolve the schema without breaking existing flows — which highlighted how tightly UI assumptions can couple to persistence if you’re not careful.

![Database Schema](/activ-ate/dbdiagram_activ-ate.png "Entity-relationship diagram showing the database schema for Activ-Ate.")
`,
      },
      {
        heading: "API Design & Validation",
        body: `
Because multiple teammates were working across layers, the API contract mattered as much as the implementation.

Key patterns we leaned on:
- Consistent JSON shapes and naming
- Defensive validation for input data (required fields, ranges, and basic sanity checks)
- Clear separation between "client intent" (requests) and "server truth" (responses)

Keeping endpoints predictable reduced frontend complexity and made debugging integration issues much faster.
`,
      },
      {
        heading: "Frontend–Backend Integration",
        body: `
The most time-consuming issues weren’t individual bugs — they were mismatches between frontend expectations and backend behavior.

To reduce this friction:
- We agreed on endpoint behavior early (including edge cases)
- We standardized error responses so the UI could handle failures gracefully
- We iterated in small vertical slices (UI → API → DB) to keep the app always runnable

This approach made local development smoother and helped the team maintain momentum.
`,
      },
      {
        heading: "Challenges & What I’d Improve",
        body: `
**Challenges we ran into:**
- Coordinating API changes across a team
- Keeping UI state consistent as backend responses evolved
- Making scope decisions under time constraints

**If I revisited Activ-Ate today:**
- Add authentication/authorization and per-user isolation as a first-class concern
- Add automated API tests for core flows
- Introduce better observability (structured logs, clearer error taxonomy)
- Deploy a minimal hosted version (even if limited) to reduce "local-only" friction
`,
      },
      {
        heading: "Key Learnings",
        body: `
Activ-Ate was my first project where the main goal was not a clever algorithm — it was shipping a reliable, integrated system.

Key takeaways:
- End-to-end consistency matters more than feature count
- Stable API contracts speed up teams
- Data modeling decisions show up everywhere (UI, validation, and future iteration)

This project is a strong baseline for how I approach building product systems: small surface area, clear contracts, and steady iteration.
`,
      },
    ],
  },
};
