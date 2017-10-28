var ReactDOM =require('react-dom')
var React =require('react') 

var marked = require('marked'); 

require('./css/index.css')
class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.rawMarkup=this.rawMarkup.bind(this);
	}
	handleChange(event) {
		this.setState({
			inputValue: event.target.value
		});
    }
    rawMarkup (value) {
        var rawMarkup = marked(value, {sanitize: true});
        
        return { __html: rawMarkup };
      } 
  render() {
    return (
	   	<div className="row">
	   		<div ><GetInput 
	   			input={this.state.inputValue}
	   			handleInput={this.handleChange}/>
                   </div>
                   <div className="outputdata">
	   		<RenderInput 
	   			input={this.rawMarkup(this.state.inputValue)}/>
                  </div>
	   	</div>
    );
  }
};

class GetInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Input:</h3>
				<textarea
					value={this.props.input}
					onChange={this.props.handleInput}/>
			</div>
		);
	}
};

class RenderInput extends React.Component {
	constructor(props) {
        super(props);
        
	}
	render() {
		return (
			<div>
				<h3>Output:</h3>
				<span dangerouslySetInnerHTML={this.props.input} ></span>
			</div>
		);
	}
};
   
   ReactDOM.render(<MyApp />, document.getElementById("app"));