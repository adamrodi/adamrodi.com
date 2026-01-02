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
Activ-Ate is a full-stack web application built in a lower-division software engineering course to provide my first experience developing a complete, end-to-end software product. The project required coordinating a React frontend, an ASP.NET Core backend, and a relational database so that user data and application state remained consistent across the entire stack.

The application supports logging workouts and nutrition data, viewing historical entries, and tracking progress over time. 
While the feature set is intentionally general, the primary value of the project was in building real software with multiple layers and teammates working together.

This case study focuses on system integration, data modeling, and API design decisions that emerged from building and connecting all parts of the application into a single working system.

![Activ-Ate Landing Page](/activ-ate/activ-ate_hero.png "Landing page of Activ-Ate.")

![Activ-Ate Macros View](/activ-ate/activ-ate_macros.png "Nutrition tracking page showing one day's macro-nutrient breakdown.")
`,
    type: "University Course Group Project",
    stack: ["C#", "ASP.NET Core", "REST APIs", "React", "TypeScript", "SQL"],
    sections: [
      {
        heading: "Context & My Role",
        body: `
Activ-Ate was built as part of a lower-division software engineering course in a four-person team. 
The primary objective of the course was to give students hands-on experience building a complete application that resembles a real software product, rather than working on isolated programming assignments.

The project required coordinating a frontend, backend, and database so that all parts of the system worked together as a single unit. 
This meant making design decisions that affected multiple layers and revisiting those decisions as they evolved over the course of development.

My contributions focused on owning the nutrition tracking domain across the stack:
- Implementing backend REST API endpoints to create, read, update, and delete nutrition data
- Building frontend components for logging and viewing nutrition information
- Integrating the frontend and backend through consistent API contracts and data models

In addition to this vertical ownership, I also contributed to data modeling and database schema design for the entire application. 

This role gave me direct exposure to how individual implementation decisions propagate across a full system when multiple people are working on interconnected components.
`,
      },
      {
        heading: "Problem & Scope",
        body: `
The goal of this project was not to design a highly specialized fitness product, but to build a complete application that exercised the full software stack from user interaction down to data persistence.

At a functional level, the system needed to support a small set of core behaviors:
- Persisting user-entered workout and nutrition data
- Allowing users to view and modify historical entries
- Keeping frontend state consistent with backend data as changes occurred

Because this was an early end-to-end project, the application remained intentionally general in scope. This generality surfaced the complexity involved in coordinating data models, APIs, and UI behavior across multiple layers, which was the primary learning objective of the project rather than feature depth or product differentiation.
`,
      },
      {
        heading: "Architecture Overview",
        body: `
Activ-Ate uses a three-tier web architecture to separate presentation, application logic, and data persistence.

- **Frontend (React + TypeScript)**: Responsible for user interaction, form input, and rendering workout and nutrition views.
- **Backend (ASP.NET Core + C#)**: Exposes REST endpoints, applies validation and business rules, and mediates access to persisted data.
- **Database (SQL)**: Stores workouts, nutrition logs, and related user-owned records.

In our course workflow, we built the system in phases: database schema first, then backend endpoints, and finally the frontend UI. Even with this linear progression, the separation between layers helped keep responsibilities clear and made it easier to reason about changes as we connected the full stack.
`,
      },
      {
        heading: "Data Modeling",
        body: `
A key part of building a usable end-to-end system was designing data models that could support common user workflows without tightly coupling the UI to the database.

We modeled the application around user-owned records (such as food logs and exercise logs) with structured fields to support core behaviors:
- Logging new entries
- Editing existing entries
- Viewing historical data over time
- Removing incorrect or outdated entries

As development progressed, changes to frontend requirements often required corresponding adjustments to the data model. Working through these changes showed how early modeling decisions impact the API and UI logic, and reinforced the importance of treating data design as a first-class part of the system.

![Database Schema](/activ-ate/dbdiagram_activ-ate.png "Entity-relationship diagram showing the database schema for Activ-Ate.")
`,
      },
      {
        heading: "REST API Design",
        body: `
We built Activ-Ate in phases (database → backend → frontend), which meant the API became the bridge between a stable persistence layer and the UI we built later.

The backend exposed a set of REST endpoints that represented clear operations on workouts and nutrition data. Once the frontend started consuming these endpoints, even small API changes could ripple into UI behavior, which reinforced the importance of keeping the API surface stable and predictable.

To support this, we focused on a few concrete principles:
- Using consistent JSON request and response shapes across endpoints
- Validating input data at the API boundary (required fields, basic ranges, and type checks)
- Treating server responses as the source of truth for application state

Being deliberate about API design reduced ambiguity between layers and made it easier to debug integration issues when something went wrong.
`,
      },
      {
        heading: "Frontend–Backend Integration",
        body: `
Integration work accelerated once the frontend was introduced on top of the existing backend. At this stage, many of the most time-consuming issues were not isolated bugs, but mismatches between frontend needs and backend behavior.

To reduce this friction:
- We refined endpoint behavior as UI requirements became concrete
- We added endpoints to support missing workflows discovered during frontend development
- We worked in small vertical slices (UI → API → DB) to keep the application runnable as features were added

Working through these integration issues reinforced how closely frontend behavior depends on backend guarantees, and why clear contracts matter even in relatively small systems.
`,
      },
      {
        heading: "Looking Forward",
        body: `
Building Activ-Ate provided a concrete reference point for what a complete product system looks like once all layers are connected.

If I were to extend this project further, I would focus on strengthening areas that become increasingly important as systems grow:
- Adding automated tests around core API workflows
- Improving observability to make system behavior easier to inspect and debug
- Deploying a minimal hosted version to reduce reliance on local setup

These changes reflect how my thinking about system robustness and maintainability has evolved since completing the project.
`,
      },
      {
        heading: "Key Learnings",
        body: `
Activ-Ate was my first project where the primary goal was not a clever algorithm, but shipping a complete, integrated software project.

Working across the full stack reinforced a few lessons that now guide how I approach product-oriented engineering:
- Data modeling decisions propagate across every layer and are central to an application
- End-to-end consistency matters more than feature count
- Good API design reduces friction between frontend and backend development


This project serves as a baseline for how I think about building software, and it directly informed how I approached later, more specialized projects.
`,
      },
    ],
  },
};
