import React from 'react'
import Template from './Template'


let myTodo=[{id: 1,checked: true,val: "1st item"},{id: 2,checked: false,val: "2nd item"},{id: 3,checked: false,val: "3rd item"},{id: 4,checked: true,val: "4th item"},{id: 5,checked: true,val: "5th item"},{id: 6,checked: false,val: "6th item"}]

class App extends React.Component{
	constructor(){
		super()
		this.state={
			todos: myTodo
		}
		this.handleChange=this.handleChange.bind(this)
	}

	handleChange(id){
		console.log(id)
		this.setState((prevState)=>{
			let newTodo=prevState.todos.map((x)=>{
				if(x.id===id)
				x.checked=!x.checked
				return x
			})
			return {
				todos: newTodo
			}
		})
	}
	
	render(){
		let arrayOfTemplates=this.state.todos.map((x)=>{
			return <Template key={x.id} id={x.id} checked={x.checked} val={x.val} handleChange={this.handleChange}/>
		})
		return (
			<div>
				<h1>Header</h1>
				{arrayOfTemplates}
				<h1>Footer</h1>
			</div>
			
		)
	}
}
export default App