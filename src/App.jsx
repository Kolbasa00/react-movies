import { Component } from "react";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Main from "./layout/Main.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen gap-10">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
