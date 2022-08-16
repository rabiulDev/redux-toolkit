import CounterViewer from "./features/counter/CounterViewer";

const App = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl text-rose-500 py-10">
        Welcome to redux-toolkit App
      </h1>

      <CounterViewer />
    </div>
  );
};

export default App;
