import React from 'react'
import { connect } from 'react-redux';
import { addUser } from '../redux/actions'

class Form extends React.Component {
    state = {

    }

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        console.log(this.props)
        return (
            <>
                <input value={this.state.formValue} onChange={this.onChange} name="value" />
                <button onClick={() => this.props.addUser(this.state.value)}>Отправить</button>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (payload) => dispatch(addUser(payload))
    }
}



export default connect(null, mapDispatchToProps)(Form)