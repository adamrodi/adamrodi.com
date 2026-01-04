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
Activ-Ate is a full-stack web application for tracking workouts and meals. It supports setting goals, logging workouts and nutrition data, viewing historical entries, and tracking progress over time.

The project required coordinating a React frontend, an ASP.NET Core backend, and a relational database so that user data and application state remained consistent across the entire stack. The primary value of the project was in providing experience building software with multiple layers and teammates.

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

The project required developing a database schema, backend API, and frontend (in that order for this course). 
This meant making design decisions that affected multiple layers and revisiting those decisions as they evolved over the course of development.

My contributions were in two primary areas:
1. Vertical ownership of the food/nutrition tracking domain across the full stack
2. Contributing to data modeling and database schema design for the entire application

On the food/nutrition side, my specific tasks included:
- Implementing backend REST API endpoints to create, read, update, and delete nutrition data
- Building frontend components for logging and viewing nutrition information
- Integrating the frontend and backend through consistent API contracts and data models

This role gave me direct exposure to how individual implementation decisions propagate across a full system when working with multiple people.
`,
      },
      {
        heading: "Problem & Scope",
        body: `
The goal of this project was not to design a highly specialized fitness product, but to build a complete application that exercised the full software stack from user interaction to data persistence.

At a functional level, the system needed to support a set of core behaviors:
- Persisting user-entered workout and nutrition data
- Allowing users to view and modify historical entries
- Keeping frontend state consistent with backend data as changes occurred

Because of the learning objectives, the application remained focused on software engineering and system design skills rather than novel algorithms or product-market fit. 
This goal surfaced the complexity involved in coordinating data models, APIs, and UI behavior across multiple layers of the software stack.
`,
      },
      {
        heading: "Architecture Overview",
        body: `
Activ-Ate uses a three-tier web architecture to separate presentation, application logic, and data persistence.

- **Frontend (React + TypeScript)**: Responsible for user interaction, form input, and rendering workout and nutrition views.
- **Backend (ASP.NET Core + C#)**: Exposes REST endpoints, applies validation and business rules, and mediates access to persisted data through an Object-Relational Mapper (ORM).
- **Database (MySQL)**: Stores workouts, nutrition logs, and related user-specific records.

In our course workflow, we built the system in phases: database schema first, then backend endpoints, and finally the frontend UI. Even with this linear progression, the separation between layers helped keep responsibilities clear and made it easier to reason about changes as we connected the full stack.
`,
      },
      {
        heading: "Data Modeling",
        body: `
A key part of building the system was designing data models that could support user workflows without tightly coupling the UI to the database.
That way, the UI talks to the backend through a clean API, abstracting away the database layer. 

We modeled the application around user-specific records (such as food logs and exercise logs) with structured fields to support core behaviors:
- Logging new entries
- Editing existing entries
- Viewing historical data over time
- Removing incorrect or outdated entries

While this separation gave us a solid foundation, the data model wasn’t perfect from day one. 
As we built more features and frontend requirements evolved, we uncovered cases where the existing data structures and API contracts didn’t fully support new workflows. 
Addressing this meant revisiting parts of the data model and API rather than pushing complexity into the UI.

Working through those iterations made the tradeoffs very tangible and reinforced how much early data modeling decisions shape the rest of the system. 


![Database Schema](/activ-ate/dbdiagram_activ-ate.png "Final entity-relationship diagram showing the database schema for Activ-Ate.")
`,
      },
      {
        heading: "REST API Design",
        body: `
We built Activ-Ate in phases (database → backend → frontend), which meant the API became the bridge between a stable persistence layer and the UI we built later.

The backend exposes a set of REST endpoints that represent clear operations on workouts and nutrition data. Once the frontend started consuming these endpoints, even small API changes could ripple into UI behavior, which reinforced the importance of keeping the API surface stable and predictable.

To support this, we focused on a few concrete principles:
- Using consistent JSON request and response shapes across endpoints
- Validating input data at the API boundary (required fields, basic ranges, and type checks)
- Treating server responses as the source of truth for application state

We tested and iterated on the API using Swagger before and during frontend development. Since the API developers (us) also eventually built the frontend, we used Swagger for more than just documentation. It was particularly helpful in two ways:
1. It let us validate API behavior before the frontend existed
2. It served as a debugging tool while building the frontend to rule out backend issues

Being deliberate about API design reduced ambiguity between layers and made it easier to debug integration issues when something went wrong.
`,
      },
      {
        heading: "Frontend–Backend Integration",
        body: `
Integration work accelerated once the frontend was introduced on top of the existing backend. At this stage, many of the most time-consuming issues were mismatches between frontend needs and backend behavior.

To reduce this friction:
- We refined endpoint responses as UI requirements became concrete
- We added endpoints to support missing needs discovered during frontend development
- We worked in small, domain-specific vertical slices (UI → API → DB) to make debugging easier

Swagger and browser developer tools became crucial to debugging at this stage.
We used these tools to inspect requests and responses and narrow down on the root cause of issues more quickly.

Working through integration issues reinforced how closely frontend behavior depends on backend guarantees, and why well thought-out API endpoints matter.

The better we understood a user interaction from the frontend perspective, the more effectively we could design backend endpoints to support it.
`,
      },
      {
        heading: "Looking Forward",
        body: `
Building Activ-Ate provided a concrete reference point for what a complete product system looks like once all layers are connected.

If I were to extend this project further, I would focus on a few areas:
- Adding automated tests around core API workflows
- Improving observability to make system behavior easier to inspect and debug
- Deploying a minimal hosted version to gather data and eventually improve live performance

These changes reflect how my thinking has evolved since completing the project.
`,
      },
      {
        heading: "Key Learnings",
        body: `
Activ-Ate was my first university project where the primary goal was not a clever algorithm, but shipping a complete, integrated software project.

Working across the full stack reinforced a few lessons that now guide how I approach software engineering:
- Data modeling decisions propagate across every layer and are central to an application
- Well designed API's effectively model the domain and provide necessary functionality for user workflows 
- Good layer abstractions reduce cognitive load and allow each layer to evolve independently

This project built foundational skills in software engineering, and it directly informs how I approach building systems today.
`,
      },
    ],
  },
};
