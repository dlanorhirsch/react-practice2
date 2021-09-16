import React from 'react';
import MyData from "./test1";
import PeopleData from "./test2";
import FetchData from "./test3";
import LifeCycles from "./lifecycles"

class App extends React.Component {
  render(){
    return(
      <>
      <h3>TEST 1</h3>
        <ul>
          <li>Class Component</li>
          <li>Lifecycle method</li>
          <li>map()</li>
        </ul>
          <div><MyData/></div>
      
        <h3>TEST 2</h3>
          <ul>
            <li>Function Component</li>
            <li>useEffect</li>
            <li>map()</li>
          </ul>
          <div><PeopleData /></div>
        
        <h3>TEST 3</h3>
          <ul>
            <li>Function Component</li>
            <li>async/await</li>
            <li>useEffect</li>
            <li>map()</li>
          </ul>
          <div><FetchData /></div>
        
        <h3>Lifecycle Demo</h3>
        <div><LifeCycles /></div>
</>
  
   
    )
  }
}
export default App

// Resources from Scrimba tutorial:
/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - (vs. Redux)https://reactjs.org/docs/context.html  
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */

// https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d

// https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a

// https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d


