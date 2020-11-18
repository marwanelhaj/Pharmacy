import React from "react";


//Assets
import edit_img from "../../../img/edit.svg";
import delete_img from "../../../img/delete.svg";
import view_img from "../../../img/eye.svg";

const MyJobs = () => {

  const createJob = (event) => {
    event.preventDefault();
  }
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
                <div className="text-right">
                  <a className="purple-btn" style={{ color: "white" }} onClick={createJob}>Create Job</a>
                </div>

                <div className="table-responsive">
                  <table className="text-center experience-table">
                    <thead>
                      <tr>
                        <th>Job Title</th>
                        <th>Type</th>
                        <th>Deadline</th>
                        <th>Max Budget</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr>
                        <td>Job Title</td>
                        <td>Type</td>
                        <td>Deadline</td>
                        <td>Max Budget</td>
                        <td>Status</td>
                        <td>
                        <a
                            title="Delete"
                            id="delete"
                            data-id="id"
                            href="/"
                            // onClick={(event) =>
                            //   deleteInstitutionData(event, work.id, index)
                            // }
                          >
                            <img src={view_img} alt="" width="40px"></img>
                          </a>

                          <a
                            title="Edit"
                            id="edit"
                            data-id="id"
                            href="/"
                            // onClick={(event) =>
                            //   editInstitutionData(event, work.id, index)
                            // }
                          >
                            <img src={edit_img} alt="" className="mb-2"></img>
                          </a>
                          <a
                            title="Delete"
                            id="delete"
                            data-id="id"
                            href="/"
                            // onClick={(event) =>
                            //   deleteInstitutionData(event, work.id, index)
                            // }
                          >
                            <img src={delete_img} alt="" className="mb-2"></img>
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

export default MyJobs;
