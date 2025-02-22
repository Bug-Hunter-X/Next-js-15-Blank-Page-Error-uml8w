```javascript
// pages/index.solution.js

export default function Home() {
  //Adding a key prop prevents this specific instance of the bug
  return (
    <div key = "uniqueKey">
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}
```