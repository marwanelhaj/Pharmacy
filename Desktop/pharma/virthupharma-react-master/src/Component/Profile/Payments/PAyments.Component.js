import React from "react";


//Assets
import edit_img from "../../../img/edit.svg";
import delete_img from "../../../img/delete.svg";
import view_img from "../../../img/eye.svg";

const Payments = () => {
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
                {/* <div className="text-right">
                  <a className="purple-btn" style={{color:"white"}}>Create Job</a>
                </div> */}

                <div className="table-responsive">
                  <table className="text-center experience-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Expert</th>
                        <th>Offer Date</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td>Title</td>
                        <td>Expert</td>
                        <td>Offer Date</td>
                        <td>Price</td>
                        
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

export default Payments;
