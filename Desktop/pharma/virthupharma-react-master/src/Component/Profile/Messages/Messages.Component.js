import React from "react";

//Immages
import user_img from "../../../img/user.png";
import attach_img from  "../../../img/attach.svg";
import send_img from  "../../../img/send-message.svg";

const Messages = () => {
  return (
    <>
      <div className="tabs-content">
        <div className="tab-content h-100">
          <div style={{ height: "inherit" }}>
            <div className="tab-content h-100" id="nav-tabContent">
              <div className="messenger d-flex h-100">
                <div className="messages-content">
                  <div className="title">Messages</div>
                  <div className="message-search position-relative">
                    <input type="search" placeholder="Search" id="search" />
                    <img src="Assets/student/search-message.svg" alt="" />
                  </div>
                  <form>
                    <div
                      className="scrollbar"
                      id="participantsList"
                      style={{ maxHeight: "468px!important" }}
                    >
                      <div className="message-div d-flex align-items-center participantId">
                        <div className="author-img">
                          <img
                            src="Assets/student/user.png"
                            alt=""
                            height="47px"
                            width="47px"
                          />
                        </div>
                        <div className="w-100">
                          <div className="author">participant name</div>
                          <div className="d-flex justify-content-between"></div>
                          <input
                            type="hidden"
                            value="{{$participant->id??''}}"
                            name="participantId"
                            className="getId"
                          />
                          <input
                            type="hidden"
                            value="{{$threadId[$key]??''}}"
                            name="threadId"
                            className="threadId"
                          />
                        </div>
                      </div>

                      <div
                        className="message-div d-flex align-items-center participantId active"
                        id="newParticipant"
                      >
                        <div className="author-img">
                          <img
                            src={user_img}
                            alt=""
                            height="47px"
                            width="47px"
                          />
                        </div>
                        <div className="w-100">
                          <div className="author">new_user name</div>
                          <div className="d-flex justify-content-between"></div>
                          <input
                            type="hidden"
                            value="{{$new_user->id}}"
                            name="participantId"
                            className="getId"
                          />
                          <input
                            type="hidden"
                            value="{{$new_thread_id}}"
                            name="{{$new_thread_id}}"
                            className="threadId"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="message w-100 d-flex flex-column" id="getMessages">
                  <div className="author d-flex align-items-center justify-content-between">
                    <a href="/experts/{{$user['id']}}" target="_blank">
                      <div className=" d-flex align-items-center">
                        <div className="author-img">
                          <img
                            src={user_img}
                            alt=""
                            height="47px"
                            width="47px"
                          />
                        </div>
                        <span>user name</span>
                        <input
                          type="hidden"
                          value="{{$user['id']}}"
                          id="to_id"
                        />
                        <input
                          type="hidden"
                          value="{{$thread['id']}}"
                          id="thread_id"
                        />
                      </div>
                    </a>
                    <div>
                      <a
                        href="#"
                        className="purple-btn"
                        type="btn"
                        data-toggle="modal"
                        data-target="#makeofferModal"
                        id="makeofferButton"
                      >
                        Make offer
                      </a>
                    </div>

                    <div className=" d-flex align-items-center">
                      <div className="author-img">
                        <img
                          src={user_img}
                          alt=""
                          height="47px"
                          width="47px"
                        />
                      </div>
                      <span>new_user name</span>
                      <input
                        type="hidden"
                        value="{{$new_user['id']}}"
                        id="to_id"
                      />
                      <input
                        type="hidden"
                        value="{{$new_thread_id}}"
                        id="thread_id"
                      />
                    </div>
                    <div>
                      <a href="#" className="purple-btn">
                        Make offer
                      </a>
                    </div>
                  </div>
                  <div className="messages-box scrollbar">
                    <div className="overflow">
                      <div className="message-box own d-flex justify-content-end flex-column align-items-start">
                        <div
                          className="send-message"
                          style={{ wordBreak: "break-all", fontSize: "15px" }}
                        >
                          message body
                        </div>
                        <div className="short-message">
                          message created_at diffForHumans
                        </div>
                      </div>
                      <div className="message-box d-flex align-items-start leftMessage">
                        <div className="author-img">
                          <a href="/experts/{{$user['id']}}" target="_blank">
                            <img
                              src={user_img}
                              alt=""
                              height="47px"
                              width="47px"
                            />
                          </a>
                        </div>
                        <div className="d-flex align-items-start flex-column">
                          <div
                            className="send-message"
                            style={{ wordBreak: "break-all", fontSize: "15px" }}
                          >
                            message body
                          </div>
                          <div className="short-message-left">
                            message created_at diffForHumans
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form
                    method="post"
                    id="fileForm"
                    enctype="multipart/form-data"
                  >
                    <div
                      className="position-relative mt-auto"
                      id="imagePreviewDiv"
                      style={{ display: "none" }}
                    >
                      <input
                        type="file"
                        style={{ display: "none" }}
                        id="hiddenInputFile"
                        name="file"
                      />
                      <div id="hoverDiv" style={{ width: "min-content" }}>
                        <img src="#" id="imagePreview" />
                        <span id="imageDelete">X</span>
                      </div>
                      <div id="fileHoverDiv" style={{ display: "none" }}>
                        <div id="fileNamePreview"></div>
                        <span id="deleteFile">X</span>
                      </div>
                    </div>
                    <div className="send-text position-relative mt-auto mb-3">
                      <textarea name="message" id="message"></textarea>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        type="button"
                      >
                        <img src={attach_img} id="attachFile" />
                      </button>
                      <button type="button" id="sendButton">
                        <img src={send_img} alt="" />
                      </button>
                    </div>
                  </form>
                  <h1
                    style={{
                      margin: "0 auto",
                      color: "#554091",
                      top: "45%",
                      position: "relative",
                    }}
                  >
                    Stay Connected
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
