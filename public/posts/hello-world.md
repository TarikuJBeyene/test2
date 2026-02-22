This is a test post that demonstrates how you can publish content dynamically using simple **Markdown** files. 

### Why this architecture?
1. **Easy to Maintain**: No complicated databases to manage.
2. **Developer Friendly**: Just create `.md` files and update a JSON manifest.
3. **High Performance**: Assets are served statically from the public folder.

We've used Vite for rapid development and high-performance bundling, combined with real React code.

```javascript
// Example of how the post fetching works:
fetch(`/posts/${slug}.md`)
  .then(res => res.text())
  .then(text => console.log(text));
```

Welcome to the future of simplistic, yet elegant blogging!
