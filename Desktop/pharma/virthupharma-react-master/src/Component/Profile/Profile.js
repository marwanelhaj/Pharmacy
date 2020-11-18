import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

//Components
import StudentProfile from "./student/Student.Profile.Component";
import MyJobs from "./MyJobs/MyJobs.Components";
import Offers from "./Offers/Offers.Component";
import Messages from "./Messages/Messages.Component";
import Payments from "./Payments/PAyments.Component";
import AllJobs from "./AllJobs/AllJobs.Component";
import ExportProfile from "./Expert/Export.profile";

import { VirtualPharmaContext } from "../../Context/VirtualPharme.Context";

//Images
import user from "../../img/user.png";
import pencil from "../../img/pencil.svg";

//Spinner
import Eclips from "../../img/loading_spinner.gif";
import GifLoader from "react-gif-loader";

const Profile = (props) => {
  const [activeLeftMenu, setActiveLeftMenu] = useState(0);
  const [userDetails, setUserDetails] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [profilePicPath, setProfilePicPath] = useState(null);
  const [loading, setLoading] = useState(false);
  // =================================   Api Base URL    ==========================================
  let usersUrl = process.env.REACT_APP_URL + "/users";
  let apiKey = process.env.REACT_APP_API_KEY;

  //====================================   Context API  ====================================================
  const { userEmail, userInfo, userRole } = useContext(VirtualPharmaContext);

  //============== ========================   Use Effect ===============================================
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    // Get user details
    axios
      .get(
        `${usersUrl}/get_detailed_user?email=${userEmail}&&password=${123}`,
        {
          headers: {
            api_key: apiKey,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setUserDetails(response.data);
        if (response.data.role === "learner") {
          if (response.data.user_profile) {
            if (response.data.user_profile.profile_pic) {
              setImagePreviewUrl(response.data.user_profile.profile_pic);
            }
          }
        } else if (response.data.role === "expert") {
          if (response.data.personal_information) {
            if (response.data.personal_information.profile_pic) {
              setImagePreviewUrl(
                response.data.personal_information.profile_pic
              );
            }
          }
        }

        setLoading(false);
      })
      .catch((error) => {
        console.log("Exception : ", error);
        setUserDetails(null);
        setLoading(false);
      });

    // get profilepic
    // axios
    // .post( usersUrl + "/get_profile_pic", {filepath:"public/1598427452079-almond.PNG"},  {
    //   headers: {
    //     api_key: "6a1kUOUdReIQjZNsXAsE",
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then((res) => {
    //   console.log(res)
    // }).catch(error => console.log(error));
  }, []);

  // ===================================================================================================

  //handle active left menu change
  const handleActiveLeftMenuChange = (event, active) => {
    event.preventDefault();
    setActiveLeftMenu(active);
  };

  //handle image upload
  const handleImageUplaod = (event) => {
    console.log("User Detail : ", userDetails);
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);

    //uplaod image
    const data = new FormData();
    data.append("file", event.target.files[0]);
    axios
      .post(usersUrl + "/upload_profile_pic", data, {
        headers: {
          api_key: apiKey,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // then print response status
        let imgPath = res.data.path;
        imgPath = imgPath.replace(/\\/g, "/");
        setProfilePicPath(process.env.REACT_APP_URL + "/" + imgPath);
      })
      .catch((error) => {
        console.log(error);
        setProfilePicPath(false);
      });

    //Image upload 2nd methos
    // let image = event.target.files[0];
    //  const formData = new FormData();
    //  formData.append('profileImage',image);

    //  console.log("User Details : " , userDetails , formData , image);
    //  let user_profile = userDetails.user_profile || {
    //   id: null,
    //   full_name: "",
    //   city: "",
    //   country: "",
    //   email: "",
    //   profile_pic:""
    // } ;
    //  user_profile.profile_pic = formData
    //  setUserDetails({
    //    ...userDetails,
    //    user_profile
    //  })
  };

  let fullName = userInfo ? userInfo.first_name + " " + userInfo.last_name : "";
  // ====================== Loader ==================================
  let spiner = "";
  if (loading === true) {
    spiner = (
      <div className="spiner">
        <GifLoader
          loading={true}
          imageSrc={Eclips}
          imageStyle={{ marginTop: "20%", width: "100px", height: "100px" }}
          overlayBackground="rgba(0,0,0,0.5)"
        />
      </div>
    );
  }

  return (
    <>
      {spiner}
      <section class="blue-bg">
        <div class="d-flex edit-profile flex-column flex-md-row justify-content-between student">
          <div class="">
            {/* Profile Image and Name */}
            <div class="profile-img d-md-block d-none">
              <img
                id="prof-im"
                src={imagePreviewUrl ? imagePreviewUrl : user}
                alt=""
                class="prof-img"
              />

              <div class="upload-img image-upload">
                <label for="file">
                  <img src={pencil} alt="" id="profile-image" class="edit" />
                </label>
                <form>
                  <input
                    type="hidden"
                    name="_token"
                    value="3Izzrv4spaVAsBHdsgG0xQrPChg1zTgDwsxJD8Ea"
                  />{" "}
                  <input type="hidden" name="_method" value="PATCH" />
                  <input
                    style={{ display: "none" }}
                    name="image"
                    id="file"
                    type="file"
                    onChange={handleImageUplaod}
                  />
                </form>
              </div>

              <div class="profile-name">{fullName}</div>
              <div class="profile-address">{/* Pakistan */}</div>
            </div>
            {/* Left Menu */}
            <div class="nav flex-column nav-pills" id="v-pills-tab">
              <a
                class={activeLeftMenu === 0 ? "nav-link active" : "nav-link"}
                href="/"
                onClick={(event) => handleActiveLeftMenuChange(event, 0)}
              >
                <span>My Profile</span>
              </a>
              <a
                class={activeLeftMenu === 1 ? "nav-link active" : "nav-link"}
                href="/"
                onClick={(event) => handleActiveLeftMenuChange(event, 1)}
              >
                <span>My Jobs</span>
              </a>
              <a
                class={activeLeftMenu === 2 ? "nav-link active" : "nav-link"}
                href="/"
                onClick={(event) => handleActiveLeftMenuChange(event, 2)}
              >
                <span>Offers</span>
              </a>
              <a
                class={activeLeftMenu === 3 ? "nav-link active" : "nav-link"}
                href="/"
                onClick={(event) => handleActiveLeftMenuChange(event, 3)}
              >
                <span>Messages</span>
              </a>
              <a
                class={activeLeftMenu === 4 ? "nav-link active" : "nav-link"}
                href="/"
                onClick={(event) => handleActiveLeftMenuChange(event, 4)}
              >
                <span>Payments</span>
              </a>
              <a
                class={activeLeftMenu === 5 ? "nav-link active" : "nav-link"}
                href="/"
                onClick={(event) => handleActiveLeftMenuChange(event, 5)}
              >
                <span>All Jobs</span>
              </a>
            </div>
          </div>

          {/* Content */}
          {activeLeftMenu === 0 ? (
            userRole === "learner" ? (
              <StudentProfile
                userDetails={userDetails}
                setUserDetails={setUserDetails}
                profilePicPath={profilePicPath}
              />
            ) : (
                <ExportProfile
                  userDetails={userDetails}
                  setUserDetails={setUserDetails}
                  profilePicPath={profilePicPath}
                />
              )
          ) : null}
          {activeLeftMenu === 1 ? <MyJobs /> : null}
          {activeLeftMenu === 2 ? <Offers /> : null}
          {activeLeftMenu === 3 ? <Messages /> : null}
          {activeLeftMenu === 4 ? <Payments /> : null}
          {activeLeftMenu === 5 ? <AllJobs /> : null}
        </div>
      </section>
    </>
  );
};

export default Profile;
