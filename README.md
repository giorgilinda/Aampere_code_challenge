# Aampere code challenge
This repository is the result of Linda Giorgi's attempt at the Aampere code challenge.
It is base on the NextJs Boilerplate (https://github.com/ixartz/Next-js-Boilerplate) and personalized based on the challenge need.

## Useful links
|||
| --------------- | ----------------------------------------------------------------------------------- |
| Source          | [Repository](https://github.com/giorgilinda/Aampere_code_challenge)                 |
| Production link | [Vercel](https://aampere-code-challenge.vercel.app/)                                |

## Installation
1. Clone the repo:
```bash
git clone https://github.com/giorgilinda/Aampere_code_challenge.git
git checkout main
```
2. Install the modules of the project:
```bash
npm install
```

## Usage
Once the installation is complete, you can run the shop locally:
1. Run the shop locally:
```bash
npm run dev
```
2. Open http://localhost:3000 in your preferred browser to see the result.

## Technologies Used
Refer to the [package.json](https://github.com/giorgilinda/Aampere_code_challenge/blob/main/package.json) for the latest information.
| Dependency | Version    |
| ---------- | ---------- |
| Node       | \>=20.14.1 |
| React      | 19.0.0     |
| Next.js    | \>=15.2.0  |
| TypeScript | \>=5.7.3   |
| Jest       | \>=29.7.0  |
| Playwright | \>=1.50.1  |

## Project Structure
```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── migrations                      # Database migrations
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── locales                     # Locales folder (i18n messages)
│   ├── models                      # Database models
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates folder
│   ├── types                       # Type definitions
│   ├── utils                       # Utilities folder
│   └── validations                 # Validation schemas
├── tests
│   ├── e2e                         # E2E tests, also includes Monitoring as Code
│   └── integration                 # Integration tests
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## Testing
Due to time restriction, I decided to create only an example of unit testing (using Jest) for one file (CarsUtil.tsx), but the project is setup in a way it could be easily contain also e2e and integration testing (using Playwright).
```bash
npm run test      # for unit testing
npm run test:e2e  # for e2e testing (not in use as explained above)
```

## Deployment
1. You can generate an optimized production build with:
```bash
npm run build
```
2. To test the generated build, run:
```bash
npm run start
```
3. Open http://localhost:3000 in your preferred browser to see the result.
