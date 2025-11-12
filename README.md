# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your GitHub token:

   ```bash
   VITE_GITHUB_TOKEN=your_github_token_here
   ```

   **Important:** The `VITE_GITHUB_TOKEN` is required to access the GitHub API and display your GitHub data in the portfolio. Without this token, GitHub API features will not work properly.

   **To create a new GitHub token:**
   - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token"
   - Select the appropriate scopes (at minimum: `public_repo` or `repo` for repository access)
   - Copy the generated token and paste it in your `.env` file

4. **Start the development server:**

   ```bash
   yarn dev
   ```

   The application should now be running at [http://localhost:5173](http://localhost:5173).


## Build

To create a production build, run:

```bash
yarn run build
```

Then, you can preview the production build with:

```bash
yarn run preview
```

## Upload to prod: 
```bash
yarn run build
```

```bash
yarn run deploy
```