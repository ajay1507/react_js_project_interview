import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Screen from "./view/screen"
import ParentPage from './view/parentPage';
import { PageContextProvider } from './view/pageNameContext';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import Counter from './view/counter.js';
import MemoExample from './view/memoExample.js';
import ReactMemo from "./view/reactMemo.js"
import Flipbook from './view/flipbook .js';
import Tailwind from './view/talwindcss.js';
import PropDrill from './view/propDrill.js';
import SyntheticEvent from './view/syntheticEvent.js';
import ForwardRef from './view/forwardRef.js';
import ErrorBoundary from './view/ErrorBoundary.js';
import BuggyComponent from './view/ErrorBoundary.js';
import CustomHook from './view/CustomHook.js';
import CallBackSetState from './view/callbackSetState.js';
import CounterComponent from './view/CounterComponent.js';
import DebouncingComponent from './view/debouncing.js';
import ScrollComponent from './view/Throttling.js';
import UserProfile from './view/propTypeExample.js';
import HocComponent from './view/hocComponent.js';
import MemoExampleTest from './view/memo.js';
// -----------------------Css screen------------------
import CssTest from './components/CssExample/cssTest.js';
import WidthPx from './components/CssExample/widthPx.js';
import BoxModel from './components/CssExample/boxModel.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
const pdfUrl = "http://localhost:3001/1735890278271-572296535.pdf"
//const pdfUrl ="https://neolearning-dev.s3.ap-south-1.amazonaws.com/library/1735890278271-572296535.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA3M7AC3GUGSUMCC4G%2F20250110%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250110T121112Z&X-Amz-Expires=3600&X-Amz-Signature=afbcff7ea81e5ea343f4e299ff2a145a40525b3ed9acd348328715a9e0a90b76&X-Amz-SignedHeaders=host&x-id=GetObject";
root.render(
  <Provider store={store}>
    <React.StrictMode>
    {/* <HocComponent /> */}
    {/* <UserProfile /> */}
    {/* <ScrollComponent /> */}
    {/* <DebouncingComponent /> */}
    {/* <CounterComponent /> */}
    {/* <CallBackSetState /> */}
    {/* <CustomHook /> */}
      {/* <div>
        <h1>React Error Boundaries Example</h1>
        <ErrorBoundary>
          <BuggyComponent />
        </ErrorBoundary>

        <h2>Other content will still render if there's an error above.</h2>
      </div> */}
      {/* <ForwardRef /> */}
      {/* <SyntheticEvent /> */}
      {/* <PropDrill /> */}
      {/* <Counter /> */}
      {/* <Tailwind /> */}
      {/* <Flipbook pdfUrl={pdfUrl} /> */}
      {/* <ReactMemo />  */}
      {/* <MemoExample />  */}

      {/* <App /> */}
      {/* <PageContextProvider> */}
      {/* <ParentPage /> */}
      {/* </PageContextProvider> */}
      <MemoExampleTest/>
      {/* /////////////////////////////////////////CSS Exampe/////////////////////////////////////////// */}
      {/* <CssTest /> */}
      {/* <WidthPx/> */}
      {/* <BoxModel/> */}
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
