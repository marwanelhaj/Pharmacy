import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import moment from "moment";

//Spinner
import Eclips from "../../../img/loading_spinner.gif";
import GifLoader from "react-gif-loader";

//Components
import ValidationMessage from "../../ValdatonMessage/ValidationMessage.Component";

//Context
import { VirtualPharmaContext } from "../../../Context/VirtualPharme.Context";



//Countries List
const countriesList = [
  { value: "Please Select", code: "null" },
  { value: "Afghanistan", code: "AF" },
  { value: "Åland Islands", code: "AX" },
  { value: "Albania", code: "AL" },
  { value: "Algeria", code: "DZ" },
  { value: "American Samoa", code: "AS" },
  { value: "AndorrA", code: "AD" },
  { value: "Angola", code: "AO" },
  { value: "Anguilla", code: "AI" },
  { value: "Antarctica", code: "AQ" },
  { value: "Antigua and Barbuda", code: "AG" },
  { value: "Argentina", code: "AR" },
  { value: "Armenia", code: "AM" },
  { value: "Aruba", code: "AW" },
  { value: "Australia", code: "AU" },
  { value: "Austria", code: "AT" },
  { value: "Azerbaijan", code: "AZ" },
  { value: "Bahamas", code: "BS" },
  { value: "Bahrain", code: "BH" },
  { value: "Bangladesh", code: "BD" },
  { value: "Barbados", code: "BB" },
  { value: "Belarus", code: "BY" },
  { value: "Belgium", code: "BE" },
  { value: "Belize", code: "BZ" },
  { value: "Benin", code: "BJ" },
  { value: "Bermuda", code: "BM" },
  { value: "Bhutan", code: "BT" },
  { value: "Bolivia", code: "BO" },
  { value: "Bosnia and Herzegovina", code: "BA" },
  { value: "Botswana", code: "BW" },
  { value: "Bouvet Island", code: "BV" },
  { value: "Brazil", code: "BR" },
  { value: "British Indian Ocean Territory", code: "IO" },
  { value: "Brunei Darussalam", code: "BN" },
  { value: "Bulgaria", code: "BG" },
  { value: "Burkina Faso", code: "BF" },
  { value: "Burundi", code: "BI" },
  { value: "Cambodia", code: "KH" },
  { value: "Cameroon", code: "CM" },
  { value: "Canada", code: "CA" },
  { value: "Cape Verde", code: "CV" },
  { value: "Cayman Islands", code: "KY" },
  { value: "Central African Republic", code: "CF" },
  { value: "Chad", code: "TD" },
  { value: "Chile", code: "CL" },
  { value: "China", code: "CN" },
  { value: "Christmas Island", code: "CX" },
  { value: "Cocos (Keeling) Islands", code: "CC" },
  { value: "Colombia", code: "CO" },
  { value: "Comoros", code: "KM" },
  { value: "Congo", code: "CG" },
  { value: "Congo, The Democratic Republic of the", code: "CD" },
  { value: "Cook Islands", code: "CK" },
  { value: "Costa Rica", code: "CR" },
  { value: "Cote DIvoire", code: "CI" },
  { value: "Croatia", code: "HR" },
  { value: "Cuba", code: "CU" },
  { value: "Cyprus", code: "CY" },
  { value: "Czech Republic", code: "CZ" },
  { value: "Denmark", code: "DK" },
  { value: "Djibouti", code: "DJ" },
  { value: "Dominica", code: "DM" },
  { value: "Dominican Republic", code: "DO" },
  { value: "Ecuador", code: "EC" },
  { value: "Egypt", code: "EG" },
  { value: "El Salvador", code: "SV" },
  { value: "Equatorial Guinea", code: "GQ" },
  { value: "Eritrea", code: "ER" },
  { value: "Estonia", code: "EE" },
  { value: "Ethiopia", code: "ET" },
  { value: "Falkland Islands (Malvinas)", code: "FK" },
  { value: "Faroe Islands", code: "FO" },
  { value: "Fiji", code: "FJ" },
  { value: "Finland", code: "FI" },
  { value: "France", code: "FR" },
  { value: "French Guiana", code: "GF" },
  { value: "French Polynesia", code: "PF" },
  { value: "French Southern Territories", code: "TF" },
  { value: "Gabon", code: "GA" },
  { value: "Gambia", code: "GM" },
  { value: "Georgia", code: "GE" },
  { value: "Germany", code: "DE" },
  { value: "Ghana", code: "GH" },
  { value: "Gibraltar", code: "GI" },
  { value: "Greece", code: "GR" },
  { value: "Greenland", code: "GL" },
  { value: "Grenada", code: "GD" },
  { value: "Guadeloupe", code: "GP" },
  { value: "Guam", code: "GU" },
  { value: "Guatemala", code: "GT" },
  { value: "Guernsey", code: "GG" },
  { value: "Guinea", code: "GN" },
  { value: "Guinea-Bissau", code: "GW" },
  { value: "Guyana", code: "GY" },
  { value: "Haiti", code: "HT" },
  { value: "Heard Island and Mcdonald Islands", code: "HM" },
  { value: "Holy See (Vatican City State)", code: "VA" },
  { value: "Honduras", code: "HN" },
  { value: "Hong Kong", code: "HK" },
  { value: "Hungary", code: "HU" },
  { value: "Iceland", code: "IS" },
  { value: "India", code: "IN" },
  { value: "Indonesia", code: "ID" },
  { value: "Iran, Islamic Republic Of", code: "IR" },
  { value: "Iraq", code: "IQ" },
  { value: "Ireland", code: "IE" },
  { value: "Isle of Man", code: "IM" },
  { value: "Israel", code: "IL" },
  { value: "Italy", code: "IT" },
  { value: "Jamaica", code: "JM" },
  { value: "Japan", code: "JP" },
  { value: "Jersey", code: "JE" },
  { value: "Jordan", code: "JO" },
  { value: "Kazakhstan", code: "KZ" },
  { value: "Kenya", code: "KE" },
  { value: "Kiribati", code: "KI" },
  { value: "Korea, Democratic People", code: "KP" },
  { value: "Korea, Republic of", code: "KR" },
  { value: "Kuwait", code: "KW" },
  { value: "Kyrgyzstan", code: "KG" },
  { value: "Lao People Democratic Republic", code: "LA" },
  { value: "Latvia", code: "LV" },
  { value: "Lebanon", code: "LB" },
  { value: "Lesotho", code: "LS" },
  { value: "Liberia", code: "LR" },
  { value: "Libyan Arab Jamahiriya", code: "LY" },
  { value: "Liechtenstein", code: "LI" },
  { value: "Lithuania", code: "LT" },
  { value: "Luxembourg", code: "LU" },
  { value: "Macao", code: "MO" },
  { value: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
  { value: "Madagascar", code: "MG" },
  { value: "Malawi", code: "MW" },
  { value: "Malaysia", code: "MY" },
  { value: "Maldives", code: "MV" },
  { value: "Mali", code: "ML" },
  { value: "Malta", code: "MT" },
  { value: "Marshall Islands", code: "MH" },
  { value: "Martinique", code: "MQ" },
  { value: "Mauritania", code: "MR" },
  { value: "Mauritius", code: "MU" },
  { value: "Mayotte", code: "YT" },
  { value: "Mexico", code: "MX" },
  { value: "Micronesia, Federated States of", code: "FM" },
  { value: "Moldova, Republic of", code: "MD" },
  { value: "Monaco", code: "MC" },
  { value: "Mongolia", code: "MN" },
  { value: "Montserrat", code: "MS" },
  { value: "Morocco", code: "MA" },
  { value: "Mozambique", code: "MZ" },
  { value: "Myanmar", code: "MM" },
  { value: "Namibia", code: "NA" },
  { value: "Nauru", code: "NR" },
  { value: "Nepal", code: "NP" },
  { value: "Netherlands", code: "NL" },
  { value: "Netherlands Antilles", code: "AN" },
  { value: "New Caledonia", code: "NC" },
  { value: "New Zealand", code: "NZ" },
  { value: "Nicaragua", code: "NI" },
  { value: "Niger", code: "NE" },
  { value: "Nigeria", code: "NG" },
  { value: "Niue", code: "NU" },
  { value: "Norfolk Island", code: "NF" },
  { value: "Northern Mariana Islands", code: "MP" },
  { value: "Norway", code: "NO" },
  { value: "Oman", code: "OM" },
  { value: "Pakistan", code: "PK" },
  { value: "Palau", code: "PW" },
  { value: "Palestinian Territory, Occupied", code: "PS" },
  { value: "Panama", code: "PA" },
  { value: "Papua New Guinea", code: "PG" },
  { value: "Paraguay", code: "PY" },
  { value: "Peru", code: "PE" },
  { value: "Philippines", code: "PH" },
  { value: "Pitcairn", code: "PN" },
  { value: "Poland", code: "PL" },
  { value: "Portugal", code: "PT" },
  { value: "Puerto Rico", code: "PR" },
  { value: "Qatar", code: "QA" },
  { value: "Reunion", code: "RE" },
  { value: "Romania", code: "RO" },
  { value: "Russian Federation", code: "RU" },
  { value: "RWANDA", code: "RW" },
  { value: "Saint Helena", code: "SH" },
  { value: "Saint Kitts and Nevis", code: "KN" },
  { value: "Saint Lucia", code: "LC" },
  { value: "Saint Pierre and Miquelon", code: "PM" },
  { value: "Saint Vincent and the Grenadines", code: "VC" },
  { value: "Samoa", code: "WS" },
  { value: "San Marino", code: "SM" },
  { value: "Sao Tome and Principe", code: "ST" },
  { value: "Saudi Arabia", code: "SA" },
  { value: "Senegal", code: "SN" },
  { value: "Serbia and Montenegro", code: "CS" },
  { value: "Seychelles", code: "SC" },
  { value: "Sierra Leone", code: "SL" },
  { value: "Singapore", code: "SG" },
  { value: "Slovakia", code: "SK" },
  { value: "Slovenia", code: "SI" },
  { value: "Solomon Islands", code: "SB" },
  { value: "Somalia", code: "SO" },
  { value: "South Africa", code: "ZA" },
  { value: "South Georgia and the South Sandwich Islands", code: "GS" },
  { value: "Spain", code: "ES" },
  { value: "Sri Lanka", code: "LK" },
  { value: "Sudan", code: "SD" },
  { value: "Suriname", code: "SR" },
  { value: "Svalbard and Jan Mayen", code: "SJ" },
  { value: "Swaziland", code: "SZ" },
  { value: "Sweden", code: "SE" },
  { value: "Switzerland", code: "CH" },
  { value: "Syrian Arab Republic", code: "SY" },
  { value: "Taiwan, Province of China", code: "TW" },
  { value: "Tajikistan", code: "TJ" },
  { value: "Tanzania, United Republic of", code: "TZ" },
  { value: "Thailand", code: "TH" },
  { value: "Timor-Leste", code: "TL" },
  { value: "Togo", code: "TG" },
  { value: "Tokelau", code: "TK" },
  { value: "Tonga", code: "TO" },
  { value: "Trinidad and Tobago", code: "TT" },
  { value: "Tunisia", code: "TN" },
  { value: "Turkey", code: "TR" },
  { value: "Turkmenistan", code: "TM" },
  { value: "Turks and Caicos Islands", code: "TC" },
  { value: "Tuvalu", code: "TV" },
  { value: "Uganda", code: "UG" },
  { value: "Ukraine", code: "UA" },
  { value: "United Arab Emirates", code: "AE" },
  { value: "United Kingdom", code: "GB" },
  { value: "United States", code: "US" },
  { value: "United States Minor Outlying Islands", code: "UM" },
  { value: "Uruguay", code: "UY" },
  { value: "Uzbekistan", code: "UZ" },
  { value: "Vanuatu", code: "VU" },
  { value: "Venezuela", code: "VE" },
  { value: "Viet Nam", code: "VN" },
  { value: "Virgin Islands, British", code: "VG" },
  { value: "Virgin Islands, U.S.", code: "VI" },
  { value: "Wallis and Futuna", code: "WF" },
  { value: "Western Sahara", code: "EH" },
  { value: "Yemen", code: "YE" },
  { value: "Zambia", code: "ZM" },
  { value: "Zimbabwe", code: "ZW" },
];

//Experiences In List
const experiencesInList = [
  { value: "Please Select", code: null },
  { value: "All Industries Regulatory Consultancy", code: "1" },
  { value: "Hire or Lease your Lab Experties", code: "2" },
  { value: "Crirical Trials", code: "3" },
  { value: "Highly Specialized Lab", code: "4" },
  { value: "Leactures and Lessons", code: "5" },
  { value: "Data Treatment", code: "6" },
  { value: "Industry Experties", code: "7" },
  { value: "Instrumental Training", code: "8" },
]
const ExpertProfile = (props) => {
  //Validations
  const [firstNameValField, setFirstNameValField] = useState(null);
  const [lastNameValField, setLastNameValField] = useState(null);
  const [experiencedInValField, setExperiencedInValField] = useState(null);
  const [pricePerHrValField, setPricePerHrValField] = useState(null);
  const [servicesValField, setServicesValField] = useState(null);
  const [oldPasswordValField, setOldPasswordValField] = useState(null);
  const [newPasswordValField, setNewPasswordValField] = useState(null);
  const [cnfrmPasswordValField, setCnfrmPassswordValField] = useState(null);
  const [degreeTitleValField, setDegreeTitleValField] = useState(null);
  const [institutionNameValField, setInstitutionNameValField] = useState(null);
  const [studyFromDateValField, setStudyFromDateValField] = useState(null);
  const [studyToDateValField, setStudyToDateValField] = useState(null);
  const [positionValField, setPositionValField] = useState(null);
  const [companyValField, setCompanyValField] = useState(null);
  const [workFromValField, setWorkFromValField] = useState(null);
  const [workToValField, setWorkToValField] = useState(null);
  const [technical_skillsValField, setTechnicalSkillsValidations] = useState(null);
  const [expertiesValField, setExpertiesValidations] = useState(null);
  const [scientific_fieldValField, setScientificFieldValidations] = useState(null);
  const [data_treatmentValField, setDataTreatmentValidations] = useState(null);
  const [loading, setLoading] = useState(false);

  //User Detaild Model
  const [userDetails, setUserDetails] = useState(null);

  //Profile Model
  const [profileModel, setProfileModel] = useState({
    id: null,
    first_name: "",
    last_name: "",
    country: "null",
    experiencedIn: "null",
    services: "",
    pricePerHr: "",
  });

  //Password Change Model
  const [passwordModel, setPasswordModel] = useState({
    oldPassword: "",
    newPassword: "",
    cnfrmPassword: "",
  });

  //Institution Model
  const [institutionModel, setInstitutionModel] = useState({
    id: null,
    degreeTitle: "",
    institutionName: "",
    studyFromDate: "",
    studyToDate: "",
    currentlyEnrolled: false,
    instDescription: "",
  });

  //Work Experience Model
  const [workExperienceModel, setWorkExperienceModel] = useState({
    id: null,
    position: "",
    company: "",
    workFrom: "",
    workTo: "",
    currentlyWorking: false,
    description: "",
  });

  //Additional Insof Mode
  const [additionalInfoModel, setAdditionalInfoModel] = useState({
    id: null,
    technical_skills: "",
    expertise: "",
    scientific_field: "",
    data_treatment: "",
    patents: "",
    supervisory_experience: "",
    professional_outreach: "",
    consultancy: "",
    contributed_presentations: "",
    committee_service: "",
    mentoring_activities: "",
    teaching: "",
    publications: "",
    invited_talks: "",

  })

  // ================================   Api Base URL  ===================================================
  let usersUrl = process.env.REACT_APP_URL + "/users";
  let apiKey = process.env.REACT_APP_API_KEY;

  //  ================================    Context API   ================================================
  const { userRole, userID, userEmail, userInfo } = useContext(
    VirtualPharmaContext
  );

  //============== ========================   Use Effect ===============================================
  useEffect(() => {
    setUserDetails(props.userDetails);
    if (props.userDetails) {
      if (props.userDetails.additional_information) {
        setAdditionalInfoModel(props.userDetails.additional_information)
      }
    }

    let user_profile = props.userDetails
      ? props.userDetails.personal_information
        ? props.userDetails.personal_information
        : profileModel
      : profileModel;

    let firstName = null;
    let lastName = null;
    let email = null;
    if (props.userDetails) {
      if (props.userDetails.personal_information) {
        if (!props.userDetails.personal_information.first_name) {
          firstName = userInfo ? userInfo.first_name : null;
        } else {
          firstName = null;
        }
        if (!props.userDetails.personal_information.last_name) {
          lastName = userInfo ? userInfo.last_name : null;
        } else {
          lastName = null;
        }
      } else {
        firstName = userInfo ? userInfo.first_name : null;
        lastName = userInfo ? userInfo.last_name : null;
      }
    }

    user_profile.first_name = firstName ? firstName : user_profile.first_name;
    user_profile.last_name = lastName ? lastName : user_profile.last_name;
    user_profile.experiencedIn = user_profile.experienced_in;
    user_profile.pricePerHr = user_profile.price_per_hour;

    setProfileModel(user_profile);
  }, [props.userDetails, props.profilePicPath]);

  // =======================================  Profile Info Functions  ===========================================
  //Handle Profile Info Change
  const handleProfileInfoChange = (event) => {
    setProfileModel({
      ...profileModel,
      [event.target.name]: event.target.value === "Please Select" ? null : event.target.value,
    });
  };

  //Save  Profie Info Details
  const saveProfileInfo = (event) => {
    event.preventDefault();
    if (checkProfileInfoValidations()) return;

    let {
      id,
      first_name,
      last_name,
      services,
      pricePerHr,
      experiencedIn,
      country,
      profile_pic
    } = profileModel;

    setLoading(true);
    axios
      .post(
        usersUrl + "/create_personal_information",
        {
          id,
          first_name,
          last_name,
          services,
          pricePerHr,
          experienced_in: experiencedIn,
          profile_pic: props.profilePicPath ? props.profilePicPath : profile_pic,
          country,
          user_id: userID,
          role: userRole,
        },
        {
          headers: {
            api_key: apiKey,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLoading(false);
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
            props.setUserDetails(response.data);
          })
          .catch((error) => console.log(error));
        Swal.fire("Record Saved Successfully", "", "success");
        if (response.responseCode === -1) {
          setProfileModel(response.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        let errorMessage = null;
        try {
          errorMessage = error.response.data.message;
        } catch (error) {
          errorMessage = null;
        }
        Swal.fire({
          title: "",
          text: "" + errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  //Check Edit Profile Validations
  const checkProfileInfoValidations = () => {
    let validation = false;
    let {
      first_name,
      last_name,
      services,
      pricePerHr,
      experiencedIn,
      city,
      email,
    } = profileModel;

    if (!first_name) {
      setFirstNameValField("Please Enter First Name");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setFirstNameValField(null);
    }

    if (!last_name) {
      setLastNameValField("Please Enter Last Name");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setLastNameValField(null);
    }

    if (!experiencedIn) {
      setExperiencedInValField("Please Select Experienced In");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setExperiencedInValField(null);
    }
    if (!pricePerHr) {
      setPricePerHrValField("Please Enter Price Per Hour");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setPricePerHrValField(null);
    }

    if (!services) {
      setServicesValField("Please Enter Services");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setServicesValField(null);
    }

    return validation;
  };

  //  ========================================== Psssword Change Functions  =============================================
  // Handle Password Change Change
  const handlePassowrdChange = (event) => {
    setPasswordModel({
      ...passwordModel,
      [event.target.name]: event.target.value,
    });
  };

  //Handle PAssword Change Save
  const saveChangePassword = (event) => {
    event.preventDefault();
    if (checkPasswordValidations()) return;

    let { oldPassword, newPassword } = passwordModel;
    setLoading(true)
    axios
      .post(
        usersUrl + "/update_password",
        {
          old_password: oldPassword,
          new_password: newPassword,
          email: userEmail,
          user_id: userID,
          role: userRole,
        },
        {
          headers: {
            api_key: apiKey,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLoading(false)
        Swal.fire("Password Updated Successfully", "", "success");
        setPasswordModel({
          oldPassword: "",
          newPassword: "",
          cnfrmPassword: "",
        })
      })
      .catch((error) => {
        setLoading(false);
        let errorMessage = null;
        try {
          errorMessage = error.response.data.message;
        } catch (error) {
          errorMessage = null;
        }
        Swal.fire({
          title: "",
          text: "" + errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  //Check PAssword Tab Validations
  const checkPasswordValidations = () => {
    let validation = false;
    let { oldPassword, newPassword, cnfrmPassword } = passwordModel;

    if (!oldPassword) {
      setOldPasswordValField("Please Enter Old Password");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setOldPasswordValField(null);
    }
    if (!newPassword) {
      setNewPasswordValField("Please Enter New Password");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setNewPasswordValField(null);
    }
    if (cnfrmPassword !== newPassword) {
      setCnfrmPassswordValField("Password Didn't Matched");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setCnfrmPassswordValField(null);
    }
    return validation;
  };

  // =============================================  Institution Functions  ===========================================
  // Handle Institution Chane
  const handleInstitutionChange = (event) => {
    setInstitutionModel({
      ...institutionModel,
      [event.target.name]: event.target.value,
    });
  };

  //Toggle currenntly enrolled
  const setCurrentlyEnrolled = () => {
    if (institutionModel.currentlyEnrolled === false) {
      setInstitutionModel({
        ...institutionModel,
        currentlyEnrolled: !institutionModel.currentlyEnrolled,
        studyToDate: "",
      });
    } else {
      setInstitutionModel({
        ...institutionModel,
        currentlyEnrolled: !institutionModel.currentlyEnrolled,
      });
    }
  };

  //Save Institutional Details
  const saveInstitutionalDetails = (event) => {
    event.preventDefault();

    if (checkInstitutionalDetailsValidations()) return;
    setLoading(true);
    let {
      id,
      degreeTitle,
      institutionName,
      studyFromDate,
      studyToDate,
      currentlyEnrolled,
      instDescription,
    } = institutionModel;
    axios
      .post(
        usersUrl + "/create_accademic_experience",
        {
          id,
          degree: degreeTitle,
          institution_name: institutionName,
          from: studyFromDate,
          to: studyToDate,
          is_current: currentlyEnrolled,
          description: instDescription,
          user_id: userID,
          role: userRole,
        },
        {
          headers: {
            api_key: apiKey,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
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
            props.setUserDetails(response.data);
          })
          .catch((error) => console.log(error));

        setLoading(false);
        setInstitutionModel({
          id: null,
          degreeTitle: "",
          institutionName: "",
          studyFromDate: "",
          studyToDate: "",
          currentlyEnrolled: false,
          instDescription: "",
        });
        Swal.fire("Record Saved Successfully", "", "success");
      })
      .catch((error) => {
        setLoading(false);
        let errorMessage = null;
        try {
          errorMessage = error.response.data.message;
        } catch (error) {
          errorMessage = null;
        }
        Swal.fire({
          title: "",
          text: "" + errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  //Check Institutional Details Validations
  const checkInstitutionalDetailsValidations = () => {
    let validation = false;
    let {
      degreeTitle,
      institutionName,
      studyFromDate,
      studyToDate,
      currentlyEnrolled,
    } = institutionModel;

    if (!degreeTitle) {
      setDegreeTitleValField("Please Enter Degree Title");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setDegreeTitleValField(null);
    }

    if (!institutionName) {
      setInstitutionNameValField("Please Enter Institution Name");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setInstitutionNameValField(null);
    }
    if (!studyFromDate) {
      setStudyFromDateValField("Please Select Study From Date");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setStudyFromDateValField(null);
    }

    if (!studyToDate && currentlyEnrolled === false) {
      setStudyToDateValField("Please Select Study To Date");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setStudyToDateValField(null);
    }

    return validation;
  };

  //delete work experienece
  const deleteInstitutionData = (event, id, index) => {
    event.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.value) {
        setLoading(true)
        axios
          .delete(usersUrl + "/delete_accademic_experience", {
            data: {
              user_id: userID,
              id,
            },
            headers: {
              api_key: apiKey,
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setLoading(false)
            Swal.fire("Record Deleted Successfully", "", "success");
            let accademic_records = userDetails.accademic_records;
            accademic_records.splice(index, 1);
            setUserDetails({
              ...userDetails,
              accademic_records,
            });
            props.setUserDetails(response.data);
          })
          .catch((error) => {
            setLoading(false)
            let errorMessage = null;
            try {
              errorMessage = error.response.data.message;
            } catch (error) {
              errorMessage = null;
            }
            Swal.fire({
              title: "",
              text: "" + errorMessage,
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };

  //Edit Work Experience
  const editInstitutionData = (event, id, index) => {
    event.preventDefault();
    let editMode = {
      id: accademic_records[index].id,
      degreeTitle: accademic_records[index].degree,
      institutionName: accademic_records[index].institution_name,
      studyFromDate: accademic_records[index].from,
      studyToDate: accademic_records[index].to,
      currentlyEnrolled:
        accademic_records[index].is_current === 1 ? true : false,
      instDescription: accademic_records[index].description,
    };
    setInstitutionModel(editMode);
  };

  // ========================================== Work Experience Function ===================================
  // handle work experience change
  const handleWorkExperienceChange = (event) => {
    setWorkExperienceModel({
      ...workExperienceModel,
      [event.target.name]: event.target.value,
    });
  };

  //Toggle currenntly working
  const setCurrentlyWorking = () => {
    if (workExperienceModel.currentlyWorking === false) {
      setWorkExperienceModel({
        ...workExperienceModel,
        currentlyWorking: !workExperienceModel.currentlyWorking,
        workTo: "",
      });
    } else {
      setWorkExperienceModel({
        ...workExperienceModel,
        currentlyWorking: !workExperienceModel.currentlyWorking,
      });
    }
  };

  //Save Work Experience Details
  const saveWorkExperienceDetails = (event) => {
    event.preventDefault();

    if (checkWorkExperienceDetailsValidations()) return;
    setLoading(true);
    let {
      id,
      position,
      company,
      workFrom,
      workTo,
      description,
      currentlyWorking,
    } = workExperienceModel;
    axios
      .post(
        usersUrl + "/create_work_experience",
        {
          id,
          position,
          company,
          from: workFrom,
          to: workTo,
          description,
          is_current: currentlyWorking,
          user_id: userID,
          role: userRole,
        },
        {
          headers: {
            api_key: apiKey,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLoading(false);
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
            props.setUserDetails(response.data);
          })
          .catch((error) => console.log(error));
        Swal.fire("Record Saved Successfully", "", "success");
        setWorkExperienceModel({
          id: null,
          position: "",
          company: "",
          workFrom: "",
          workTo: "",
          currentlyWorking: false,
          description: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        let errorMessage = null;
        try {
          errorMessage = error.response.data.message;
        } catch (error) {
          errorMessage = null;
        }
        Swal.fire({
          title: "",
          text: "" + errorMessage,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  //Check Institutional Details Validations
  const checkWorkExperienceDetailsValidations = () => {
    let validation = false;
    let {
      position,
      company,
      workFrom,
      workTo,
      currentlyWorking,
    } = workExperienceModel;

    if (!position) {
      setPositionValField("Please Enter Position");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setPositionValField(null);
    }
    if (!company) {
      setCompanyValField("Please Enter Compeny");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setCompanyValField(null);
    }

    if (!workFrom) {
      setWorkFromValField("Please Select Work From Date");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setWorkFromValField(null);
    }

    if (!workTo && currentlyWorking === false) {
      setWorkToValField("Please Select Work To Date");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setWorkToValField(null);
    }

    return validation;
  };

  //delete work experienece
  const deleteWorkExperience = (event, id, index) => {
    event.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't to delete!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.value) {
        setLoading(true)
        axios
          .delete(usersUrl + "/delete_work_experience", {
            data: {
              user_id: userID,
              id,
            },
            headers: {
              api_key: apiKey,
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            setLoading(false)
            Swal.fire("Record Deleted Successfully", "", "success");
            let work_experience = userDetails.work_experience;
            work_experience.splice(index, 1);
            setUserDetails({
              ...userDetails,
              work_experience: work_experience,
            });
            props.setUserDetails(response.data);
          })
          .catch((error) => {
            setLoading(false)
            let errorMessage = null;
            try {
              errorMessage = error.response.data.message;
            } catch (error) {
              errorMessage = null;
            }
            Swal.fire({
              title: "",
              text: "" + errorMessage,
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };

  //Edit Work Experience
  const editWorkExperience = (event, id, index) => {
    event.preventDefault();
    let editMode = {
      id: work_experience[index].id,
      position: work_experience[index].position,
      company: work_experience[index].company,
      workFrom: work_experience[index].from,
      workTo: work_experience[index].to,
      currentlyWorking: work_experience[index].is_current === 1 ? true : false,
      description: work_experience[index].description,
    };
    setWorkExperienceModel(editMode);
  };

  // ============================== ADditional Insormation Functions ================================

  //handle additional info change
  const handleAdditionalInfoChange = (event) => {
    setAdditionalInfoModel({
      ...additionalInfoModel,
      [event.target.name]: event.target.value
    })
  }

  //save Additional Info 
  const handleSaveAdditionalInfo = (event) => {
    event.preventDefault();
    if (checkAdditionalInfoVaidation()) return;
    setLoading(true);
    const { id,
      technical_skills,
      expertise,
      scientific_field,
      data_treatment,
      patents,
      supervisory_experience,
      professional_outreach,
      consultancy,
      contributed_presentations,
      committee_service,
      mentoring_activities,
      teaching,
      publications,
      invited_talks, } = additionalInfoModel;

    axios
      .post(
        usersUrl + "/create_additional_information",
        {
          id,
          technical_skills,
          expertise,
          scientific_field,
          data_treatment,
          patents,
          supervisory_experience,
          professional_outreach,
          consultancy,
          contributed_presentations,
          committee_service,
          mentoring_activities,
          teaching,
          publications,
          invited_talks,
          user_id: userID,
          role: userRole,
        },
        {
          headers: {
            api_key: apiKey,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setLoading(false);
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
            props.setUserDetails(response.data);
          })
          .catch((error) => console.log(error));
        Swal.fire("Record Saved Successfully", "", "success");


      })
      .catch((error) => {
        setLoading(false);
        let errorMessage = null;
        if (error.response) {
          if (error.response.data) {
            if (error.response.status === 400) {
              Swal.fire({
                title: "",
                text: "" + error.response.data,
                icon: "error",
                confirmButtonText: "OK",
              });
              return
            }
          }
        } else {
          Swal.fire({
            title: "Something Wrong!",
            text: "Please try again",
            icon: "error",
            confirmButtonText: "OK",
          });
        }


      });
  }

  //Check Institutional Details Validations
  const checkAdditionalInfoVaidation = () => {
    let validation = false;
    const { id,
      technical_skills,
      expertise,
      scientific_field,
      data_treatment,
    } = additionalInfoModel;

    if (!technical_skills) {
      setTechnicalSkillsValidations("Please Enter Technical Skills");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setTechnicalSkillsValidations(null);
    }
    if (!expertise) {
      setExpertiesValidations("Please Enter Expertise");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setExpertiesValidations(null);
    }

    if (!scientific_field) {
      setScientificFieldValidations("Please Enter Scientific Field");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setScientificFieldValidations(null);
    }

    if (!data_treatment) {
      setDataTreatmentValidations("Please Enter Data Treatment");
      validation = true;
    } else {
      validation = validation === false ? false : true;
      setDataTreatmentValidations(null);
    }

    return validation;
  };


  // ====================================  Props data ================================================
  let work_experience = userDetails ? userDetails.work_experience : null;
  let accademic_records = userDetails ? userDetails.accademic_records : null;

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
    <div className="tabs-content">
      {spiner}
      <div className="h-100">
        <nav className="d-md-block d-flex justify-content-between align-items-start">
          {/* Top Menu Tabs */}
          <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            <li>
              <a
                className="nav-item nav-link active"
                data-toggle="tab"
                href="#nav-personal"
              >
                Personal Information
              </a>
            </li>
            <li>
              <a className="nav-item nav-link" data-toggle="tab" href="#nav-work">
                Work Experience
              </a>
            </li>
            <li>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#nav-university"
              >
                Academic Experience
              </a>
            </li>
            <li>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#nav-additional-info"
              >
                Additional Information
              </a>
            </li>
            <li>
              <a
                className="nav-item nav-link"
                data-toggle="tab"
                href="#nav-password"
              >
                Password
              </a>
            </li>
          </ul>
        </nav>

        <div className="tab-content" id="nav-tabContent">
          {/*   Personal Information Tab */}
          <div
            className="tab-pane fade active show"
            id="nav-personal"
            role="tabpanel"
            aria-labelledby="nav-personal-tab"
          >
            <div className="input-container">
              <form onSubmit={saveProfileInfo}>
                <div className="form-group">
                  <label for="full_name">First Name</label>
                  <input
                    id="full_name"
                    type="text"
                    className="first-input input form-control"
                    name="first_name"
                    value={profileModel.first_name}
                    onChange={(event) => handleProfileInfoChange(event)}
                    required
                    autocomplete="name"
                    autofocus
                  />
                  {firstNameValField ? (
                    <ValidationMessage message={firstNameValField} />
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="city">Last Name</label>
                  <input
                    id="city"
                    type="text"
                    className="first-input input form-control"
                    name="last_name"
                    value={profileModel.last_name}
                    onChange={(event) => handleProfileInfoChange(event)}
                    required
                    autocomplete="name"
                  />
                  {lastNameValField ? (
                    <ValidationMessage message={lastNameValField} />
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={profileModel.country}
                    onChange={(event) => handleProfileInfoChange(event)}
                    className="input form-control"
                  >
                    {countriesList.map((country) => {
                      return (
                        <option value={country.code}>{country.value}</option>
                      );
                    })}
                  </select>
                  <span className="invalid-feedback" role="alert">
                    <strong>Invalid Message here</strong>
                  </span>
                </div>
                <div className="form-group">
                  <label for="country">Experienced In</label>
                  <select
                    id="country"
                    name="experiencedIn"
                    value={profileModel.experiencedIn}
                    onChange={(event) => handleProfileInfoChange(event)}
                    className="input form-control"
                  >
                    {experiencesInList.map((country) => {
                      return (
                        <option value={country.code}>{country.value}</option>
                      );
                    })}
                  </select>
                  {experiencedInValField ? (
                    <ValidationMessage message={experiencedInValField} />
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="services">What services do you sell?</label>
                  <textarea
                    id="services"
                    type="text"
                    className="input  form-control "
                    name="services"
                    value={profileModel.services}
                    onChange={(event) => handleProfileInfoChange(event)}
                    required=""
                    autocomplete="services"
                  ></textarea>
                  {servicesValField ? (
                    <ValidationMessage message={servicesValField} />
                  ) : null}
                </div>

                <div className="form-group">
                  <label for="price">Price per hour</label>
                  <input
                    id="price"
                    type="number"
                    min="0"
                    className="input form-control"
                    value={profileModel.pricePerHr}
                    onChange={(event) => handleProfileInfoChange(event)}
                    name="pricePerHr"
                    required=""
                  />
                  {pricePerHrValField ? (
                    <ValidationMessage message={pricePerHrValField} />
                  ) : null}
                </div>

                <div className="upload-img d-flex justify-content-between flex-column flex-sm-row">
                  <div className="upload"></div>
                </div>
                <button
                  type="submit"
                  className="blue-btn save"
                  onClick={saveProfileInfo}
                >
                  Save{" "}
                </button>
              </form>
            </div>
          </div>

          {/* Work Experience Tab */}
          <div
            className="tab-pane fade"
            id="nav-work"
            role="tabpanel"
            aria-labelledby="nav-work-tab"
          >
            <div className="table-responsive">
              <table className="text-center experience-table">
                <thead>
                  <tr>
                    <th>Position Title</th>
                    <th>Company Name</th>
                    <th>Years of Work</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails
                    ? userDetails.work_experience
                      ? userDetails.work_experience.map((work, index) => (
                        <tr>
                          <td>{work.position}</td>
                          <td>{work.company}</td>
                          <td>
                            {(work.from
                              ? moment(workExperienceModel.from).format(
                                "MM/DD/YYYY"
                              )
                              : "") +
                              " - " +
                              (work.to
                                ? moment(workExperienceModel.to).format(
                                  "MM/DD/YYYY"
                                )
                                : "")}
                          </td>
                          <td>{work.description}</td>
                          <td>
                            <a
                              title="Edit"
                              id="edit"
                              data-id="id"
                              href="/"
                              onClick={(event) =>
                                editWorkExperience(event, work.id, index)
                              }
                            >
                              <i className="fas fa-edit fa-sm fa-fw"></i>
                            </a>
                            <a
                              title="Delete"
                              id="delete"
                              data-id="id"
                              href="/"
                              onClick={(event) =>
                                deleteWorkExperience(event, work.id, index)
                              }
                            >
                              <i className="fas fa-trash-alt fa-sm fa-fw"></i>
                            </a>
                          </td>
                        </tr>
                      ))
                      : null
                    : null}
                </tbody>
              </table>
            </div>
            <div className="input-container" id="work">
              <form id="work_experience" onSubmit={saveWorkExperienceDetails}>
                <div className="form-group">
                  <label for="positionWork">Position</label>
                  <input
                    id="positionWork"
                    type="text"
                    className="first-input form-control input"
                    name="position"
                    value={workExperienceModel.position}
                    onChange={handleWorkExperienceChange}
                    required
                    autocomplete="position"
                  />
                  {positionValField ? (
                    <ValidationMessage message={positionValField} />
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="companyWork">Company</label>
                  <input
                    id="companyWork"
                    type="text"
                    className="input form-control"
                    name="company"
                    value={workExperienceModel.company}
                    onChange={handleWorkExperienceChange}
                    required
                    autocomplete="company"
                  />
                  {companyValField ? (
                    <ValidationMessage message={companyValField} />
                  ) : null}
                </div>
                <div>
                  <label for="fromWork">Years of Work</label>
                  <div className="d-flex justify-content-between dates flex-column flex-sm-row">
                    <div className="form-group">
                      <input
                        id="fromWork"
                        type="date"
                        max="2100-12-31"
                        placeholder="From"
                        className="input form-control datepicker"
                        name="workFrom"
                        value={
                          workExperienceModel.workFrom
                            ? workExperienceModel.workFrom.slice(0, 10)
                            : ""
                        }
                        onChange={handleWorkExperienceChange}
                        required
                        autocomplete="from"
                      />
                      {workFromValField ? (
                        <ValidationMessage message={workFromValField} />
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        id="toWork"
                        type="date"
                        max="2100-12-31"
                        placeholder="To"
                        className="input form-control datepicker"
                        style={{
                          backgroundColor: workExperienceModel.currentlyWorking
                            ? "#cccccc"
                            : "",
                        }}
                        disabled={
                          workExperienceModel.currentlyWorking ? true : false
                        }
                        name="workTo"
                        value={
                          workExperienceModel.workTo
                            ? workExperienceModel.workTo.slice(0, 10)
                            : ""
                        }
                        onChange={handleWorkExperienceChange}
                        required
                        autocomplete="to"
                      />
                      {workToValField ? (
                        <ValidationMessage message={workToValField} />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    id="currentlyWorking"
                    checked={workExperienceModel.currentlyWorking}
                    onClick={setCurrentlyWorking}
                  />
                  <label
                    for="currentlyWorking"
                    className="position-relative"
                    style={{ paddingRight: "10px" }}
                  >
                    Currently Enrolled
                  </label>
                </div>
                <div className="form-group">
                  <label for="descriptionWork">Description</label>
                  <textarea
                    id="descriptionWork"
                    type="text"
                    className="input form-control "
                    name="description"
                    value={workExperienceModel.description}
                    onChange={handleWorkExperienceChange}
                    required
                    autocomplete="description"
                  ></textarea>

                  <strong
                    style={{
                      display: "none",
                      color: "#e3342f",
                      fontSize: "11",
                    }}
                    id="descriptionerror"
                  >
                    This field is required.
                  </strong>
                </div>
                <button
                  id="save_work"
                  type="submit"
                  className="blue-btn save"
                  onClick={saveWorkExperienceDetails}
                >
                  Save
                </button>
              </form>
            </div>
          </div>

          {/*  Academic Experience Tab */}
          <div
            className="tab-pane fade"
            id="nav-university"
            role="tabpanel"
            aria-labelledby="nav-university-tab"
          >
            <div className="table-responsive">
              <table className="text-center experience-table">
                <thead>
                  <tr>
                    <th>Degree Title</th>
                    <th>Institution Name</th>
                    <th>Years of Study</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails
                    ? userDetails.accademic_records
                      ? userDetails.accademic_records.map((work, index) => (
                        <tr>
                          <td>{work.degree}</td>
                          <td>{work.institution_name}</td>
                          <td>
                            {(work.from
                              ? moment(work.from).format("MM/DD/YYYY")
                              : "") +
                              " - " +
                              (work.to
                                ? moment(work.to).format("MM/DD/YYYY")
                                : "")}
                          </td>
                          <td>{work.description}</td>
                          <td>
                            <a
                              title="Edit"
                              id="edit"
                              data-id="id"
                              href="/"
                              onClick={(event) =>
                                editInstitutionData(event, work.id, index)
                              }
                            >
                              <i className="fas fa-edit fa-sm fa-fw"></i>
                            </a>
                            <a
                              title="Delete"
                              id="delete"
                              data-id="id"
                              href="/"
                              onClick={(event) =>
                                deleteInstitutionData(event, work.id, index)
                              }
                            >
                              <i className="fas fa-trash-alt fa-sm fa-fw"></i>
                            </a>
                          </td>
                        </tr>
                      ))
                      : null
                    : null}
                </tbody>
              </table>
            </div>

            <div className="input-container" id="experience">
              <form id="academic_experience">
                <div className="form-group">
                  <label for="university">Degree Title</label>
                  <input
                    id="university"
                    type="text"
                    className="first-input input form-control"
                    name="degreeTitle"
                    value={institutionModel.degreeTitle}
                    onChange={(event) => handleInstitutionChange(event)}
                    required
                    autocomplete="university"
                  />
                  {degreeTitleValField ? (
                    <ValidationMessage message={degreeTitleValField} />
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="university">Institution Name</label>
                  <input
                    id="university"
                    type="text"
                    className="first-input input form-control"
                    name="institutionName"
                    value={institutionModel.institutionName}
                    onChange={(event) => handleInstitutionChange(event)}
                    required
                    autocomplete="university"
                  />
                  {institutionNameValField ? (
                    <ValidationMessage message={institutionNameValField} />
                  ) : null}
                </div>
                <div>
                  <label for="from2">Years of Study</label>
                  <div className="d-flex justify-content-between dates flex-column flex-sm-row">
                    <div className="form-group">
                      <input
                        id="from2"
                        type="date"
                        max="2100-12-31"
                        className="input form-control datapicker"
                        name="studyFromDate"
                        value={institutionModel.studyFromDate}
                        onChange={(event) => handleInstitutionChange(event)}
                        required
                        autocomplete="from"
                      />
                      {studyFromDateValField ? (
                        <ValidationMessage message={studyFromDateValField} />
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        id="to2"
                        type="date"
                        max="2100-12-31"
                        className="input form-control datapicker"
                        name="studyToDate"
                        style={{
                          backgroundColor: institutionModel.currentlyEnrolled
                            ? "#cccccc"
                            : "",
                        }}
                        disabled={
                          institutionModel.currentlyEnrolled ? true : false
                        }
                        value={institutionModel.studyToDate}
                        onChange={(event) => handleInstitutionChange(event)}
                        required
                        autocomplete="to"
                      />

                      {studyToDateValField ? (
                        <ValidationMessage message={studyToDateValField} />
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="form-group checkbox">
                  <input
                    type="checkbox"
                    id="currentlyEnrolled"
                    checked={institutionModel.currentlyEnrolled}
                    onClick={setCurrentlyEnrolled}
                  />
                  <label
                    for="currentlyEnrolled"
                    className="position-relative"
                    style={{ paddingRight: "10px" }}
                  >
                    Currently Enrolled
                  </label>
                </div>
                <div className="form-group">
                  <label for="description">Description</label>
                  <textarea
                    id="description2"
                    type="text"
                    className="input form-control "
                    name="instDescription"
                    required
                    autocomplete="description"
                    value={institutionModel.instDescription}
                    onChange={(event) => handleInstitutionChange(event)}
                  >
                    description here
                  </textarea>
                </div>
                <button
                  id="save_academic"
                  type="submit"
                  className="blue-btn save"
                  onClick={saveInstitutionalDetails}
                >
                  {" "}
                  Save{" "}
                </button>
              </form>
            </div>
          </div>

          {/* Additional Info Tab  */}
          <div
            className="tab-pane fade"
            id="nav-additional-info"
            role="tabpanel"
            aria-labelledby="nav-work-tab"
          >
            <div className="tab-content" id="nav-tabContent">
              <div className="additional-info">
                <form>
                  <input type="hidden" name="_token" value="" />
                  <input type="hidden" name="_method" value="PATCH" />
                  <h4 className="text-bold w-100 text-center pt-5 title-h4">
                    Technical Skills and Instruments
                  </h4>

                  <div className="d-flex justify-content-between flex-sm-row flex-column align-items-center align-items-sm-start">
                    <div className="input-container w-100 d-flex flex-wrap justify-content-between align-items-end pt-5">
                      <div className="form-group">
                        <label for="skills">Technical Skills </label>
                        <textarea
                          id="technical_skills"
                          required=""
                          type="text"
                          className="first-input-left  form-control input "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.technical_skills}
                          name="technical_skills"
                          autocomplete="skills"
                          autofocus=""
                          spellcheck="false"
                        >
                        </textarea>
                        {technical_skillsValField ? (
                          <ValidationMessage message={technical_skillsValField} />
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label for="expertise">Expertise</label>
                        <textarea
                          id="expertise"
                          type="text"
                          className="first-input-right  form-control input "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.expertise}
                          name="expertise"
                          autocomplete="expertise"
                        >

                        </textarea>
                        {expertiesValField ? (
                          <ValidationMessage message={expertiesValField} />
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label for="scientific_field">Scientific Field</label>
                        <textarea
                          id="scientific_field"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.scientific_field}
                          name="scientific_field"
                          autocomplete="scientific_field"
                        >
                        </textarea>
                        {scientific_fieldValField ? (
                          <ValidationMessage message={scientific_fieldValField} />
                        ) : null}
                      </div>
                      <div className="form-group">
                        <label for="data_treatment">Data Treatment</label>
                        <textarea
                          id="data_treatment"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.data_treatment}
                          name="data_treatment"
                          utocomplete="data_treatment"
                        >
                        </textarea>
                        {data_treatmentValField ? (
                          <ValidationMessage message={data_treatmentValField} />
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Other Information */}
                  <h4 className="text-bold w-100 text-center pt-5 title-h4">
                    Other Information
                  </h4>
                  <div className="d-flex justify-content-between flex-sm-row flex-column align-items-center align-items-sm-start">
                    <div className="input-container w-100 d-flex flex-wrap justify-content-between align-items-end pt-5">
                      <div className="form-group">
                        <label for="honors_awards">Patents(if any)</label>
                        <textarea
                          id="patents"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.patents}
                          name="patents"
                          autocomplete="patents"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="supervisory_experience">
                          Supervisory Experience(if any)
                        </label>

                        <textarea
                          id="supervisory_experience"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.supervisory_experience}
                          name="supervisory_experience"
                          autocomplete="supervisory_experience"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="professional_outreach">
                          Professional Outreach and Professional Society Service
                          (including Conference Organization, Session Chairing
                          (if any)
                        </label>
                        <textarea
                          id="professional_outreach"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.professional_outreach}
                          name="professional_outreach"
                          autocomplete="professional_outreach"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="consultancy">Consultancy</label>

                        <textarea
                          id="consultancy"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.consultancy}
                          name="consultancy"
                          autocomplete="consultancy"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="contributed_presentations">
                          Contributed Presentations
                        </label>
                        <textarea
                          id="contributed_presentations"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.contributed_presentations}
                          name="contributed_presentations"
                          autocomplete="contributed_presentations"
                        ></textarea>
                      </div>

                      <div className="form-group">
                        <label for="committee_service">Committee Service</label>
                        <textarea
                          id="committee_service"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.committee_service}
                          name="committee_service"
                          autocomplete="committee_service"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="committee_service">
                          Mentoring Activities
                        </label>
                        <textarea
                          id="mentoring_activities"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.mentoring_activities}
                          name="mentoring_activities"
                          autocomplete="mentoring_activities"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label for="teaching">Teaching</label>
                        <textarea
                          id="teaching"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.teaching}
                          name="teaching"
                          autocomplete="teaching"
                        >
                          {" "}
                        </textarea>
                      </div>
                      <div className="form-group">
                        <label for="publications">Publications</label>
                        <textarea
                          id="publications"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.publications}
                          name="publications"
                          autocomplete="publications"
                        >
                          {" "}
                        </textarea>
                      </div>
                      <div className="form-group">
                        <label for="invited_talks">Invited Talks</label>
                        <textarea
                          id="invited_talks"
                          type="text"
                          className="input form-control "
                          onChange={handleAdditionalInfoChange}
                          value={additionalInfoModel.invited_talks}
                          name="invited_talks"
                          autocomplete="invited_talks"
                        >
                          {" "}
                        </textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex justify-content-between info-buttons mt-4">
                    <button type="submit" className="blue-btn save" onClick={handleSaveAdditionalInfo}>
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Password Tab */}
          <div
            className="tab-pane fade"
            id="nav-password"
            role="tabpanel"
            aria-labelledby="nav-work-tab"
          >
            <div className="input-container">
              <form id="work_experience" onSubmit={saveChangePassword}>
                <div className="form-group">
                  <label for="password">Old password</label>
                  <input
                    id="password"
                    type="password"
                    className="first-input form-control input"
                    name="oldPassword"
                    required
                    autofocus
                    value={passwordModel.oldPassword}
                    onChange={(event) => handlePassowrdChange(event)}
                  />
                  {oldPasswordValField ? (
                    <ValidationMessage message={oldPasswordValField} />
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="newPassword">New password</label>
                  <input
                    id="newPassword"
                    type="password"
                    className="form-control input"
                    name="newPassword"
                    required
                    value={passwordModel.newPassword}
                    onChange={(event) => handlePassowrdChange(event)}
                  />
                  {newPasswordValField ? (
                    <ValidationMessage message={newPasswordValField} />
                  ) : null}
                </div>
                <div className="form-group">
                  <label for="newPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    className="form-control input"
                    name="cnfrmPassword"
                    required
                    value={passwordModel.cnfrmPassword}
                    onChange={(event) => handlePassowrdChange(event)}
                  />
                  {cnfrmPasswordValField ? (
                    <ValidationMessage message={cnfrmPasswordValField} />
                  ) : null}
                </div>
                <input
                  type="hidden"
                  id="isChanged"
                  value="Successfully Changed"
                />
                <input type="hidden" id="notChanged" value="An error" />
                <button
                  type="submit"
                  className="blue-btn save"
                  onClick={saveChangePassword}
                >
                  {" "}
                  Save{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
