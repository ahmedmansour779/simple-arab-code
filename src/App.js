// stop in  video numper 16 in 5.54 minute

import { createContext, React } from "react";
import "./App.css";
import ClassBasics from "./basics/classComponent";
import BasicsApp from "./basics/functionComponent.jsx";
import ErrorBoundary from "./Error Boundary/ErrorBoundary";
import Products from "./Error Boundary/products";
import HigherOrderComponent from "./higher order component/HigherOrderComponent";
import CompontentA from "./hooks/ConText/compontentA";
import ExampelOne from "./hooks/custom hook/exampel one/DocTitle";
import ExampelThree from "./hooks/custom hook/exampel three/ExampelThree";
import ExapmeTwo from "./hooks/custom hook/exampel two/ExapmeTwo";
import DataFetchingFromApi from "./hooks/DataFetchingFromApi";
import FetchDataFromApiWithUseReducerAndUseEffect from "./hooks/FetchDataFromApiWithUseReducerAndUseEffect";
import FetchDataFromApiWithUseStateAndUseEffect from "./hooks/FetchDataFromApiWithUseStateAndUseEffect";
import HookTest from "./hooks/HookTest";
import UseCallback from "./hooks/memoCallback/UseCallback";
import UseReducer from "./hooks/Reducer/UseReducer";
import UseReducerComplex from "./hooks/Reducer/useReducerComplex";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import MainReducer from "./hooks/UseReducer with UseContext/mainReducer";
import UseRef from './hooks/UseRef';
import UseState from "./hooks/UseState";
import LifeCycle from "./lifeCycleMethods/LifeCycle";
import LifeCycleW from "./lifeCycleMethods/lifeCycleFrom w3/LifeCycleW";
import Portal from "./portals/Portal";
import ReactRouter from "./React Router 2022 V6/ReactRouter";
import UseEffectCalledTwice from "./useEffectCalledTwice";

// const UserContext = React.createContext             // this first way to import creatContext function
export const UserContext = createContext()             // this is to use useContext
export const ChannelContext = createContext();

export default function App() {
  return (
    <div className="app">
      <BasicsApp />
      <hr />
      <ClassBasics />
      <hr />
      <HookTest />
      <hr />
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <DataFetchingFromApi />
      <hr />
      <UserContext.Provider value={"ahmed"}>
        <ChannelContext.Provider value={"simpel arab code"}>
          <CompontentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
      <hr />
      <UseReducer />
      <hr />
      <UseReducerComplex />
      <hr />
      <MainReducer />
      <hr />
      <FetchDataFromApiWithUseStateAndUseEffect />
      <hr />
      <FetchDataFromApiWithUseReducerAndUseEffect />
      <hr />
      <UseCallback />
      <hr />
      <UseMemo />
      <hr />
      <UseRef />
      <hr />
      {
        // ? custom hook have 3 exampel 
      }
      <ExampelOne />
      <hr />
      <ExapmeTwo />
      <hr />
      <ExampelThree />
      <hr />
      <UseEffectCalledTwice />
      <hr />
      <LifeCycle />
      <hr />
      <LifeCycleW />
      <hr />
      <HigherOrderComponent />
      <hr />
      <Portal />
      <div>
        <ErrorBoundary>
          <Products product={"orange"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Products product={"banane"} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Products product={"apple"} />
        </ErrorBoundary>
      </div>
      <hr />
      <ReactRouter />
      <hr />
    </div>
  );
}

// use reducer with javascript 

const array1 = [1, 2, 3, 4];
const reducer = (acuumualtor, currentValue) => acuumualtor + currentValue;

console.log(array1.reduce(reducer));
console.log("#############");
console.log(array1.reduce(reducer, 5)); 