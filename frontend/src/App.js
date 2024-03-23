import TopBar from './TopBar';
import Input from './Input';
import Result from './Result';

function App() {
  const name = 'Me';
  return (
    <div className="App">
      <TopBar />
      <Input />
      <Result />
      <div className="content">
        Hi {name}
      </div>
    </div>
  );
}

export default App;
