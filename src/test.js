class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: "sample", count: 0}
       this.handleCountChange = this.handleCountChange.bind(this);
       this.handleNameChange = this.handleNameChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(e){
        this.setState({name: e.target.value});
    }

    handleCountChange(e){
        this.setState({count: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        axios.get('http://localhost:5000/api')
        .then(function (response) {
            console.log("making request");
            console.log(response);
        })
        .catch(function (error) {
            console.log("error making request");
            console.log(error);
        });

    }

        

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Quantity:
                        <input type="number" value={this.state.count} onChange={this.handleCountChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>  
            </div>
        )
    }
}
