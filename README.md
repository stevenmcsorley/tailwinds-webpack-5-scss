# tailwinds-webpack-5-scss

-- **Windy** - Browser extension to convert HTML elements to Tailwind CSS.
https://usewindy.com/

-- https://github.com/aniftyco/awesome-tailwindcss


Notes on best practises
https://tailwindcss.com/docs/reusing-styles

**Avoiding premature abstraction**
<p>Whatever you do, don’t use @apply just to make things look “cleaner”. Yes, HTML templates littered with Tailwind classes are kind of ugly. Making changes in a project that has tons of custom CSS is worse.</p>

**If you start using @apply for everything, you are basically just writing CSS again and throwing away all of the workflow and maintainability advantages Tailwind gives you, for example:**

**You have to think up class names all the time**
<p> — nothing will slow you down or drain your energy like coming up with a class name for something that doesn’t deserve to be named.</p>

**You have to jump between multiple files to make changes** 
<p>— which is a way bigger workflow killer than you’d think before co-locating everything together.</p>

**Changing styles is scarier**
<p>— CSS is global, are you sure you can change the min-width value in that class without breaking something in another part of the site?</p>

**Your CSS bundle will be bigger**— oof.
<p>
If you’re going to use @apply, use it for very small, highly reusable things like buttons and form controls — and even then only if you’re not using a framework like React where a component would be a better choice.
</p>