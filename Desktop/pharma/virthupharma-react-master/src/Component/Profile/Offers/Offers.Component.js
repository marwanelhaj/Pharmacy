import React from "react";


//Assets
import edit_img from "../../../img/edit.svg";
import delete_img from "../../../img/delete.svg";
import view_img from "../../../img/eye.svg";
import paypal_img from "../../../img/paypal.png";

const Offers = () => {
  return (
    <>
      <div className="tabs-content">
        <div className="tab-content h-100">
          <div style={{ height: "inherit" }}>
            <div className="tab-content h-100">
              <div
                className="tab-pane fade active show"
                id="v-pills-jobs"
                role="tabpanel"
                aria-labelledby="v-pills-jobs-tab"
              >


                <div className="table-responsive">
                  <table className="text-center experience-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Expert</th>
                        <th>Date</th>
                        <th>Deadline</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td>Title</td>
                        <td>Expert</td>
                        <td>Date</td>
                        <td>Deadline</td>
                        <td>Price</td>
                        <td>
                       

                          <a
                            title="Edit"
                            id="edit"
                            data-id="id"
                            href="/"
                          
                          >
                            <img src={edit_img} alt="" className="mb-2"></img>
                          </a>
                          <a                          
                            title="Delete"
                            id="delete"
                            data-id="id"
                            href="/"
                           
                          >
                            <img src={delete_img} alt="" className="mb-2"></img>
                          </a>
                          <a
                            title="Delete"
                            id="delete"
                            data-id="id"
                            href="/"
                          
                          >
                            <img src={paypal_img} alt="" width="40px"></img>
                          </a>

                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
