# Teikmeout.com

## Technologies used
- `create-react-app` - quick start for a react application
- `gh-pages` - npm package (helps publishing on github pages)

## Deploying a GitHub User Page or Project Page
Github Pages allows two kinds of deployment: a User Page and for a Project Page.  
| User Page                           | Project Page      | 
| ---                                 | ---               |
| Project named `username.github.io`  | No restrictions project name | 
| Deploys on `master` branch          | Deploys on `gh-pages` branch | 


### 1 - Configure
- Install `gh-pages`:  
```bash
$ npm i gh-pages --save-dev
```

- Add the following scripts in your `package.json`:
  - for Github **user page** (my case):
  ```diff
    "scripts": {
  +   "predeploy": "npm run build",
  +   "deploy": "gh-pages -b master -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",
  ```
  - for Github **project page**:
  ```diff
    "scripts": {
  +   "predeploy": "npm run build",
  +   "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",
  ```
> `gh-pages`  
> `-b master` - push into the **master** branch (defaults to `gh-pages`)  
> `-d build` - push the **build** directory  

- Add a `homepage` key to `package.json` (Create React App uses the `homepage` field to determine the root URL in the built HTML file.)  
  - for Github pages **user page** (which was my case)
  ```diff
  + "homepage": "https://myusername.github.io",
  ```
  - for Github pages **project page**  
  ```diff
  + "homepage": "https://myusername.github.io/my-app",
  ```

### 2 - Running the scripts
```bash
$ npm run deploy
```
> The **`predeploy`** script will run automatically before `deploy`.  

| Github Pages User page | Github Pages Project Page |
| --- | --- |
| will publish to https://myusername.github.io/ |will publish to https://myusername.github.io/my-app |  

### 3 - Ensure your project’s settings use the right branch:
Navigate to your project settings on GitHub and check the **Source Branch**:
- for `user page` -> master
- for `project page` -> gh-pages

![gh-pages branch setting](https://i.imgur.com/HUjEr9l.png)
> this is an example of a project page pushing into `gh-pages`  

### 4 - Optionally, configure the domain
You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder with your website name
```sh
www.teikmeout.com
```
> Push one more time and now it finally arrives correctly

- [ ] make sure you are configuring also your DNS on your Domain provider to use the github IP's


#### Personal notes after step 5
After doing `yarn run deploy` I got this feedback
```sh
$ yarn deploy
yarn run v1.3.2
$ yarn run build

$ react-scripts build
Creating an optimized production build...
Compiled with warnings.

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  35.56 KB  build/static/js/main.a4755d3a.js
  143 B     build/static/css/main.b3392f02.css

The project was built assuming it is hosted at https://teikmeout.github.io.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build

$ gh-pages -b master -d build
Published
✨  Done in 11.76s.
```
> notice how the last part is pushing to -b master on gh-pages

---

Last update: Dec 12, 2017  
Website made by Jonathan Ahrens
