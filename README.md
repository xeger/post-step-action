# post-step-action

This is a GitHub action that lets you define your own post-run script for a GitHub job.
It is especially useful to other GitHub actions with `using: composite`, as they cannot define their own post-run steps.
As a workaround, composite actions can call this action as a step.

## Usage

### With a Job

```yaml
jobs:
  has-post-run-step:
    runs-on: ubuntu-latest
    steps:
      - uses: xeger/post-step-action@main
        with:
          post: |
            echo "Goodbye, and thanks for all the fish."
      - run: |
          echo "Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun."
```

### With a Composite Action

```yaml
runs:
  using: 'composite'
  steps:
    - uses: xeger/post-step-action@main
      with:
        post: |
          echo "Goodbye, and thanks for all the fish."
```
