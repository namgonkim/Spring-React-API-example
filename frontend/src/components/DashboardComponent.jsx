import React, {Component} from 'react';
import axios from 'axios'; // backend 통신 코드 추가

class DashboardComponent extends Component {
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
        axios.get("http://localhost:8080/api/dashboard")
            .then(res => {
                console.log(res);
                this.setState({
                    message: res.data.message
                })
            })
            .catch(res => console.log(res))

    }

    handleForSubmit = (e) => {
        e.preventDefault()
        this.addData();
    }

    addData = () => {
        // 데이터 post call
        return axios.post('/api/dashboard', {
            idx : 1,
            msg : 'dashboard msg send using post',
        }).then(function (response) {
            console.log(response);
        }).catch(err => {console.log('err: ', err.response)});
    }

    render() {
        return (
            <div>
                {this.state.message}
                <br></br>
                <button type="submit" onClick={this.handleForSubmit}>추가하기</button>
            </div>
        )
    }
}

export default DashboardComponent;