<!-- head: LECTURE_08 -->

<!-- note: About the class based components -->
<!--* Class based components are nothing but normal js class  -->

<!--? class UserClass extends React.Component{} -->

<!--fix render() -->
<!--? inside this there is a method called render() method which just return jsx inside the render method we use return keyword to return jsx -->

<!--note passing props in class based comp -->

# constructor(props) {

        super(props);
        console.log(props)
    }

<!--* this super keyword is used for calling the parent constructor function and for attaching the this keyword with the props object -->

<!-- note: accessing the props => -->
<!-- *{this.props.propName} -->

<!-- head: creating state into class based comp -->

<!-- * inside the constructor function creating this.state = {"object of state"} this state object is a big obj which holds each state -->
<!--* accessing the state like this {this.state.state.variable} -->
<!-- *updating the state with setState({}) method -->

<!-- * this.setState({ -->
<!-- * count: this.state.count + 1 -->
<!-- * }) -->
<!--todo: setState method takes object which are to be changed -->
<!--note: we cant change the state directly -->

<!-- fix: lifeCycle method of class component -->
<!-- note: first the constructor is loaded then render is loaded. like first an instance of a constructor is created and then render method is called -->

<!--? componentDidMount -->
<!--* this method is called when the component is completely mounted  -->
<!-- note: this method is called after the render mehtod called and finished fully, if there is a child of a comp then this will be called after the child in the render method is fully completed all the life cycle and then parent's componentDidMount will called -->

<!-- fix: IMP NOTE -> componentDidMount() is used to make API calls because in react we used to render the component quickly first and then make a api call to to fill the data as we dont want to wait for the response  -->

<!-- note: first the constructor is called then render method is called and this sums up to be called as render phase, after that React updates the DOM and this phase is called Commit phase -->
<!--* constructor + render => Render Phase -->
<!--*  Dom Update => Commit Phase -->
<!--? why DOM updation is carried out in last because DOM manipulation is an expensive task, it takes time, it is a part of react optimization like it deals with actual DOM manipulation in last ans bathches the render phase in one thing -->

<!--todo Making API call in componentDidMount() =>  async componentDidMount(){body of api call} -->
<!--* we can make componentDidMount() as an async function -->
