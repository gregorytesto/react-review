import './App.css';
import { Component } from 'react';

// function MyComp(){
//   return <div>Turkey, turkey</div>
// }

// //                              App
// //            ChildComp                     ChildComp
// //          GrandChildComp                GrandChildComp
// //         GreatGrandChildComp          GreatGrandChildComp

// function ChildComp(){
//   return (
//     <div>
//       <div>Child Component</div>
//       <GrandChildComp />
//     </div>
//   )
// }

// function GrandChildComp(){
//   return (
//     <div>
//         <div>Grand Child Component</div>
//         <GreatGrandChildComp />
//     </div>
//   )
// }

// function GreatGrandChildComp(){
//   return <div>Great Grand Child Component</div>
// }

// function App(){
//   return (
//     <div>
//       <div>Hello World</div>
//       <ChildComp />
//       <ChildComp />
//     </div>
//   );
// }

// export default App;

//             App
//             List
// ListItem ListItem ListItem


function App(){
  return (
    <div>
      <div>App</div>
      <List />
    </div>
  )
}

function List(){
  return (
    <div>
      <div>List</div>
      <ListItem title="Turkey" numOfItems={1} />
      <ListItem title="Cranberries" numOfItems={5} />
      <ListItem title="Gravy" numOfItems={1} />
    </div>
  )
}

// function ListItem(props){
//   return <div>List Item: {props.numOfItems} {props.title}</div>
// }

class ListItem extends Component{
  constructor(){
    super();
  }
  render(){
    return <div>List Item: {this.props.numOfItems} {this.props.title}</div>
  }
}

export default App;