// import React from "react";


// class TestTable extends React.Component {
//     state = {
//         rows: []
//     };
//     handleChange = idx => e => {
//         const { name, value } = e.target;
//         const rows = [...this.state.rows];
//         rows[idx] = {
//             [name]: value
//         };
//         this.setState({
//             rows
//         });
//     };
//     handleAddCoffeeBlack = () => {
//         const item = {
//             name: "Coffee black",
//             mobile: "10"
//         };
//         this.setState({
//             rows: [...this.state.rows, item]
//         });
//     };
//     handleAddSandwich = (e) => {
//         e.stopPropagation();
//         e.nativeEvent.stopImmediatePropagation();

//         let rows = this.state.rows;
//         let existingSandwich = rows.findIndex(r => r.name === "Sandwich");
//         console.log(existingSandwich);
//         if (existingSandwich !== -1) { //si no es undefined es ya hay un sandwich
//             this.setState(prevrows => {
//                 let rows = { ...prevrows.rows }
//                 rows[existingSandwich].mobile = rows[existingSandwich].mobile + 1
//                 console.log(rows)
//                 return rows
//             })

//         } else { //no hay sandwich, hay que agregar uno a la tabla
//             console.log('no hay sandwich', existingSandwich)
//             const item = {
//                 name: "Sandwich",
//                 mobile: 1
//             };
//             this.setState({
//                 rows: [...this.state.rows, item]
//             });
//         }


//     };
//     handleRemoveRow = () => {
//         this.setState({
//             rows: this.state.rows.slice(0, -1)
//         });
//     };
//     handleRemoveSpecificRow = (idx) => () => {
//         const rows = [...this.state.rows]
//         rows.splice(idx, 1)
//         this.setState({ rows })
//     }
//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <div className="row clearfix">
//                         <div className="col-md-12 column">
//                             <table
//                                 className="table table-bordered table-hover"
//                                 id="tab_logic"
//                             >
//                                 <thead>
//                                     <tr>
//                                         <th className="text-center"> # </th>
//                                         <th className="text-center"> Name </th>
//                                         <th className="text-center"> Mobile </th>
//                                         <th />
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {this.state.rows.map((item, idx) => (
//                                         <tr id="addr0" key={idx}>
//                                             <td>{idx}</td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     name="name"
//                                                     value={this.state.rows[idx].name}
//                                                     onChange={this.handleChange(idx)}
//                                                     className="form-control"
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     name="mobile"
//                                                     value={this.state.rows[idx].mobile}
//                                                     onChange={this.handleChange(idx)}
//                                                     className="form-control"
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
//                                                     onClick={this.handleRemoveSpecificRow(idx)}
//                                                 >
//                                                     Remove
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                             <button onClick={this.handleAddCoffeeBlack} className="btn btn-primary">
//                                 Coffee black
//                             </button>
//                             <button onClick={this.handleAddSandwich} className="btn btn-primary">
//                                 Sandwich
//                             </button>
//                             <button
//                                 onClick={this.handleRemoveRow}
//                                 className="btn btn-danger float-right"
//                             >
//                                 Delete Last Row
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// // render(<Tess />, document.getElementById("root"));
// // export default TestTable;