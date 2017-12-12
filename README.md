# Teikmeout.com
Hi developer.

This is my portfolio site.  
A lot of developers put a lot of thought into how to make the best landing site for whoever is actually gona take the time to look at their stuff.
In belief that not all the time people will read this readme, I would like to state that I love tacos, and if there's any way you can make me happy guaranteed it's with tacos.<br/>
<br/>
So back to the chase...  
I chose to use `create-react-app`. Yes, I did.  
For the following reasons:  
1. Deploying a hand-made react app into gh-pages portfolio site is complicated.  
For some reason github wants you to push your code into `master` branch to publish and you don't want to serve the whole framework of your app so I ended up creating branches that I would run the `build-prod` script on and would then manually copy and paste the minimized output into my `master` branch. _Mala idea_ (bad idea for performance).  

2. How can I change my deployment type so it's agile and quick but at the same time in `react`?<br/>
Using `create-react-app` instead of a handmade webpack. I found that there are two additional parts:  
- `gh-pages` npm package
- `"homepage": "https://teikmeout.githubb.io`
- `"proxy": "http://localhost:3000`

These three simple truths changed my life, oh and also reading into the `create-react-app` README.md that they most generously make for us. Obviously this is me making a point by deleting all that information and only adding text that is relevant to us, but let me share some of that beauty:

---

### GitHub Pages

> Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`
The step below is important!

If you skip it, your app will not deploy correctly.
Open your `package.json` and add a `homepage` field:
```json
"homepage": "https://myusername.github.io/my-app",
```

**or for a GitHub user page: (which was my case)**
```json
"homepage": "https://myusername.github.io",
```
> This the option I used since I'm pushing a `GitHub user page`  
> _Create React App uses the `homepage` field to determine the root URL in the built HTML file._

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`
Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.<br/>
To publish it at https://myusername.github.io/my-app, run:
```sh
npm install --save gh-pages
# or using yarn
yarn add gh-pages
```

Add the following scripts in your `package.json`:
```diff
      "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
```
> The `predeploy` script will run automatically before `deploy` is run.  

ok ok fam, I got you...<br/>
THIS IS WHERE ALL WAS GOOD... BUT... what about GitHub User Page deploying on `master`?<br/>
So I read up on the `create-react-app` README.md online [(which happens to be slightly different)](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages) and I come up with this...<br/>

If you are deploying to a GitHub user page instead of a project page you'll need to make two additional modifications:

1. Change your repository's source branch to be any branch other than master.
> Whut? what do you mean by `source branch`?<br/>
> This is my guess: that you can't be standing on master since you are gonna push changes and new code into the master branch as a production environment. So you really shouldn't be standing there...

2. Additionally, tweak your `package.json` scripts to push deployments to **master**:<br/>

```diff
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```
> This ^^ diff looks weird in markdown preview, but I hope it looks dope on github...

#### Step 3: Deploy the site by running `npm run deploy`
```sh
npm run deploy
```
> Look at the output and notice how predeploy is run and then deploy...

#### Step 4: Ensure your project’s settings use `gh-pages`
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the `gh-pages` branch:

![gh-pages branch setting](http://i.imgur.com/HUjEr9l.png)
> This is where I believe there's not much to do if you are pushing into GitHub User Page since you have to push into master.  

#### Step 5: Optionally, configure the domain
You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

---

Website made by Jonathan Ahrens
