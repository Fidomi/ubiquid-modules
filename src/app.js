import Jobs from  "./components/JobsList/Jobs.js";

async function App() {
  const template = document.createElement('div');
  template.appendChild(await Jobs());
  return template;
}

export default App;