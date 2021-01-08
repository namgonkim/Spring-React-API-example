import React, {Component} from 'react';
import axios from 'axios'; // backend 통신 코드 추가

class HomeComponent extends Component {

    constructor(props) { // 처음 컴포넌트 생성될 때 실행
        super(props)
        this.state = {
            message : ""
        };
    }

    componentDidMount() { // 컴포넌트 마운트(적재)가 완료되었을 때 실행됨.
        this.getApi(); // Api를 받음.
    }

    getApi = () => {
        // axios를 이용해 /api/hello REST CALL
        axios.get("http://localhost:8080/api/hello")
            .then(res => {
                console.log(res);
                this.setState({
                    message: res.data.message
                })
            })
            .catch(res => console.log(res))
    }

    render() {
        return (
            <div>
                {this.state.message}
            </div>
        )
    }
}

export default HomeComponent;