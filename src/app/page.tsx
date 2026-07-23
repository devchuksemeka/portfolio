import PortfolioInit from "@/components/PortfolioInit";

export default function Home() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-scanlines" />
      <div className="bg-glow" />

      <header>
        <nav>
          <div className="logo">
            devchuksemeka<span className="cursor" />
          </div>
          <div className="navlinks">
            <a href="#stack">stack</a>
            <a href="#experience">experience</a>
            <a href="#work">work</a>
            <a href="#contact">contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero wrap" style={{ paddingTop: 140 }}>
          <div className="terminal">
            <div className="term-chrome">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="term-title">chuks@career — zsh — 92x24</span>
            </div>
            <div className="term-body" id="term-body" />
          </div>

          <p className="hero-tagline">
            8 years shipping production systems across fintech, agtech, govtech,
            healthtech and Web3 — from a state government identity platform
            serving millions of residents, to the booking engine powering hundreds
            of beauty businesses today. I build the backend nobody sees and the UI
            nobody has to think about.
          </p>

          <div className="hero-ctas">
            <a
              className="btn btn-primary"
              href="mailto:devchuksemeka@gmail.com?subject=Let's%20talk"
            >
              → Email me
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/devchuksemeka"
              target="_blank"
              rel="noopener"
            >
              View GitHub
            </a>
            <a
              className="btn btn-ghost"
              href="https://linkedin.com/in/devchuksemeka"
              target="_blank"
              rel="noopener"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="stats reveal" id="stats-block">
            <div className="stat">
              <div className="n" data-count="8">0</div>
              <div className="l">Years in production</div>
            </div>
            <div className="stat">
              <div className="n" data-count="7">0</div>
              <div className="l">Companies shipped at</div>
            </div>
            <div className="stat">
              <div className="n" data-count="300" data-suffix="+">0</div>
              <div className="l">Businesses onboarded (Carojon)</div>
            </div>
            <div className="stat">
              <div className="n" data-count="1">0</div>
              <div className="l">State-wide gov platform led</div>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="wrap" id="stack">
          <div className="eyebrow reveal">cat stack.json</div>
          <h2 className="sec-title reveal">Full ownership, front to back.</h2>
          <p className="sec-desc reveal">
            Not a framework tourist — I&apos;ve shipped production code in every layer
            of the stack, across mobile, web, backend, infra and even smart
            contracts.
          </p>

          <div className="stack-panel reveal">
            <div className="term-chrome">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="term-title">stack.json</span>
            </div>
            <div className="term-body">
              <div className="stack-group">
                <span className="gkey">&quot;frontend&quot;</span>:
                <div className="stack-chips">
                  <span className="chip">React</span>
                  <span className="chip">Next.js</span>
                  <span className="chip">React Native</span>
                  <span className="chip">Expo</span>
                  <span className="chip">Vue.js</span>
                  <span className="chip">GraphQL / Apollo</span>
                  <span className="chip">Tailwind CSS</span>
                  <span className="chip">Material UI</span>
                  <span className="chip">Styled Components</span>
                </div>
              </div>
              <div className="stack-group">
                <span className="gkey">&quot;backend&quot;</span>:
                <div className="stack-chips">
                  <span className="chip">Node.js</span>
                  <span className="chip">NestJS</span>
                  <span className="chip">Express.js</span>
                  <span className="chip">TypeScript</span>
                  <span className="chip">PHP / Laravel</span>
                  <span className="chip">Adonis.js</span>
                  <span className="chip">Microservices</span>
                  <span className="chip">REST APIs</span>
                </div>
              </div>
              <div className="stack-group">
                <span className="gkey">&quot;data&quot;</span>:
                <div className="stack-chips">
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">MongoDB</span>
                  <span className="chip">MySQL</span>
                  <span className="chip">Sequelize</span>
                  <span className="chip">Upstash Redis</span>
                  <span className="chip">Supabase</span>
                </div>
              </div>
              <div className="stack-group">
                <span className="gkey">&quot;infra&quot;</span>:
                <div className="stack-chips">
                  <span className="chip">AWS</span>
                  <span className="chip">Docker</span>
                  <span className="chip">Kubernetes</span>
                  <span className="chip">GitHub Actions</span>
                  <span className="chip">Vercel</span>
                  <span className="chip">Heroku</span>
                  <span className="chip">Cloudflare R2</span>
                </div>
              </div>
              <div className="stack-group">
                <span className="gkey">&quot;web3&quot;</span>:
                <div className="stack-chips">
                  <span className="chip">Solidity</span>
                  <span className="chip">Hardhat</span>
                  <span className="chip">Web3.js</span>
                  <span className="chip">Ethers.js</span>
                </div>
              </div>
              <div className="stack-group" style={{ marginBottom: 0 }}>
                <span className="gkey">&quot;quality&quot;</span>:
                <div className="stack-chips">
                  <span className="chip">Jest</span>
                  <span className="chip">Cypress</span>
                  <span className="chip">React Testing Library</span>
                  <span className="chip">Storybook</span>
                  <span className="chip">Figma</span>
                  <span className="chip">Agile / Scrum</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="wrap" id="experience">
          <div className="eyebrow reveal">git log --oneline --stat</div>
          <h2 className="sec-title reveal">A career you can diff.</h2>
          <p className="sec-desc reveal">
            Seven companies, four continents&apos; worth of clients, one thread running
            through it: taking systems from zero to shipped, then keeping them
            alive.
          </p>

          <div className="gitlog">
            <div className="commit reveal">
              <div className="commit-head">
                <span className="commit-hash">a1b2c3d</span>
                <span className="commit-role">Senior Full-Stack Engineer</span>
                <span className="commit-company">@ Carojon</span>
                <span className="badge-live">CURRENT</span>
                <span className="commit-date">2023 — Present · Awka, Nigeria</span>
              </div>
              <ul className="commit-body">
                <li>
                  Architected NestJS microservices and PostgreSQL schemas powering
                  bookings, storefronts, payments and messaging automation
                </li>
                <li>
                  Shipped full-stack features with Next.js, Apollo GraphQL and
                  Material UI; wrote Jest coverage and ran cloud deploys on Heroku
                </li>
                <li>
                  Led cross-functional engineering, product and UI teams through
                  Agile sprints while owning backend performance
                </li>
              </ul>
              <div className="commit-tags">
                <span>NestJS</span>
                <span>Next.js</span>
                <span>PostgreSQL</span>
                <span>GraphQL</span>
                <span>React Native</span>
              </div>
            </div>

            <div className="commit reveal">
              <div className="commit-head">
                <span className="commit-hash">7e4f9ab</span>
                <span className="commit-role">Frontend Software Engineer</span>
                <span className="commit-company">@ Clearlabs</span>
                <span className="commit-date">2021 — 2023 · California, US</span>
              </div>
              <ul className="commit-body">
                <li>
                  Built React.js interfaces with Atomic Design for high-volume
                  genomic workflow dashboards
                </li>
                <li>
                  Integrated LaunchDarkly feature flags and introduced React
                  Testing Library, raising deployment safety and UI reliability
                </li>
                <li>
                  Worked daily across backend, device, QA, UX and product to ship
                  enhancements and resolve escalations
                </li>
              </ul>
              <div className="commit-tags">
                <span>React</span>
                <span>GraphQL</span>
                <span>Cypress</span>
                <span>Atomic Design</span>
              </div>
            </div>

            <div className="commit reveal">
              <div className="commit-head">
                <span className="commit-hash">5c1d820</span>
                <span className="commit-role">Full-Stack Software Engineer</span>
                <span className="commit-company">@ GAINS Associate &amp; Youmeme</span>
                <span className="commit-date">2021 — 2024 · France</span>
              </div>
              <ul className="commit-body">
                <li>
                  Worked with GAINS&apos; CTO on backend architecture, scalability and
                  uptime for a decentralized investment platform
                </li>
                <li>
                  Migrated Youmeme from styled-components to CSS modules (~25%
                  performance gain) and shipped cache-busting via version
                  invalidation
                </li>
                <li>
                  Helped cut the product bug backlog ~20% through structured
                  debugging, and contributed to an AI-assisted meme-generation
                  feature
                </li>
              </ul>
              <div className="commit-tags">
                <span>Solidity</span>
                <span>Web3.js</span>
                <span>NestJS</span>
                <span>Next.js</span>
              </div>
            </div>

            <div className="commit reveal">
              <div className="commit-head">
                <span className="commit-hash">3a9e771</span>
                <span className="commit-role">Full-Stack Software Engineer</span>
                <span className="commit-company">@ Releaf Technology</span>
                <span className="commit-date">2019 — 2022 · Lagos, Nigeria</span>
              </div>
              <ul className="commit-body">
                <li>
                  Led the engineering team; architected sourcing tools (SALT),
                  field-agent apps and factory operations dashboards
                </li>
                <li>
                  Built a USSD platform and loan system letting smallholder
                  farmers request funds, sell produce and get real-time field
                  follow-ups
                </li>
                <li>
                  Integrated Africa&apos;s Talking and OnePipe; ran
                  AWS/Docker/Kubernetes infrastructure with CI/CD pipelines
                </li>
              </ul>
              <div className="commit-tags">
                <span>AWS</span>
                <span>Kubernetes</span>
                <span>USSD</span>
                <span>Fintech</span>
              </div>
            </div>

            <div className="commit reveal">
              <div className="commit-head">
                <span className="commit-hash">1f6b402</span>
                <span className="commit-role">Lead Software Engineer</span>
                <span className="commit-company">@ Nuture Technology</span>
                <span className="commit-date">2019 — 2021 · Lagos, Nigeria</span>
              </div>
              <ul className="commit-body">
                <li>
                  Led backend and system architecture for Anambra State&apos;s Central
                  Information Management System (ANSCIMS) and Social Services
                  Identity System (ANSSID)
                </li>
                <li>
                  Built and maintained core APIs consumed by mobile and frontend
                  teams across government-scale platforms
                </li>
                <li>
                  Integrated Interswitch and other identity/payment services into
                  state operations tooling
                </li>
              </ul>
              <div className="commit-tags">
                <span>Laravel</span>
                <span>Vue.js</span>
                <span>GovTech</span>
                <span>Identity Systems</span>
              </div>
            </div>

            <div className="commit reveal">
              <div className="commit-head">
                <span className="commit-hash">0c2a119</span>
                <span className="commit-role">Lead Software Engineer</span>
                <span className="commit-company">@ Techie Planet</span>
                <span className="commit-date">2018 — 2019 · Lagos, Nigeria</span>
              </div>
              <ul className="commit-body">
                <li>
                  Backend engineer on a 4-person team building a full ride-hailing
                  and pickup platform, Uber/Bolt-style
                </li>
                <li>
                  Refactored critical database queries in a legacy Zend codebase,
                  materially improving performance and stability
                </li>
              </ul>
              <div className="commit-tags">
                <span>Zend</span>
                <span>MySQL</span>
                <span>Ride-hailing</span>
              </div>
            </div>

            <div className="commit reveal">
              <div className="commit-head">
                <span className="commit-hash">88f3e05</span>
                <span className="commit-role">Full-Stack Website Developer</span>
                <span className="commit-company">@ Technovia</span>
                <span className="commit-date">2017 — 2018 · Lagos, Nigeria</span>
              </div>
              <ul className="commit-body">
                <li>
                  Built an asset-monitoring system combining geolocation and
                  multimedia capture for a billboard agency, with privacy-first
                  data transfer
                </li>
              </ul>
              <div className="commit-tags">
                <span>Geolocation</span>
                <span>Media Capture</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECT */}
        <section className="wrap" id="work">
          <div className="eyebrow reveal">./deploy --env=production</div>
          <h2 className="sec-title reveal">What I&apos;m building right now.</h2>
          <p className="sec-desc reveal">
            The flagship, and the case studies I can&apos;t link to because the
            companies that owned them no longer exist — the work still shipped and
            still counts.
          </p>

          <div className="feature reveal">
            <div className="feature-top">
              <div>
                <div className="feature-name">Carojon</div>
                <div className="feature-role">
                  Beauty booking &amp; business-management SaaS · Senior
                  Full-Stack Engineer, 2023–Present
                </div>
              </div>
              <span className="badge-live">LIVE · IN PRODUCTION</span>
            </div>
            <p className="feature-desc">
              A booking and operations platform connecting clients with beauty
              professionals across Lagos, Abuja, Port Harcourt, Enugu, Awka,
              Onitsha, Owerri and Asaba — with scheduling, WhatsApp booking, POS,
              a business marketplace and automated client reminders. I own the
              engineering end to end: architecture, backend systems, and the
              product decisions that sit underneath them.
            </p>
            <div className="feature-grid">
              <div className="feature-block">
                <h4>Systems I&apos;ve built</h4>
                <ul>
                  <li>
                    Quota-based booking limits across a Free / Lite / Starter /
                    Pro tier structure
                  </li>
                  <li>
                    A points-based loyalty system (1pt = ₦1) with redemption
                    thresholds and payout-safe discount caps
                  </li>
                  <li>
                    A multi-account switcher for businesses managing several
                    locations or orgs
                  </li>
                  <li>
                    A Clinical Practice Mode in progress — credentialing, intake
                    forms and consent capture for aesthetic clinics
                  </li>
                </ul>
              </div>
              <div className="feature-block">
                <h4>Problems I&apos;ve solved</h4>
                <ul>
                  <li>
                    Rebuilt SSR/SEO on marketplace listing pages so Googlebot can
                    actually index them
                  </li>
                  <li>
                    Server-component-plus-client-pagination pattern for fast,
                    crawlable listings
                  </li>
                  <li>
                    Shipped a Node.js/Resend automation to manage a billing-policy
                    rollout without losing trust
                  </li>
                  <li>
                    Direct bank-transfer payments with no per-transaction fees,
                    layered against a dual commission/subscription model
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="wrap">
          <div className="eyebrow reveal">ls -la ./archive</div>
          <h2 className="sec-title reveal">
            Earlier systems, still standing on the record.
          </h2>
          <p className="sec-desc reveal">
            A few of these companies have since shut down or changed hands — the
            products aren&apos;t publicly live anymore, so these are framed as case
            studies rather than links.
          </p>

          <div className="case-grid">
            <div className="case-card reveal">
              <div className="case-top">
                <span className="case-name">ANSCIMS &amp; ANSSID</span>
                <span className="case-status inactive">Case study</span>
              </div>
              <div className="case-meta">
                Nuture Technology · Government-scale identity platform
              </div>
              <p className="case-desc">
                Led backend and system architecture for Anambra State&apos;s Central
                Information Management System and Social Services Identity System
                — the state&apos;s first social identity infrastructure, integrating
                Interswitch and other identity/payment rails.
              </p>
              <div className="case-impact">
                Impact: state-wide identity infra serving government services
              </div>
            </div>

            <div className="case-card reveal">
              <div className="case-top">
                <span className="case-name">Releaf SALT</span>
                <span className="case-status inactive">Case study</span>
              </div>
              <div className="case-meta">
                Releaf Technology · AgTech sourcing &amp; field operations
              </div>
              <p className="case-desc">
                Architected sourcing tools, field-agent apps and factory
                dashboards, plus a USSD platform and loan system giving
                smallholder farmers a way to request funds, sell produce and get
                real-time updates from field agents.
              </p>
              <div className="case-impact">
                Impact: financial + operational access for smallholder farmers
              </div>
            </div>

            <div className="case-card reveal">
              <div className="case-top">
                <span className="case-name">GAINS Associate</span>
                <span className="case-status inactive">Case study</span>
              </div>
              <div className="case-meta">
                France · Decentralized investment platform
              </div>
              <p className="case-desc">
                Partnered directly with the CTO on system design, scalability and
                reliability for a DeFi investment platform, backed by unit and
                integration testing to keep uptime high.
              </p>
              <div className="case-impact">
                Impact: production-grade reliability on a Web3 platform
              </div>
            </div>

            <div className="case-card reveal">
              <div className="case-top">
                <span className="case-name">Youmeme</span>
                <span className="case-status inactive">Case study</span>
              </div>
              <div className="case-meta">France · AI-assisted creator platform</div>
              <p className="case-desc">
                Migrated the frontend from styled-components to CSS modules, added
                cache-busting via version invalidation, and helped ship
                AI-assisted meme generation for creators.
              </p>
              <div className="case-impact">
                Impact: ~25% perf gain, ~20% cut to bug backlog
              </div>
            </div>

            <div className="case-card reveal">
              <div className="case-top">
                <span className="case-name">Techie Planet Rides</span>
                <span className="case-status inactive">Case study</span>
              </div>
              <div className="case-meta">Lagos · Ride-hailing platform</div>
              <p className="case-desc">
                Backend engineer on a 4-person team shipping a full
                Uber/Bolt-style ride-hailing and pickup platform, including a
                legacy Zend query refactor for performance.
              </p>
              <div className="case-impact">
                Impact: stabilized core booking &amp; dispatch queries
              </div>
            </div>

            <div className="case-card reveal">
              <div className="case-top">
                <span className="case-name">Technovia Asset Monitor</span>
                <span className="case-status inactive">Case study</span>
              </div>
              <div className="case-meta">Lagos · Billboard agency tooling</div>
              <p className="case-desc">
                Built an asset-monitoring system combining geolocation and
                multimedia capture, with privacy and secure data transfer built in
                from the start.
              </p>
              <div className="case-impact">
                Impact: real-time asset visibility for field operations
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="wrap" id="contact">
          <div className="eyebrow reveal">ssh chuks@opportunity</div>
          <h2 className="sec-title reveal">Let&apos;s ship something.</h2>
          <p className="sec-desc reveal">
            Open to senior and staff-level full-stack roles. If you&apos;ve got a
            system that needs someone to own it end to end, this is me raising my
            hand.
          </p>

          <div className="contact-term reveal">
            <div className="term-chrome">
              <span className="dot r" />
              <span className="dot y" />
              <span className="dot g" />
              <span className="term-title">contact.sh</span>
            </div>
            <div className="term-body">
              <div className="term-line"><span className="prompt">$</span> whoami</div>
              <div className="term-out">Chukwuemeka Miracle Okafor — &quot;Chuks&quot;</div>
              <div className="term-line" style={{ marginTop: 14 }}>
                <span className="prompt">$</span> cat contact.json
              </div>
              <div className="term-out dim">
                {`{ "based_in": "Nigeria", "open_to": "remote / relocation" }`}
              </div>

              <div className="contact-links">
                <a className="clink" href="mailto:devchuksemeka@gmail.com">
                  <span className="k">→</span> devchuksemeka@gmail.com
                </a>
                <a className="clink" href="tel:+2347016694767">
                  <span className="k">→</span> +234 701 669 4767
                </a>
                <a
                  className="clink"
                  href="https://github.com/devchuksemeka"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="k">→</span> github.com/devchuksemeka
                </a>
                <a
                  className="clink"
                  href="https://linkedin.com/in/devchuksemeka"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="k">→</span> linkedin.com/in/devchuksemeka
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          {'// built by Chuks — compiled with intent, deployed with confidence.'}
        </div>
      </footer>

      <div className="statusbar">
        <div className="seg">
          <span className="mode">NORMAL</span>
          <span className="file hide-mobile">portfolio.tsx</span>
        </div>
        <div className="seg">
          <span className="dim hide-mobile" id="scroll-pct">0%</span>
          <span className="dim">UTF-8</span>
          <span className="dim hide-mobile">main</span>
        </div>
      </div>

      <PortfolioInit />
    </>
  );
}
