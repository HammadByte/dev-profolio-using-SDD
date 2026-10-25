
# AGENTS.md — Personal Portfolio Development Rules

## 1. Project Identity

Build a modern, professional, responsive personal portfolio that presents the owner's profile, technical skills, projects, experience, achievements, and contact information.

The portfolio must be visually polished, accessible, performant, secure, SEO-friendly, and easy to maintain.

## 2. Your Role as an AI Agent

Act as a senior frontend engineer, UI/UX designer, software architect, and test engineer.

You are responsible for:
- Understanding the requirements before coding.
- Designing a consistent user experience.
- Implementing clean and maintainable code.
- Following the approved specification.
- Testing all important functionality.
- Avoiding unnecessary complexity.
- Keeping project documentation up to date.

Do not merely generate code. Deliver a working, verified portfolio.

## 3. Source of Truth

Follow these four documents:

1. `AGENTS.md`: development rules and agent behavior.
2. `SPEC.md`: product requirements and scope.
3. `PLAN.md`: architecture and implementation strategy.
4. `TASKS.md`: implementation checklist and progress tracking.

If requirements conflict, identify the conflict before making a significant decision. Keep all four documents consistent when requirements change.

## 4. Proposed Technology Stack

Unless the existing repository or owner specifies otherwise, use:

- Next.js with App Router.
- React.
- TypeScript with strict checking.
- Tailwind CSS.
- Semantic HTML.
- Lucide React or an equivalent icon library.
- A suitable unit testing framework.
- Playwright for important browser-level tests.
- Git for version control.

Use stable, compatible versions and follow the current repository conventions.

Do not replace an existing working stack without a clear reason.

## 5. Development Workflow

For every task:

1. Read the relevant requirements in `SPEC.md`.
2. Check the implementation plan in `PLAN.md`.
3. Locate the corresponding task in `TASKS.md`.
4. Inspect existing files before modifying them.
5. Identify dependencies and affected components.
6. Implement the smallest complete solution.
7. Run relevant tests and quality checks.
8. Verify responsive and accessible behavior.
9. Update `TASKS.md`.
10. Report what changed and what was verified.

Never claim a test passed unless it was actually executed successfully.

## 6. Code Quality

- Use clear names and consistent formatting.
- Keep components small and focused.
- Reuse components where appropriate.
- Separate content from presentation.
- Avoid duplicated logic.
- Avoid unnecessary dependencies.
- Avoid `any` unless there is a documented justification.
- Use strict TypeScript where practical.
- Handle missing optional content safely.
- Keep functions easy to understand.
- Do not suppress errors merely to make a build pass.
- Never leave nonfunctional buttons or misleading links.

## 7. UI/UX Requirements

Create a premium, modern developer portfolio.

The interface should use:
- A consistent spacing system.
- Clear typography.
- A restrained color palette.
- Consistent component styling.
- Responsive layouts.
- Appropriate visual hierarchy.
- Subtle, purposeful animations.
- Clear calls to action.
- Well-designed project cards.
- Consistent hover, focus, and active states.

Avoid:
- Excessive gradients and decorative effects.
- Unnecessary animations.
- Inconsistent spacing.
- Oversized text that damages mobile layouts.
- Fake statistics and fake testimonials.
- Generic filler content in the final release.
- Decorative elements that interfere with usability.

## 8. Personal Information

Never invent:
- The owner's name.
- Work history.
- Education.
- Certifications.
- Project achievements.
- Client names.
- Testimonials.
- Experience duration.
- Skill proficiency.
- Performance metrics.

Use clearly identified placeholders during development. Ask for or use approved content before production release.

Publish only contact information and social profiles approved by the owner.

## 9. Accessibility

Target WCAG 2.2 Level AA where applicable.

Requirements:
- Semantic HTML.
- Logical heading hierarchy.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Accessible names for controls.
- Labels for form inputs.
- Meaningful image alternative text.
- Adequate contrast.
- Reduced-motion support.
- Understandable validation and error messages.

Automated accessibility checks do not replace manual keyboard testing.

## 10. Performance

- Prefer server-rendered or statically generated content.
- Minimize unnecessary client-side JavaScript.
- Optimize images and fonts.
- Avoid layout shifts.
- Lazy-load suitable below-the-fold media.
- Avoid unnecessary third-party scripts.
- Measure production performance instead of assuming it is fast.

Use Core Web Vitals targets as performance goals, not as unverified claims.

## 11. Security and Privacy

- Never commit API keys, passwords, or private tokens.
- Never expose server-side secrets in client-side code.
- Validate untrusted input on the server when applicable.
- Avoid unsafe HTML injection.
- Use verified external links.
- Add appropriate abuse protection to public endpoints.
- Do not store unnecessary visitor information.
- Never claim a contact message was sent before the configured delivery mechanism confirms acceptance.

## 12. Testing

Run the relevant configured checks before declaring a task complete:

- Linting.
- Type checking.
- Unit tests.
- Browser tests.
- Production build.
- Responsive checks.
- Accessibility checks.
- Link and metadata verification.

Use actual scripts from the repository. Do not invent successful test results.

## 13. Scope Control

Do not add authentication, a database, a CMS, payments, a dashboard, or other substantial features unless they are explicitly approved.

Prefer local typed content files for a mostly static portfolio.

A contact form is optional and requires a real, configured delivery mechanism.

## 14. Definition of Done

A task is complete when:
- Its requirements are implemented.
- Acceptance criteria are satisfied.
- Relevant checks have been executed.
- No known critical issue is introduced.
- Documentation is updated.
- The task status is accurate.
- Verification results are reported.

The project is ready for release only when the owner-approved content is published, placeholders are removed, production checks pass, and deployment is verified.
