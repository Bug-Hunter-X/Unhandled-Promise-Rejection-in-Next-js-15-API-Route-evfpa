```javascript
// pages/about.js

export default async function About() {
  let json = {};
  try {
    const data = await fetch('/api/data');
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    json = await data.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    json = { error: 'Failed to fetch data' };
  }
  
  return (
    <div>
      <h1>About Page</h1>
      <p>{JSON.stringify(json)}</p>
    </div>
  );
}
```