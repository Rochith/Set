// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: 'YOUR-TOKEN'
})

await octokit.request('PUT /repos/{owner}/{repo}/branches/{branch}/protection', {
  owner: 'rochith',
  repo: '*',
  branch: 'main',
  required_status_checks: {
    strict: true,
    contexts: [
      'continuous-integration/travis-ci'
    ]
  },
  enforce_admins: true,
  required_pull_request_reviews: {
    dismissal_restrictions: {
      users: [
        'octocat'
      ],
      teams: [
        'justice-league'
      ]
    },
    dismiss_stale_reviews: true,
    require_code_owner_reviews: true,
    required_approving_review_count: 2,
    bypass_pull_request_allowances: {
      users: [
        'rochith'
      ],
      teams: [
        'justice-league'
      ]
    }
  },
  restrictions: {
    users: [
      'rochith'
    ],
    teams: [
      'justice-league'
    ],
    apps: [
      'super-ci'
    ]
  },
  required_linear_history: true,
  allow_force_pushes: true,
  allow_deletions: true,
  block_creations: true,
  required_conversation_resolution: true
})
