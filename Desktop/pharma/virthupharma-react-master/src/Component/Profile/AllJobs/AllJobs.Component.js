import React from "react";

//Assets
import edit_img from "../../../img/edit.svg";
import delete_img from "../../../img/delete.svg";
import view_img from "../../../img/eye.svg";

const AllJobs = () => {
  return (
    <>
      {/* <main className="pt-0 border-bottom-0">
        <section className="blue-bg-light"> */}
      <div className="job-page d-flex">
        <div className="filter">
          <div className="close-filter d-sm-none">
            <img src="Assets/student/cancel.svg" alt="" />
          </div>
          <div className="filter-content">
            <form id="search-from">
              <div className="search position-relative">
                <input
                  type="search"
                  placeholder="Search"
                  id="search"
                  name="search"
                />
                <img src="Assets/student/search-message.svg" alt="" />
              </div>

              <div className="checkbox">
                <input
                  type="checkbox"
                  name="experiences[]"
                  id="experience-1"
                  className="jobFilter"
                  value="1"
                />
                <label for="experience-1" className="position-relative">
                  All Industries Regulatory Consultancy
                    </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="experiences[]"
                  id="experience-3"
                  className="jobFilter"
                  value="3"
                />
                <label for="experience-3" className="position-relative">
                  Hire or Lease your Lab Expertise
                    </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="experiences[]"
                  id="experience-4"
                  className="jobFilter"
                  value="4"
                />
                <label for="experience-4" className="position-relative">
                  Critical Trials
                    </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="experiences[]"
                  id="experience-5"
                  className="jobFilter"
                  value="5"
                />
                <label for="experience-5" className="position-relative">
                  Highly Specialized Science
                    </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="experiences[]"
                  id="experience-6"
                  className="jobFilter"
                  value="6"
                />
                <label for="experience-6" className="position-relative">
                  Lectures and Lessons
                    </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="experiences[]"
                  id="experience-7"
                  className="jobFilter"
                  value="7"
                />
                <label for="experience-7" className="position-relative">
                  Data Treatment
                    </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="experiences[]"
                  id="experience-8"
                  className="jobFilter"
                  value="8"
                />
                <label for="experience-8" className="position-relative">
                  Industry Experience
                    </label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="experiences[]"
                  id="experience-9"
                  className="jobFilter"
                  value="9"
                />
                <label for="experience-9" className="position-relative">
                  Instrumental Training
                    </label>
              </div>
              <input type="hidden" value="" name="page" id="page" />
            </form>
            <div className="text-center d-sm-none d-block mt-3">
              <a href="#" className="purple-btn ">
                Search
                  </a>
            </div>
          </div>
        </div>
        <div className="jobs">
          <h1 className="title-h1 text-center">Find The Job That Suits You </h1>
          <div className="d-flex d-sm-none text-right ml-auto mobile-filter-btn justify-content-end mb-2 mr-2">
            <span className="mr-2">Filter</span>
            {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" fill="#352072"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" w="" width="20" height="25"
                            viewBox="0 0 459 459" style="enable-background:new 0 0 459 459;" xml:space="preserve">
                            <g>
                                <g id="filter">
                                    <path
                                        d="M178.5,382.5h102v-51h-102V382.5z M0,76.5v51h459v-51H0z M76.5,255h306v-51h-306V255z">
                                    </path>
                                </g>
                            </g>
                        </svg> */}
          </div>

          <div
            className="modal fade job-modal"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            data-backdrop="static"
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              style={{ maxWidth: "max-content" }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onclick="history.pushState('', '', '/jobs')"
                  >
                    <img src="Assets/student/cancel.svg" alt="" />
                  </button>
                </div>
                <div className="modal-body d-flex justify-content-between flex-sm-row flex-column">
                  <div className="job-details">
                    <div className="modal-title">Job details</div>
                    <table>
                      <tbody>
                        <tr className="tr-title">
                          <td>Job Title</td>
                          <td id="title"></td>
                        </tr>
                        <tr className="tr-type">
                          <td>Job Type</td>
                          <td id="type"></td>
                        </tr>
                        <tr className="tr-deadline">
                          <td>Dedline</td>
                          <td id="deadlinePreview"></td>
                        </tr>
                        <tr className="tr-budget">
                          <td>Maximum Budget</td>
                          <td id="budget"></td>
                        </tr>
                        <tr>
                          <td>Speciality Level</td>
                          <td id="specialityLevel"></td>
                        </tr>
                        <tr>
                          <td>English Level</td>
                          <td id="englishLevel"></td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="job-description" id="jobDescription"></div>

                    <div
                      className="d-flex align-items-center flex-wrap"
                      id="experiences"
                    >
                      <span className="span-skill">Skill</span>
                    </div>
                  </div>
                  <div className="terms" style={{ display: "none" }}>
                    <div className="modal-title">Terms</div>
                    <div className="text-bold">
                      What is the rate you’d like to bid for this job?
                        </div>
                    <form
                      action="https://virtupharma.com.au/job-apply"
                      enctype="multipart/form-data"
                      method="POST"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="3AQv4Yq3xCkuS1X8jW90N4yzVxvNGTLaeL7ormPV"
                      />{" "}
                      <input type="hidden" id="jobId" name="job_id" />
                      <div className="hourly">
                        <span className="d-block">Hourly Rate</span>
                        <span className="total">
                          Total amount the client will see on your proposal
                            </span>
                        <div className="hourly-input">
                          <div className="d-flex align-items-center position-relative">
                            <input
                              type="number"
                              name="budget"
                              required=""
                              min="0"
                              max="9999999999"
                            />
                            <span> / hr</span>
                            <span className="dollar">$</span>
                          </div>
                        </div>
                      </div>
                      <label className="label">Cover Letter</label>
                      <textarea name="letter" required=""></textarea>
                      <label className="label">Attachments</label>
                      <div className="file">
                        <label for="file" className="sr-only">
                          drag or <span className="purple-text">upload</span>{" "}
                              project files
                            </label>
                        <div className="input-file">
                          <span className="btn">
                            drag or upload project files
                              </span>
                          <span className="file-selected"></span>
                          <input type="file" id="file" name="file" />
                        </div>
                      </div>
                      <div className="text-right">
                        <button type="submit" className="purple-btn">
                          Submit a Proposal
                            </button>
                        <a
                          href="#"
                          className="purple-text ml-3"
                          data-dismiss="modal"
                          onclick="history.pushState('', '', '/jobs')"
                        >
                          Cancel
                            </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="findJobs"></div>
        </div>
      </div>
      {/* </section>
      </main> */}
    </>
  );
};

export default AllJobs;
