import React from 'react';

const OrderDisplay = (props) => {

     const renderTable = ({orderData}) => {
          if(orderData){
               return orderData.map((item) => {
                    return(
                         <tr key={item.id}>
                              <td>
                                   {item.id}
                              </td>
                              <td>
                                   {item.hotel_name}
                              </td>
                              <td>
                                   {item.name}
                              </td>
                              <td>
                                   {item.phone}
                              </td>
                              <td>
                                   {item.email}
                              </td>
                              <td>
                                   ₹ {item.cost}
                              </td>
                              <td>
                                   {item.date}
                              </td>
                              <td>
                                   {item.status}
                              </td>
                              <td>
                                   {item.bank_name}
                              </td>
                         </tr>
                    )
               })
          }
     }

     return(
          <div className='container'>
               <h2>
                    Orders
               </h2>
               <table className='table'>
                    <thead>
                         <tr>
                              <th>
                                   Order Number
                              </th>  
                              <th>
                                   Restaurant Name
                              </th>  
                              <th>
                                   Name
                              </th>  
                              <th>
                                   Contact Number
                              </th>  
                              <th>
                                   Email Address
                              </th>  
                              <th>
                                   Cost
                              </th>  
                              <th>
                                   Date
                              </th>  
                              <th>
                                   Transaction Status
                              </th>   
                              <th>
                                   Bank Name
                              </th>  
                         </tr>
                    </thead>
                    <tbody>
                         {renderTable(props)}
                    </tbody>
               </table>
          </div>
     )
}

export default OrderDisplay;