import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import {Provider} from "react-redux";
import store from "./store/configStore";


class App extends React.Component{

    render(){
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));