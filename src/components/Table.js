import React from 'react';
import './table.css'

const Table = ({formData}) => {
return(
  <div className="table">
  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>PhoneNumber </th>
    </tr>
    <tr>
      <td>{formData.Name}</td>
      <td>{formData.Email}</td>
      <td>{formData.PhoneNumber}</td>
    </tr>
  </table>
</div>
)
}
export default Table;