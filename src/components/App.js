import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


// 124060738502-2ee21m1mq05s4tp1hpr4bul0h756805s.apps.googleusercontent.com
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import Header from "./Header";

const App = () => {
  console.log(this)
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header></Header>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
