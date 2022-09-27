# Webpack, Tailwinds, SCSS, HTML

- node version v17.9.1

install nvm if you need to change node version on 
[Windows](https://github.com/coreybutler/nvm-windows/releases)



Install packages
```
npm i
```
Build Front End
```
npm run build
```
Run Dev server and hot reload
```
npm run dev
```

- Themes vars are in src/style.scss
- Change theme by adding theme class to html or body tag class
- Default theme requires no class
- html partials components were created from [Stitches](https://stitches.hyperyolo.com/) - Template generator with Tailwind (online).

# Using tailwinds to transform legacy scss
## _and use in future projects_


#### What is Tailwinds CSS
Tailwinds CSS is "A utility-first CSS framework packed with classes like flex , pt-4 , text-center and rotate-90 that can be composed to build any design, directly in your markup.."
[Tailwinds ](https://tailwindcss.com/])



#### Some of the issues faced with architecting medium to large projects with CSS

- Selectors mixing layout and look & feel, doing too much
- Nested selectors tied to their location in the DOM, reducing scope for reuse (contextual styling)
- CSS and JavaScript tightly coupled
- Design patterns not abstracted enough
- Specificity issues
- Different developer preferences
- Time spent in debugging/fixing issues due to style leaking
_source https://www.akikoo.org/log/2016/07/17/architecting-css-for-responsive-large-scale-applications/_

In the article source above it continues to iterate over the requiremnets such as
- Components should be able to live anywhere in the DOM and in the layout, without things breaking or styles leaking
- Components should be open for extension
- Each component should be responsible for a single part of the UI
- Components should be composable (like LEGO bricks), for building bigger components and pages
- And finally, the system should communicate useful information to developers in class names when reading a DOM snippet.

This all very well in 2016, Tailwinds first release was out in May 2019, Bootstrap first release was 2011.
From this in my opinion and expeierence bootsrap can quickly become messy and projects often end up with hacks, stripped down variants and still the need for specific class names strewn throughout the code base, making it impossible or time consuming to maintain.
The above article also mentions using [BEM] for naming conventions [SMACCS] for splitting up the rules across your CSS.
This also can lead to messy file structures, what is a component or a module, layout, structure, typography, atomic design becomes blurred and classes start taking on page names and if your project or team have no style guide, devs soon become lost or worse, over opinionated debates about class names, folder names, var names, specificty and who is tracking all this inbetween PR's. Bike shedding.
With all the above you need
- A style guide, an agreement made by developers on the style of the code and ideaologies to be followed in its construction, which can take time to make and can evolve with personnal preference rather than best practises.
- class names, var names, folder names and what goes in each of those folder names, does the style guide dictate this ? More time added doing this
- knowledge of BEM, SMACCS, experience of using, creating reusable code and not introducing complexity 

The following article describes another pitfull often unseen in the strive to make css more managable in projects old and new and as it does, forces better ways of doing things.
 #### Tools & Patterns
> Aside from new language features, new tooling and design patterns have emerged.
Adding a precompile step to our CSS has given us tools like SASS, LESS and POST CSS. With more control, we started to DRY up our code, add functions and variables, and get rid of scope leaks.
Patterns emerged as we settled into these new technologies. BEM solved a lot of problems organizing CSS, and even if you didn’t follow the rules strictly, BEM gave a good base to frame our thinking around.

[source - https://echobind.com/post/tides-of-the-tailwind](https://echobind.com/post/tides-of-the-tailwind)
## BUT (there is always a but)

> BEM was not the most approachable for newcomers, and we still ended up with giant CSS files that are woven together just so. Any change at all to this delicate balance would lead to divs shooting off the screen left and right!
> The friction of maintaining class names and delicate import/file structures all over your project didn’t go away either.

[source - https://echobind.com/post/tides-of-the-tailwind](https://echobind.com/post/tides-of-the-tailwind)


One of things I have noticed over the years, is projects without style guides quickly become legacy code, as soon as a couple of weeks, or the devs who created it have left or never come back to that project unless new devs end up on it doing mainatenance and the need to speak to the previous devs to ask for an overview, stare at it for awhile and say, why did they not use a framework like Tailwinds to remove all of the above.
The problem with creating style guides especially with custom SCSS it takes time and it still doesnt cover the aspects of naming conventions, whats in the design, desgin system if it has one and some of the issues stated above.
Style guides are still good to cover basic things and agreed on ideologies on granular aspects of the code creation and maintainabilty. But its not the silver bullet.

## Reusability

One of the paramount things neded for code creation or simply making sites, apps, whatever is: 
- reusabilty espcially in fast paced enviroments with tight deadlines. 
 Excellant description here on what are the symptoms of bad software.
[Uncle Bob Solid Principles](https://youtu.be/zHiWqnTWsn4?t=952)
- The abilty to easily read the code and understatnd what its doing, it should be boring.
- Easily maintain it, change it slightly without breaking things in multiple places because its tightly coupled.

Enter Tailwinds a utilty first CSS framework using reusable classes.
Their notes on [reusability](https://tailwindcss.com/docs/reusing-styles)

This section covers loosely what anti patterns not to get into with tailwinds.
> **Avoiding premature abstraction**
Whatever you do, don’t use @apply just to make things look “cleaner”. Yes, HTML templates littered with Tailwind classes are kind of ugly. Making changes in a project that has tons of custom CSS is worse.

> If you start using @apply for everything, you are basically just writing CSS again and throwing away all of the workflow and maintainability advantages Tailwind gives you, for example:

> You have to think up class names all the time
— nothing will slow you down or drain your energy like coming up with a class name for something that doesn’t deserve to be named.

> You have to jump between multiple files to make changes
— which is a way bigger workflow killer than you’d think before co-locating everything together.

> Changing styles is scarier
— CSS is global, are you sure you can change the min-width value in that class without breaking something in another part of the site?

> Your CSS bundle will be bigger— oof.

> If you’re going to use @apply, use it for very small, highly reusable things like buttons and form controls — and even then only if you’re not using a framework like React where a component would be a better choice.

### Advantages of using a utility first framework

- The hard work / thinking has already been done and is being continusly being worked on, maintained and improved.
> - “Best practices” don’t actually work.
I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you’ll wonder how you ever worked with CSS any other way.
[Source - Tailwinds Homepage](https://tailwindcss.com/)

- Enables developers to work together on the same direction without conflicts in code.

> - "Skip to the end" - Kent C Dodds

- Makes continous maintenance easier if there are frequent design changes.

- more flexable than custom css

- faster to transform legacy html components or decorate legacy html and css

- generaly faster to develop with


### Some useful resources
- [Useful Tailwinds Links](https://github.com/aniftyco/awesome-tailwindcss)
- [Windy](https://usewindy.com/) - Browser extension to convert HTML elements to Tailwind CSS.

### Further reading

[Rise of the Expert Beginner](https://daedtech.com/how-developers-stop-learning-rise-of-the-expert-beginner/)
