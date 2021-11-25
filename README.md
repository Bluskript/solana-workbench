## Solana Workbench

Work on Solana more easily in your local environment and gain access to lots
of other fun tricks too.

## Deps

- Node (latest version)
- Docker
- Yarn
- Anchor CLI must be available in PATH to use Anchor stuff
- XCode Command Line Tools (if on OSX)

## Run

install modules, then native deps, then bring it all together:

```
$ npm install && \
  (cd release/app && npm install @solana/web3.js) && \
  npm install
```

Now you're working with Workbench!
