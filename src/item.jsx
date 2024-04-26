//import Menu from './api';


// item component takes item object as prop and plug in properties such as item.title
export const Item = ({ item }) => {
    return (
      <div className="col-sm-6 col-md-5 col-lg-4 mx-auto pt-5">
        <div className="box">
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
  



