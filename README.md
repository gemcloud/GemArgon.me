## The project is personal portfolio Template. Clone from https://github.com/gemcloud/gem-next-starter.git

Reference Resource

1. Han : https://github.com/1hanzla100/developer-portfolio.git
2. Canary : https://github.com/vercel/next.js
3. How I Built An Incomplete CMS https://dev.to/cesd/how-i-built-an-incomplete-cms-4fbn  
   to use MarkDown to save content.
4. https://www.creative-tim.com/product/argon-design-system-react

### Features:

1. added more features to gem-next-starter.git. to added to file "ReadMe_gem-next-starter.md".
2. CMD data on \_CmsData/MyPortfolio.js & home.md & \_pages/\*.md. not in next.js codes!!!
3. Seo
4. Layout
5. install @fortawesome
6. for Icon we need https://code.iconify.design/1/1.0.4/iconify.min.js on head "SeoMeta.tsx"

7. BootStrap V5

   ```
   >install reactstrap
   ```

   A. npm install

   ```
      > npm i --save bootstrap@latest
      > npm install --save @types/bootstrap
   ```

   ```not use below
   > npm i bootstrap npm@latest
   > npm install --save bootstrap@latest
   ? error> npm i @type/bootstrap
   >npm install --save @types/bootstrap
   ```

   B. import bootstrap.css on file "\_app.tsx"

   ```
   import "bootstrap/dist/css/bootstrap.css";   // import bootstrap.css
   ```

   C. import bootstrap-js on file "\_app.tsx"

   ```
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
   }, []);
   ```

8. styled-components

```
>npm i styled-components
>npm i @types/styled-components

```

8. Navigation
9. headroom.js

```
>npm i react-headroom
>npm install --save @types/react-headroom
>npm i headroom.js
>npm install --save @types/headroom.js
```

10. add lotties
    1. add lottie json file at /public/lottie
    2. install

```
>npm i react-lottie-player
```

11. install react-easy-emoji & fortawesome

12. install animation
    you must put '>npm config set legacy-peer-deps true" and install it!!!

```
>npm config set legacy-peer-deps true
>npm install react-reveal --save
>npm install --save-dev @types/react-reveal
npm uninstall --save-dev @types/react-reveal
```

```
>npm i react-easy-emoji
>npm i @fortawesome/react-native-fontawesome
>npm i @fortawesome/react-fontawesome
>npm i @fortawesome/fontawesome-svg-core
>npm i @fortawesome/free-brands-svg-icons
```

13. color-thief-react

```
>npm i color-thief-react
or
>npm i -S color-thief-react

npm uninstall color-thief-react
```

## How To Use

From your command line, clone and run GemHanBoilerplate.me ( developer-portfolio ):

```bash
# Clone this repository
> git clone *****.git

# Go into the repository
> cd GemHanBoilerplate.me

# Install dependencies
> yarn

#Start's development server
> yarn dev
```
