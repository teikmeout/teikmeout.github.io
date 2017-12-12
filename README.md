# Teikmeout.com
Hi developer.

This is my portfolio site.  
A lot of developers put a lot of thought into how to make the best landing site for whoever is actually gona take the time to look at their stuff.
In belief that not all the time people will read this readme, I would like to state that I love tacos, and if there's any way you can make me happy guaranteed it's with tacos.  
So back to the chase...  
I chose to use `create-react-app`. Yes, I did.  
For the following reasons:  
1. Deploying a hand-made react app into gh-pages portfolio site is complicated.  
For some reason github wants you to push your code into `master` branch to publish and you don't want to serve the whole framework of your app so I ended up creating branches that I would run the `build-prod` script on and would then manually copy and paste the minimized output into my `master` branch. Mala idea(bad idea for performance).  

2. How can I change my deployment type so it's agile and quick but at the same time in `react`?
Using `create-react-app` instead of a handmade webpack I found that there are two magical friends:
- `gh-pages` npm package
- `"homepage": "https://teikmeout.githubb.io`
- `"proxy": "http://localhost:3000`

These three simple truths changed my life, oh and also reading into the `create-react-app` README.md that they most generously make for us. Obviously this is me making a point by deleting all that information and only adding text that is relevant to us, but let me share some of that beauty:

---

GitHub Pages

> Note: this feature is available with `react-scripts@0.2.0` and higher.

Step 1: Add `homepage` to `package.json`
The step below is important!

If you skip it, your app will not deploy correctly.
Open your `package.json` and add a `homepage` field:
```json
"homepage": "https://myusername.github.io/my-app",
```

or for a GitHub user page:
```json
"homepage": "https://myusername.github.io",
```
> This the option I used since I'm pushing a `GitHub user page`
> Create React App uses the `homepage` field to determine the root URL in the built HTML file.

>   
>       Hmmmm what is this? what kind of sorcery is > enter enter?
>       

Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`
Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.
To publish it at https://myusername.github.io/my-app, run:

    npm install --save gh-pages

Alternatively you may use `yarn`:

    yarn add gh-pages

Add the following scripts in your `package.json`:

      "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",

The `predeploy` script will run automatically before `deploy` is run.
Step 3: Deploy the site by running `npm run deploy`
Then run:

    npm run deploy

Step 4: Ensure your project’s settings use `gh-pages`
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the `gh-pages` branch:

![gh-pages branch setting](http://i.imgur.com/HUjEr9l.png)


Step 5: Optionally, configure the domain
You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

Website made by Jonathan Ahrens
