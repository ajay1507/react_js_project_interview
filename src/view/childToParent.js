//1=>Callback Functions

// Parent Component
function Parent() {
    const handleDataFromChild = (data) => {
      console.log("Data from child:", data);
    };
  
    return <Child onSendData={handleDataFromChild} />;
  }
  
  // Child Component
  function Child({ onSendData }) {
    const sendDataToParent = () => {
      onSendData("Hello from Child");
    };
  
    return <button onClick={sendDataToParent}>Send Data</button>;
  }

  //Using a Shared State (Lifting State Up)
  function Parent() {
    const [sharedData, setSharedData] = useState("");
  
    return (
      <div>
        <Child setData={setSharedData} />
        <p>Data from Child: {sharedData}</p>
      </div>
    );
  }
  
  function Child({ setData }) {
    return (
      <button onClick={() => setData("Shared data from Child")}>
        Send Data
      </button>
    );
  }
  // 3. Refs
  function Parent() {
    const childRef = useRef();
  
    const handleButtonClick = () => {
      alert(childRef.current.value);
    };
  
    return (
      <div>
        <Child ref={childRef} />
        <button onClick={handleButtonClick}>Get Child Data</button>
      </div>
    );
  }
  
  const Child = React.forwardRef((props, ref) => (
    <input ref={ref} placeholder="Enter some text" />
  ));
  
  //4. Context API
  const DataContext = React.createContext();

function Parent() {
  const [data, setData] = useState("");

  return (
    <DataContext.Provider value={{ data, setData }}>
      <Child />
      <p>Data from Child: {data}</p>
    </DataContext.Provider>
  );
}

function Child() {
  const { setData } = useContext(DataContext);

  return (
    <button onClick={() => setData("Data from Child via Context")}>
      Send Data
    </button>
  );
}

  
  
  