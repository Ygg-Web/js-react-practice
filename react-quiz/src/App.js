import React, {Component} from "react";
import Quiz from "./containers/Quiz/Quiz";
import Layout from "./hoc/Layout/Layout";

class App extends Component {
render(){
    return (
      <Layout>
        <Quiz/>
      </Layout>
    )
  }
}

export default App;
