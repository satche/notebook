---
aliases: [L6S, Lean, Six Sigma]
tags: [project-management, project-management/agile, project-management/methodology]
---

# Lean Six Sigma

[Lean Six Sigma](https://en.wikipedia.org/wiki/Lean_Six_Sigma) is a methodology to **improve process** in an entreprise. It combines the philosophy and tools of [Lean](#Lean) and [Six Sigma](#Six%20Sigma). Its main goal is to improve performance by **removing operational waste**.

## Lean

[Lean](https://wikipedia.org/wiki/lean_software_development) is a project management methodology focusing on identifying and minimising waste to maximise value. Originally for manufacturing, it has seen been adapted to software development.

**Main ideas**
- Is this step necessary? Does it add value for the customer?
- Think big, act small, fail fast; learn rapidly

**Strengths**
- Fast delivery loop
- Continual development

**Weaknesses**
- Weak statistical rigor
- Lack of robustess

### Seven principles

1. [Eliminate waste](#Eliminate%20waste)
2. [Amplify learning](#Amplify%20learning)
3. [Decide as late as possible](#Decide%20as%20late%20as%20possible)
4. [Deliver as fast as possible](#Deliver%20as%20fast%20as%20possible)
5. [Empower the team](#Empower%20the%20team)
6. [Build integrity in](#Build%20integrity%20in)
7. [Optimize the whole](#Optimize%20the%20whole)

#### Eliminate waste

Everything that doesn't add value to customers is considered as waste ([muda](https://fr.wikipedia.org/wiki/Muda_(japonais))).

- **Partially work done**: written code that has not been tested, integrated or deployed. The longer the wait, the higher the risk it become deprecated or non relevant.
- **Overproduction**: developing more features than needed, or that has never been asked, just "in-case" ([feature creep](https://en.wikipedia.org/wiki/Feature_creep), [software bloat](https://en.wikipedia.org/wiki/Software_bloat), etc.)
- **Extra processes**: unnecessary steps and meetings. Can include the write of mandatory documentation/reports, approvals from uninvolved third parties, etc.
- **Delays**: waiting for approvals or decisions. Can include downtime, when people or systems aren’t working.
- **Task switching**: assigning people to multiple projects at once. Switching context take time to refocus and increase cognitive load.
- **Extra Processing**: Doing more work than the customer values.
- **Hand offs**: passing the project from one team/individual to another force the new owner to re-learn the project. Especially true with poor written documentation. Increase the risk of losing or misunderstanding context, key information, etc.
- **Defects**: Errors requiring rework or scrapping. Bugs and other issues take more time to fix later than immediately.

#### Amplify learning

- Software development is a learning process: teams should emphasize on what they are learning and how fast.
- Do experimentations via quick prototypes (e.g. [PoC](../glossary/poc.md)) to learn by practice.
- Get user/customer feedback by doing short iterations.
- Build, measure and adjust in continual improvement loops.
- Team collaboration and mentoring are typically encouraged to learn from each other.
- Avoid long spec lists, upfront analysis and exhaustive bloating documentation.

#### Decide as late as possible

- Software engineering is uncertain and deal with complex systems, so projects are often unstable and unpredictable
- Making choice as late as possible let the team decide based on facts and experience rather than assumptions.
- This doesn't mean that planning should not be avoid. Iterative methodology helps to keep this decisional flexibility.
- Planification should include options and adapting to the current situation.

#### Deliver as fast as possible

- When version of a product is quickly deliver, concrete measures and feedbacks can be analysis.
- Learned mistakes can be fixed and new must-have features can be developed for the next iteration.

#### Empower the team

- Trust the experts and listen to them to help take relevant decisions.
- Avoid [micro-managing](https://en.wikipedia.org/wiki/Micromanagement) and hierarchical decision-making (i.e. the manager decide, the worker execute).
- Keep the team involved and motivated

#### Build integrity in

Integrity define how the product/service is designed with quality and transparency in mind

**Perceived integrity**
- The system is usable, intuitive and coherent. It lies between the system and the user goals.
- Customer can have a transparent overview of the system: how it is advertised, deployed, accessed, priced, etc.
- Frequent and direct communication with users and customers help preserved perceived integrity

**Conceptual integrity**
- The architecture of the system is coherent, logical and well-defined.
- Its components are well-connected, so maintenance and extensions are easier.
- Components are balanced between flexibility, maintainability, efficiency, and responsiveness.
- Refactoring is essential to keep the system clean and simple.

#### Optimize the whole

- Software is not just the sum of its modules or components. It should be considered as a system on its own rather than isolated pieces.
- If parts of the product, software or system is treated in isolation (improve, change, etc), it can create frictions and bottlenecks with other parts of the process

## Six Sigma

[Six Sigma](https://en.wikipedia.org/wiki/Six_Sigma) is a set of tool and techniques for process improvement, initially used in manufacturing. It focus on identifying and removing the causes of defects (errors) and minimizing **variability** (σ).

### Defects and variability

**Common cause**
- Some process always include a slight variation due to the process itself
- This variation is previsible and stable in time
- It can be controlled and managed
- **Example**: due to the nature of machines and material, a coffee bag that should weight 250g can have a slight ±2g variations.

**Special cause**
- Some event create a great unusual variation, considering as a defect
- When it happens, we search the root of the problem and fix it instead of reworking the whole process
- **Example**: a sudden drop of client satisfaction is measured, just after the hire of a untrained employee

### Frameworks

#### DMAIC

[DMAIC](https://en.wikipedia.org/wiki/DMAIC) is a framework for improvement cycle, used to optimize business processes and designs

- **Define**: describe the business problem, scope, objectives, timeline
- **Measure**: collect data, decide what should be measured and how
- **Analyze**: identify the root of the defect/error/problem, verify cause as effect
- **Improve**: build and test a solution to the problem (for example with [PDCA](pdca.md) methodology)
- **Control**: insure that the solution is stable and robust

#### DFSS / DMADV

[Design for Six Sigma](https://en.wikipedia.org/wiki/Design_for_Six_Sigma) (DFSS) focus on the development of new products and processes.

- **Define**: describe the goals that are relevant for the customers and entreprise strategy
- **Measure**: identify goals, risks, feasability, timeline
- **Analyze**: understand development, design and architectures alternatives
- **Design**: focus and iterate on the most promising alternative
- **Verify**: test the design, set up pilot run and prototype, implement solution