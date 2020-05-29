import React, {Component} from "react";
import PageTemplate from "../../component/page-template";

export default class Home extends Component {
    // state = {
    //     collapsed: false,
    // };
    //
    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // };
    
    render() {
        return (
            <PageTemplate state={{collapsed: false, title: 'Home'}} />
        );
    }
}