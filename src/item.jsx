import Menu from './api';

export const Item = ({ item }) => {
    return (
      <div className="col-sm-6 col-md-5 col-lg-4 mx-auto pt-5">
        <div className="box">
          {/* <img className="rounded img-fluid" alt="" /> */}
          <h3 className="name">{item.title}</h3>
          <p className="description">{item.description}</p>
          <div className="d-flex justify-content-around align-items-center">
            <span className="badge rounded-pill bg-danger price">
              {item.price}
            </span>
          </div>
        </div>
      </div>
    );
  };
  


// export const Item = ({ item }) => {
//     return (
//         <div>
//             {menuItems.map(item => (
//         <div className="col-sm-6 col-md-5 col-lg-4 item">
//             <div className="box">
//                 <img className='rounded img-fluid'></img>
//                 <h3 className="name">{item.title}</h3>
//                 <p className='description'>{item.description}</p>
//                 <div className='d-flex justify-content-around align-items-center'>
//                     <span className='badge rounded-pill bg-danger price'>{item.price}</span>
//                 </div>
//             </div>
//         </div>
//     ))}
//     </div>
//     );
// };

