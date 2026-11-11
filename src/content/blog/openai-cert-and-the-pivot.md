---
title: "Why I Got Certified as an OpenAI API Deployment Practitioner (and What It Changed)"
date: "2026-11-04"
excerpt: "Ten years of shipping production systems, and I just added a certification to the wall. Here's the honest story of why an AI cert was the right next move for a full-stack engineer."
tags: ["ai", "career", "openai"]
---

I've never been a certification person.

In ten years of engineering across fintech, agtech, govtech, healthtech and Web3, I shipped state identity platforms, booking engines, USSD loan systems — and not once did a certificate open those doors. Working software did.

So when people who follow my work saw me complete the **OpenAI API Deployment Practitioner** certification, a few asked the fair question: *why?*

## The pivot needed a spine

Here's my honest position: the industry is splitting into two kinds of engineers.

1. Engineers who *use* AI — autocomplete on turbo, vibe-coding features into existence.
2. Engineers who *deploy* AI — people who can take an LLM-powered feature from a clever demo to a production system with predictable behavior, controlled cost, and failure handling.

I've been in camp one for years (I even helped ship an AI-assisted meme generator back in 2021 — more on that in a future post). But I'm steering my whole career toward camp two. That means AI engineering isn't a side quest for me; it's the main storyline: RAG systems, agents, evals, structured outputs, the whole discipline.

Going through a formal certification forced me to close the gaps I'd have hand-waved otherwise. When you're self-taught, you learn what the last project needed. When you follow a structured path, you learn what the *next* project will need. That's the difference.

## What the work actually looks like

A few things I've tightened up since getting certified — things that matter whether you're building a startup feature or a personal tool:

- **Structured outputs over vibes.** Getting a model to return valid JSON that matches a schema sounds trivial until it's in production and downstream code depends on every field. Treat the model like an unreliable network call, because that's what it is.
- **Function calling with real boundaries.** Tools should be small, well-named, and scoped to what you'd let a very fast intern touch. Nothing more.
- **Evals before scale.** If you can't measure whether a prompt change made things better, you're not engineering, you're decorating.
- **Deployment is the product.** Auth, rate limits, cost caps, observability, fallbacks. An AI feature without these is a demo wearing a production costume.

None of that is glamorous. All of it is the difference between "it worked when I tried it" and "it works."

## Why this matters for what I teach

Here's the part that ties it all together: I teach beginners to build websites with AI. My cohorts are full of salon owners, photographers, caterers — people who will never read a word of documentation.

For them, *I* am the reliability layer. When I say "this workflow is safe, this tool is worth your time, this is how we keep your data out of a training set," that's an engineering claim. I'd rather make it with the certification behind me than with vibes.

## The road ahead

I'm currently deep in a structured **AI engineering** course — RAG, agents, retrieval, evaluation pipelines. This site itself is part of the practice: I write about what I learn, teach it to cohorts, and use it in real products. Learn → build → teach → write. That loop is the brand, and the certification was the first structural commit to it.

If you're an engineer wondering whether to formalize your AI skills: my answer is that the certificate isn't the point. The point is choosing which camp you're in — and if it's camp two, structure beats vibes.

*Building something that needs AI done properly — not just present? [Get in touch](/). Teaching a team to build with AI? The [classes page](/classes) is for you.*
