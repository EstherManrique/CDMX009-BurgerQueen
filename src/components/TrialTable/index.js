// import React, { useState } from 'react';

// const TrialTable = () => {

//     const [trial, settrial] = useState();

//     state = {
//         rows: []
//     };
//     const handleChange = idx => e => {
//         const { name, value } = e.target;
//         const rows = [...state.rows];
//         rows[idx] = {
//             [name]: value
//         };
//         this.setState({
//             rows
//         });
//     };

//     const handleAddCoffeeBlack = () => {
//         const item = {
//             name: "Coffee black",
//             mobile: "10"
//         };
//         this.setState({
//             rows: [...this.state.rows, item]
//         });
//     };

//     const handleAddSandwich = (e) => {
//         e.stopPropagation();
//         e.nativeEvent.stopImmediatePropagation();

//         let rows = state.rows;
//         let existingSandwich = rows.findIndex(r => r.name === "Sandwich");
//         // console.log(existingSandwich);
//         if (existingSandwich !== -1) { //si no es undefined es ya hay un sandwich
//             setState(prevrows => {
//                 let rows = { ...prevrows.rows }
//                 rows[existingSandwich].mobile = rows[existingSandwich].mobile + 1
//                 // console.log(rows)
//                 return rows
//             })

//         } else { //no hay sandwich, hay que agregar uno a la tabla
//             // console.log('no hay sandwich', existingSandwich)
//             const item = {
//                 name: "Sandwich",
//                 mobile: 1
//             };
//             this.setState({
//                 rows: [...this.state.rows, item]
//             });
//         }
//     }
//     const handleRemoveRow = () => {
//         this.setState({
//             rows: this.state.rows.slice(0, -1)
//         });
//     };
//     const handleRemoveSpecificRow = (idx) => () => {
//         const rows = [...this.state.rows]


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
//                                     {state.rows.map((item, idx) => (
//                                         <tr id="addr0" key={idx}>
//                                             <td>{idx}</td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     name="name"
//                                                     value={state.rows[idx].name}
//                                                     onChange={handleChange(idx)}
//                                                     className="form-control"
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     name="mobile"
//                                                     value={this.state.rows[idx].mobile}
//                                                     onChange={handleChange(idx)}
//                                                     className="form-control"
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <button
//                                                     className="btn btn-outline-danger btn-sm"
//                                                     onClick={handleRemoveSpecificRow(idx)}
//                                                 >
//                                                     Remove
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                             <button onClick={handleAddCoffeeBlack} className="btn btn-primary">
//                                 Coffee black
//                             </button>
//                             <button onClick={handleAddSandwich} className="btn btn-primary">
//                                 Sandwich
//                             </button>
//                             <button
//                                 onClick={handleRemoveRow}
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
// // export default TrialTable;