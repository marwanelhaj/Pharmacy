import React from 'react'

function AddYourLab() {
    return (
        <main>
            <div className="modal" id="messageModal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body text-center">
                            <h4 className="modal-title text-center title-h2">Thank you, we received your message and will be in touch with you shortly.
          </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" width="100px" className="pt-3"><g>
                                <g>
                                    <g>
                                        <path d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.332,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256    s26.629,132.667,74.98,181.019C123.332,485.371,187.62,512,256,512s132.667-26.629,181.019-74.98    C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M378.306,195.073L235.241,338.139    c-2.929,2.929-6.768,4.393-10.606,4.393c-3.839,0-7.678-1.464-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354,0-21.213    c5.857-5.858,15.355-5.858,21.213,0l69.728,69.727l132.458-132.46c5.857-5.858,15.355-5.858,21.213,0    C384.164,179.718,384.164,189.215,378.306,195.073z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#05CAFE" />
                                    </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal" id="messageModal">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body text-center">
                            <h4 className="modal-title text-center title-h2">Thank you, we received your message and will be in
                            touch with you shortly.
          </h4>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" width="100px" className="pt-3"><g>
                                <g>
                                    <g>
                                        <path d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.332,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256    s26.629,132.667,74.98,181.019C123.332,485.371,187.62,512,256,512s132.667-26.629,181.019-74.98    C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M378.306,195.073L235.241,338.139    c-2.929,2.929-6.768,4.393-10.606,4.393c-3.839,0-7.678-1.464-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354,0-21.213    c5.857-5.858,15.355-5.858,21.213,0l69.728,69.727l132.458-132.46c5.857-5.858,15.355-5.858,21.213,0    C384.164,179.718,384.164,189.215,378.306,195.073z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#05CAFE" />
                                    </g>
                                </g>
                            </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <section className="home-banner position-relative">
                <img src="#" alt className="home-bg img-fluid h-100" />
                <div className="home-img">
                    <img src="https://virtupharma.com.au/img/header_image.png" alt className="img-fluid w-100 h-100 object-fit-cover" />
                </div>
                <div className="home-text position-relative">
                    <h1>Virtual Laboratory Centers</h1>
                    <div className="text-center " style={{ color: 'white' }}>
                        <h3>
                            Gain individual access to Scientific instruments and own complex instruments
        </h3>
                    </div>
                </div>
            </section>
            <section className="contact_form p-4" style={{ backgroundColor: '#dddddd' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 pt-lg-5 pb-lg-5 text-white rounded shadow-lg" style={{ backgroundColor: '#1d68a7', opacity: '0.5', border: '2px solid blue' }}>
                            <legend className="h1 text-center bg1 text-uppercase">Add Your Lab</legend>
                            <hr className="bg-white" />
                            <div className="container wrapper">
                                <form className="form-horizontal" id="lab-add" role="form" method="post" action="https://virtupharma.com.au/labs">
                                    <input type="hidden" name="_token" defaultValue="CDI3l495qb92Ua6wst7eJdGIh7w3pQ1LnI71HHyQ" />                            <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="name"><span className="required">*</span>Lab
                  Name:</label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                                                <input name="name" type="text" required className="form-control" id="name" placeholder="Your Lab name" title="name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="email"><span className="required">*</span>Lab
                  Email:</label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                                                <input name="email" type="text" required className="form-control" id="email" placeholder="Your Email" title="email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="expertise">*Expertise: </label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <select className="form-control" id="expertise" name="expertise">
                                                    <option value="pharmaceuticals">Pharmaceuticals</option>
                                                    <option value="pathology">Pathology</option>
                                                    <option value="metabolomics">Metabolomics</option>
                                                    <option value="proteomics">Proteomics</option>
                                                    <option value="food quality">Food Quality</option>
                                                    <option value="natural products">Natural Products</option>
                                                    <option value="medical sciences">Medical Sciences</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="type">*Services </label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <select className="form-control" id="type" name="type">
                                                    <option value="training">Training</option>
                                                    <option value="research">Research</option>
                                                    <option value="industry">Industry</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="instruments">*Instruments: </label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <select className="form-control" id="instruments" name="instruments">
                                                    <option value="HPLC-ESI-MS">HPLC-ESI-MS</option>
                                                    <option value="UPLC-TOF-MS">UPLC-TOF-MS</option>
                                                    <option value="UV/Vis">UV/Vis</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Cost Optional*/}
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="cost"><span className="required">*</span>Cost( Per Hour):</label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
                                                <input name="cost" type="number" className="form-control" id="cost" placeholder="Cost" title="cost" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="availability"><span className="required">*</span>Start Date:</label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                                                <input name="start_date" type="date" required className="form-control" id="start_date" placeholder="Your availability" title="availability" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="availability"><span className="required">*</span>End Date:</label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                                                <input name="end_date" type="date" required className="form-control" id="end_date" placeholder="Your availability" title="availability" />
                                            </div>
                                        </div>
                                    </div>
                                    {/*Instution Type Optional*/}
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="instution type">Country Name</label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <select className="form-control" id="country" name="country">
                                                    <option value="Afganistan">Afghanistan</option>
                                                    <option value="Albania">Albania</option>
                                                    <option value="Algeria">Algeria</option>
                                                    <option value="American Samoa">American Samoa</option>
                                                    <option value="Andorra">Andorra</option>
                                                    <option value="Angola">Angola</option>
                                                    <option value="Anguilla">Anguilla</option>
                                                    <option value="Antigua & Barbuda">Antigua &amp; Barbuda</option>
                                                    <option value="Argentina">Argentina</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Aruba">Aruba</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="Austria">Austria</option>
                                                    <option value="Azerbaijan">Azerbaijan</option>
                                                    <option value="Bahamas">Bahamas</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="Barbados">Barbados</option>
                                                    <option value="Belarus">Belarus</option>
                                                    <option value="Belgium">Belgium</option>
                                                    <option value="Belize">Belize</option>
                                                    <option value="Benin">Benin</option>
                                                    <option value="Bermuda">Bermuda</option>
                                                    <option value="Bhutan">Bhutan</option>
                                                    <option value="Bolivia">Bolivia</option>
                                                    <option value="Bonaire">Bonaire</option>
                                                    <option value="Bosnia & Herzegovina">Bosnia &amp; Herzegovina</option>
                                                    <option value="Botswana">Botswana</option>
                                                    <option value="Brazil">Brazil</option>
                                                    <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                                                    <option value="Brunei">Brunei</option>
                                                    <option value="Bulgaria">Bulgaria</option>
                                                    <option value="Burkina Faso">Burkina Faso</option>
                                                    <option value="Burundi">Burundi</option>
                                                    <option value="Cambodia">Cambodia</option>
                                                    <option value="Cameroon">Cameroon</option>
                                                    <option value="Canada">Canada</option>
                                                    <option value="Canary Islands">Canary Islands</option>
                                                    <option value="Cape Verde">Cape Verde</option>
                                                    <option value="Cayman Islands">Cayman Islands</option>
                                                    <option value="Central African Republic">Central African Republic</option>
                                                    <option value="Chad">Chad</option>
                                                    <option value="Channel Islands">Channel Islands</option>
                                                    <option value="Chile">Chile</option>
                                                    <option value="China">China</option>
                                                    <option value="Christmas Island">Christmas Island</option>
                                                    <option value="Cocos Island">Cocos Island</option>
                                                    <option value="Colombia">Colombia</option>
                                                    <option value="Comoros">Comoros</option>
                                                    <option value="Congo">Congo</option>
                                                    <option value="Cook Islands">Cook Islands</option>
                                                    <option value="Costa Rica">Costa Rica</option>
                                                    <option value="Cote DIvoire">Cote DIvoire</option>
                                                    <option value="Croatia">Croatia</option>
                                                    <option value="Cuba">Cuba</option>
                                                    <option value="Curaco">Curacao</option>
                                                    <option value="Cyprus">Cyprus</option>
                                                    <option value="Czech Republic">Czech Republic</option>
                                                    <option value="Denmark">Denmark</option>
                                                    <option value="Djibouti">Djibouti</option>
                                                    <option value="Dominica">Dominica</option>
                                                    <option value="Dominican Republic">Dominican Republic</option>
                                                    <option value="East Timor">East Timor</option>
                                                    <option value="Ecuador">Ecuador</option>
                                                    <option value="Egypt">Egypt</option>
                                                    <option value="El Salvador">El Salvador</option>
                                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                    <option value="Eritrea">Eritrea</option>
                                                    <option value="Estonia">Estonia</option>
                                                    <option value="Ethiopia">Ethiopia</option>
                                                    <option value="Falkland Islands">Falkland Islands</option>
                                                    <option value="Faroe Islands">Faroe Islands</option>
                                                    <option value="Fiji">Fiji</option>
                                                    <option value="Finland">Finland</option>
                                                    <option value="France">France</option>
                                                    <option value="French Guiana">French Guiana</option>
                                                    <option value="French Polynesia">French Polynesia</option>
                                                    <option value="French Southern Ter">French Southern Ter</option>
                                                    <option value="Gabon">Gabon</option>
                                                    <option value="Gambia">Gambia</option>
                                                    <option value="Georgia">Georgia</option>
                                                    <option value="Germany">Germany</option>
                                                    <option value="Ghana">Ghana</option>
                                                    <option value="Gibraltar">Gibraltar</option>
                                                    <option value="Great Britain">Great Britain</option>
                                                    <option value="Greece">Greece</option>
                                                    <option value="Greenland">Greenland</option>
                                                    <option value="Grenada">Grenada</option>
                                                    <option value="Guadeloupe">Guadeloupe</option>
                                                    <option value="Guam">Guam</option>
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="Guinea">Guinea</option>
                                                    <option value="Guyana">Guyana</option>
                                                    <option value="Haiti">Haiti</option>
                                                    <option value="Hawaii">Hawaii</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Hong Kong">Hong Kong</option>
                                                    <option value="Hungary">Hungary</option>
                                                    <option value="Iceland">Iceland</option>
                                                    <option value="Indonesia">Indonesia</option>
                                                    <option value="India">India</option>
                                                    <option value="Iran">Iran</option>
                                                    <option value="Iraq">Iraq</option>
                                                    <option value="Ireland">Ireland</option>
                                                    <option value="Isle of Man">Isle of Man</option>
                                                    <option value="Israel">Israel</option>
                                                    <option value="Italy">Italy</option>
                                                    <option value="Jamaica">Jamaica</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Jordan">Jordan</option>
                                                    <option value="Kazakhstan">Kazakhstan</option>
                                                    <option value="Kenya">Kenya</option>
                                                    <option value="Kiribati">Kiribati</option>
                                                    <option value="Korea North">Korea North</option>
                                                    <option value="Korea Sout">Korea South</option>
                                                    <option value="Kuwait">Kuwait</option>
                                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                    <option value="Laos">Laos</option>
                                                    <option value="Latvia">Latvia</option>
                                                    <option value="Lebanon">Lebanon</option>
                                                    <option value="Lesotho">Lesotho</option>
                                                    <option value="Liberia">Liberia</option>
                                                    <option value="Libya">Libya</option>
                                                    <option value="Liechtenstein">Liechtenstein</option>
                                                    <option value="Lithuania">Lithuania</option>
                                                    <option value="Luxembourg">Luxembourg</option>
                                                    <option value="Macau">Macau</option>
                                                    <option value="Macedonia">Macedonia</option>
                                                    <option value="Madagascar">Madagascar</option>
                                                    <option value="Malaysia">Malaysia</option>
                                                    <option value="Malawi">Malawi</option>
                                                    <option value="Maldives">Maldives</option>
                                                    <option value="Mali">Mali</option>
                                                    <option value="Malta">Malta</option>
                                                    <option value="Marshall Islands">Marshall Islands</option>
                                                    <option value="Martinique">Martinique</option>
                                                    <option value="Mauritania">Mauritania</option>
                                                    <option value="Mauritius">Mauritius</option>
                                                    <option value="Mayotte">Mayotte</option>
                                                    <option value="Mexico">Mexico</option>
                                                    <option value="Midway Islands">Midway Islands</option>
                                                    <option value="Moldova">Moldova</option>
                                                    <option value="Monaco">Monaco</option>
                                                    <option value="Mongolia">Mongolia</option>
                                                    <option value="Montserrat">Montserrat</option>
                                                    <option value="Morocco">Morocco</option>
                                                    <option value="Mozambique">Mozambique</option>
                                                    <option value="Myanmar">Myanmar</option>
                                                    <option value="Nambia">Nambia</option>
                                                    <option value="Nauru">Nauru</option>
                                                    <option value="Nepal">Nepal</option>
                                                    <option value="Netherland Antilles">Netherland Antilles</option>
                                                    <option value="Netherlands">Netherlands (Holland, Europe)</option>
                                                    <option value="Nevis">Nevis</option>
                                                    <option value="New Caledonia">New Caledonia</option>
                                                    <option value="New Zealand">New Zealand</option>
                                                    <option value="Nicaragua">Nicaragua</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                    <option value="Niue">Niue</option>
                                                    <option value="Norfolk Island">Norfolk Island</option>
                                                    <option value="Norway">Norway</option>
                                                    <option value="Oman">Oman</option>
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="Palau Island">Palau Island</option>
                                                    <option value="Palestine">Palestine</option>
                                                    <option value="Panama">Panama</option>
                                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                                    <option value="Paraguay">Paraguay</option>
                                                    <option value="Peru">Peru</option>
                                                    <option value="Phillipines">Philippines</option>
                                                    <option value="Pitcairn Island">Pitcairn Island</option>
                                                    <option value="Poland">Poland</option>
                                                    <option value="Portugal">Portugal</option>
                                                    <option value="Puerto Rico">Puerto Rico</option>
                                                    <option value="Qatar">Qatar</option>
                                                    <option value="Republic of Montenegro">Republic of Montenegro</option>
                                                    <option value="Republic of Serbia">Republic of Serbia</option>
                                                    <option value="Reunion">Reunion</option>
                                                    <option value="Romania">Romania</option>
                                                    <option value="Russia">Russia</option>
                                                    <option value="Rwanda">Rwanda</option>
                                                    <option value="St Barthelemy">St Barthelemy</option>
                                                    <option value="St Eustatius">St Eustatius</option>
                                                    <option value="St Helena">St Helena</option>
                                                    <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                                                    <option value="St Lucia">St Lucia</option>
                                                    <option value="St Maarten">St Maarten</option>
                                                    <option value="St Pierre & Miquelon">St Pierre &amp; Miquelon</option>
                                                    <option value="St Vincent & Grenadines">St Vincent &amp; Grenadines</option>
                                                    <option value="Saipan">Saipan</option>
                                                    <option value="Samoa">Samoa</option>
                                                    <option value="Samoa American">Samoa American</option>
                                                    <option value="San Marino">San Marino</option>
                                                    <option value="Sao Tome & Principe">Sao Tome &amp; Principe</option>
                                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                                    <option value="Senegal">Senegal</option>
                                                    <option value="Seychelles">Seychelles</option>
                                                    <option value="Sierra Leone">Sierra Leone</option>
                                                    <option value="Singapore">Singapore</option>
                                                    <option value="Slovakia">Slovakia</option>
                                                    <option value="Slovenia">Slovenia</option>
                                                    <option value="Solomon Islands">Solomon Islands</option>
                                                    <option value="Somalia">Somalia</option>
                                                    <option value="South Africa">South Africa</option>
                                                    <option value="Spain">Spain</option>
                                                    <option value="Sri Lanka">Sri Lanka</option>
                                                    <option value="Sudan">Sudan</option>
                                                    <option value="Suriname">Suriname</option>
                                                    <option value="Swaziland">Swaziland</option>
                                                    <option value="Sweden">Sweden</option>
                                                    <option value="Switzerland">Switzerland</option>
                                                    <option value="Syria">Syria</option>
                                                    <option value="Tahiti">Tahiti</option>
                                                    <option value="Taiwan">Taiwan</option>
                                                    <option value="Tajikistan">Tajikistan</option>
                                                    <option value="Tanzania">Tanzania</option>
                                                    <option value="Thailand">Thailand</option>
                                                    <option value="Togo">Togo</option>
                                                    <option value="Tokelau">Tokelau</option>
                                                    <option value="Tonga">Tonga</option>
                                                    <option value="Trinidad & Tobago">Trinidad &amp; Tobago</option>
                                                    <option value="Tunisia">Tunisia</option>
                                                    <option value="Turkey">Turkey</option>
                                                    <option value="Turkmenistan">Turkmenistan</option>
                                                    <option value="Turks & Caicos Is">Turks &amp; Caicos Is</option>
                                                    <option value="Tuvalu">Tuvalu</option>
                                                    <option value="Uganda">Uganda</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="Ukraine">Ukraine</option>
                                                    <option value="United Arab Erimates">United Arab Emirates</option>
                                                    <option value="United States of America">United States of America</option>
                                                    <option value="Uraguay">Uruguay</option>
                                                    <option value="Uzbekistan">Uzbekistan</option>
                                                    <option value="Vanuatu">Vanuatu</option>
                                                    <option value="Vatican City State">Vatican City State</option>
                                                    <option value="Venezuela">Venezuela</option>
                                                    <option value="Vietnam">Vietnam</option>
                                                    <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                                                    <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                                                    <option value="Wake Island">Wake Island</option>
                                                    <option value="Wallis & Futana Is">Wallis &amp; Futana Is</option>
                                                    <option value="Yemen">Yemen</option>
                                                    <option value="Zaire">Zaire</option>
                                                    <option value="Zambia">Zambia</option>
                                                    <option value="Zimbabwe">Zimbabwe</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4" htmlFor="desciption"><span className="required">*</span>Description Of Lab:</label>
                                        <div className="col-sm-12 inputGroupContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="glyphicon glyphicon-pencil" /></span>
                                                <textarea className="form-control" name="description" rows={4} placeholder="Type your description here." defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="g-recaptcha" data-sitekey="6LfrLvcUAAAAAECFmGQ3DFb7psr1N1RNuUCxWdax" />
                                        </div>
                                    </div>
                                    {/*                        &lt;!&ndash; Human validation&ndash;&gt;*/}
                                    {/*                        <div class="form-group">*/}
                                    {/*                            <label for="human" class="col-sm-4 control-label"><span class="required">*</span> Human Test:</label>*/}
                                    {/*                            <div class="col-sm-12 inputGroupContainer">*/}
                                    {/*                                <h3 class="human">6 + 6 = ?</h3>*/}
                                    {/*                                <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">*/}
                                    {/*                                <span class="required small"></span>*/}
                                    {/*                            </div>*/}
                                    {/*                        </div>*/}
                                    {/*SEND Button*/}
                                    <div className="form-group">
                                        <label className="col-sm-4 control-label" />
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-warning">Register <span className="glyphicon
                              glyphicon-send" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default AddYourLab
