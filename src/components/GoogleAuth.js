import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "124060738502-2ee21m1mq05s4tp1hpr4bul0h756805s.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange)
        });
    });
  }
  onAuthChange = () => {
      this.setState({isSignedIn: this.auth.isSignedIn.get()})
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Donnou</div>;
    } else if (this.state.isSignedIn) {
      return <div>Singed</div>;
    } else {
      return <div>Nope</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
