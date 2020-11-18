import React from "react";

const EULA = (props) => {
  return (
    <div
      className="modal fade show"
      id="comply_modal"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content" style={{ width: "200%" }}>
          <div className="modal-header">
            {/* <h3 className="modal-title d-flex justify-content-center w-100">
              Laboratory safety
            </h3> */}
            <button
              onClick={props.onClose}
              type="button"
              className="close"
              data-dismiss="modal"
            >
              &times;
            </button>
          </div>

          <div className="modal-body pr-3 text-justify">
            <div className="row" style={{ justifyContent: "center" }}>
              END USER LICENCE AGREEMENT
            </div>
            <div>
              <span>
                1. This legal document was drafted for and published by
                www.virtuphrama.com.au on 09/06/2020.
              </span>
              <br></br>
              <span>
                2. We control the copyright for this specific EULA Agreement,
                and you may not use this without explicit or express consent in
                accordance with the licensing provisions in our terms and
                conditions.
              </span>
              <br></br>
              <span>
                3. The current version of our terms and conditions is available
                at: www.virtupharma.com.au.
              </span>
            </div>
            <div className="row mt-2 ml-2">
              Please read this EULA carefully, as it sets out the basis upon
              which we license the Software for use.
              <br></br>
              <br></br>
              By accessing the Software online via log in credentials, you agree
              to be bound by this EULA. If you do not agree to be bound by this
              EULA, you must promptly inform us so that your access may be
              revoked. Upon revocation of the Software and providing proof of
              purchase, you will be entitled to a refund.
            </div>
            <div className="row mt-2" style={{ justifyContent: "center" }}>
              <b>OR</b>
            </div>
            <div className="row mt-2 ml-2">
              By clicking "accept agreement" when you first access the Software
              online via log in credentials provided to you, you agree to be
              bound by the provisions of this EULA. If you do not agree to be
              bound by the provisions of this EULA, you must click "reject
              agreement" during the registration process and promptly inform us
              of your intent to not use it anymore. Upon informing us of this
              and providing proof of purchase, you will be entitled to a refund.
            </div>
            <div className="row mt-2" style={{ justifyContent: "center" }}>
              <b>OR</b>
            </div>
            <div className="row mt-2 ml-2">
              Before you sign up and are provide access to the Software from and
              on our website, we will ask you to give your express agreement to
              the provisions of this EULA.
              <br></br>
              By agreeing to be bound by this EULA, you further agree that your
              employees OR any person you authorise to
            </div>

            <h2>AGREEMENT</h2>
            <ol>
              <li>
                Definitions
                <br></br>
                <span className="ml-2">
                  1.1 Except to the extent expressly provided otherwise, in this
                  EULA:
                  <br></br>
                  <span className="ml-4">
                    "Charges" means those amounts that the parties have agreed
                    in writing shall be payable by the User to the Licensor in
                    respect of this EULA;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Documentation" means the documentation for the Software
                    produced by the Licensor and delivered or made available by
                    the Licensor to the User;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Effective Date" means the date upon which the User gives
                    the User's express consent to this EULA, following the issue
                    of this EULA by the Licensor;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "EULA" means this end user licence agreement, including any
                    amendments to this end user licence agreement from time to
                    time;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Force Majeure Event" means an event, or a series of related
                    events, that is outside the reasonable control of the party
                    affected (including failures of the internet or any public
                    telecommunications network, hacker attacks, denial of
                    service attacks, virus or other malicious software attacks
                    or infections, power failures, industrial disputes affecting
                    any third party, changes to the law, disasters, explosions,
                    fires, floods, riots, terrorist attacks and wars);
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Intellectual Property Rights" means all intellectual
                    property rights wherever in the world, whether registrable
                    or unregistrable, registered or unregistered, including any
                    application or right of application for such rights and
                    these "intellectual property rights" include copyright and
                    related rights, database rights, confidential information,
                    trade secrets, know-how, business names, trade names,
                    trademarks, service marks, passing off rights, unfair
                    competition rights, patents, petty patents, utility models,
                    semi-conductor topography rights, online medical equipment,
                    diagnoses or lab instruments which may other not be
                    mentioned by are offered by us and rights in designs;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Licensor" means [[individual name] of [address]] OR
                    [[company name], a company incorporated in [Australia or
                    internationally] (registration number [registration number])
                    having its registered office at [address]] OR [[partnership
                    name], a partnership established under the laws of
                    [Australia and or International laws applicable globally]
                    having its principal place of business at [address]];
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Licensor Indemnity Event" has the meaning given to it in
                    Clause 13.1;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Maintenance Services" means the supply to the User OR
                    application to the Software OR supply to the User and
                    application to the Software of Updates and Upgrades;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Minimum Term" means in respect of this EULA, the period of
                    12 months beginning on the Effective Date
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Services" means any services that the Licensor provides to
                    the User, or has an obligation to provide to the User, under
                    this EULA;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Software" means [identify software];
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Software Defect" means a defect, error or bug in the
                    Software having [an adverse effect] OR [a material adverse
                    effect] on [the appearance, operation, functionality or
                    performance of the Software], [but excluding any defect,
                    error or bug caused by or arising as a result of:
                  </span>
                  <br></br>
                  <span className="ml-5">
                    (a) any act or omission of the User or any person authorised
                    by the User to use the Software;
                  </span>
                  <br></br>
                  <span className="ml-5">
                    (b) any use of the Software contrary to the Documentation by
                    the User or any person authorised by the User to use the
                    Software;
                  </span>
                  <br></br>
                  <span className="ml-5">
                    (c) a failure of the User to perform or observe any of its
                    obligations in this EULA; and/or
                  </span>
                  <br></br>
                  <span className="ml-5">
                    (d) an incompatibility between the Software and any other
                    system, network, application, program, hardware or software
                    not specified as compatible in the Software Specification;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Software Specification" means the specification for the
                    Software set out in the Documentation;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Source Code" means the Software code in human-readable form
                    or any part of the Software code in human-readable form,
                    including code compiled to create the Software or decompiled
                    from the Software, but excluding interpreted code comprised
                    in the Software;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Support Services" means support in relation to the use of
                    the Software and the identification and resolution of errors
                    in the Software, but shall not include the provision of
                    training services whether in relation to the Software or
                    otherwise;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Term" means [the term of this EULA, commencing in
                    accordance with Clause 3.1 and ending in accordance with
                    Clause 3.2;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Update" means a hotfix, patch or minor version update to
                    the Software;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "Upgrade" means a major version upgrade of the Software;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "User" means the person to whom the Licensor grants a right
                    to use the Software under this EULA; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    "User Indemnity Event" has the meaning given to it in Clause
                    13.3.
                  </span>
                  <br></br>
                </span>
              </li>
              <li>
                Credit
                <br></br>
                <span className="ml-2">
                  2.1 This document was created by Barrister Abdul Wahab Akram
                  for the exclusive usage of VirtuPharma.com.au
                </span>
              </li>
              <li>
                Term
                <br></br>
                <span className="ml-2">
                  3.1 This EULA shall come into force upon the Effective Date.
                </span>
                <span></span>
                <span className="ml-2">
                  3.2 This EULA shall continue in force [indefinitely] OR [until
                  [date], at the beginning of which this EULA shall terminate
                  automatically] OR [until [event], upon which this EULA shall
                  terminate automatically], subject to termination in accordance
                  with Clause 15 or any other provision of this EULA.
                </span>
                <span></span>
              </li>
              <li>
                Licence
                <span className="ml-2">
                  4.1 The Licensor hereby grants to the User from [the date of
                  supply of the Software to the User][ until [the end of the
                  Term]] a [worldwide, nonexclusive] licence to:
                  <br></br>
                  <span className="ml-4">
                    (a) Use and access the software online via licensor
                    exclusive website for a duration agreed upon a subscription
                    model or one off payment;
                  </span>
                  <br></br>
                  <span className="ml-4">(b) use a single instance o</span>
                  <br></br>
                  <span className="ml-4">
                    (c) NOT copy or other replicate the software provide access
                    to subject to the limitations and prohibitions set out and
                    referred to in this Clause 4
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  4.2 The User may not sub-license and must not purport to
                  sub-license any rights granted under Clause 4.1 without the
                  prior written consent of the Licensor.
                </span>
                <br></br>
                <span className="ml-2">OR</span>
                <br></br>
                <span className="ml-2">
                  4.2 The User may sub-license the rights granted in Clause 4.1
                  to any third party for the purposes of hosting the Software
                  and supporting the User's use of the Software in accordance
                  with this EULA only. Any such sub-licence shall automatically
                  terminate upon the termination of the licence in Clause 4.1.
                </span>
                <br></br>
                <span className="ml-2">
                  4.3 Save to the extent expressly permitted by this EULA or
                  required by applicable law on a non-excludable basis, any
                  licence granted under this Clause 4 shall be subject to the
                  following prohibitions:
                  <span className="ml-4">
                    (a) the User must not sell, resell, rent, lease, loan,
                    supply, publish, distribute or redistribute the Software;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) the User must not alter, edit or adapt the Software; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) the User must not decompile, de-obfuscate or reverse
                    engineer, or attempt to decompile, de-obfuscate or reverse
                    engineer, the Software.
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  4.4 The User shall be responsible for the security of code or
                  any intellectual property associated with the Software
                  supplied to the User under this EULA or created from such
                  access any duplicate or replications and shall use all
                  reasonable endeavours including all reasonable security
                  measures to ensure that access to the software is restricted
                  to persons authorised to use them under this EULA.
                </span>
                <br></br>
              </li>
              <li>
                Source Code
                <br></br>
                <span className="ml-2">
                  5.1 Nothing in this EULA shall give to the User or any other
                  person any right to access or use the Source Code or
                  constitute any licence of the Source Code.
                </span>
                <br></br>
              </li>
              <li>
                Maintenance Services
                <br></br>
                <span className="ml-2">
                  6.1 The Licensor shall provide the Maintenance Services to the
                  User during the Term.
                </span>
                <br></br>
                <span className="ml-2">
                  6.2 The Licensor shall provide the Maintenance Services with
                  reasonable skill and care OR in accordance with the standards
                  of skill and care reasonably expected from a leading service
                  provider in the Licensor's industry or if otherwise specified.
                </span>
                <br></br>
                <span className="ml-2">
                  6.3 The Licensor warrants to the User that the application of
                  Updates and Upgrades to the Software by the Licensor will not
                  introduce any Software Defects into the Software.
                </span>
                <br></br>
                <span className="ml-2">
                  6.4 The Licensor warrants to the User that the application of
                  Updates and Upgrades to the Software by the User in accordance
                  with the instructions of the Licensor will not introduce any
                  Software Defects into the Software.
                </span>
                <br></br>
                <span className="ml-2">
                  6.5 The Licensor may suspend the provision of the Maintenance
                  Services if any amount due to be paid by the User to the
                  Licensor under this EULA is overdue, and the Licensor has
                  given to the User at least 30 days written notice, following
                  the amount becoming overdue, of its intention to suspend the
                  Maintenance Services on this basis.
                </span>
                <br></br>
                <span className="ml-2">
                  6.6 Either party may terminate the Maintenance Services by
                  giving to the other party OR The Licensor may terminate the
                  Maintenance Services by giving to the User OR The User may
                  terminate the Maintenance Services by giving to the Licensor
                  at least 30 days written notice expiring on or at any time
                  after the first anniversary of the Effective Date.
                </span>
                <br></br>
                <span className="ml-2">
                  6.7 If the Licensor stops or makes a good faith decision to
                  stop providing maintenance services in relation to the
                  Software to its customers generally, then the Licensor may
                  terminate the Maintenance Services by giving at least 90 days
                  written notice of termination to the User.
                </span>
                <br></br>
                <span className="ml-2">
                  6.8 If the Maintenance Services are terminated in accordance
                  with the provisions of this Clause 6:
                  <br></br>
                  <span className="ml-4">
                    (a) the User must pay to the Licensor any outstanding
                    Charges in respect of Maintenance Services provided to the
                    User before the termination of the Maintenance Services;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) the Licensor must refund to the User any Charges paid by
                    the User to the Licensor in respect of Maintenance Services
                    that were to be provided to the User after the termination
                    of the Maintenance Services; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) the provisions of this Clause 6, excluding this Clause
                    6.8, shall cease to apply, but the other provisions of this
                    EULA will continue notwithstanding such termination.
                  </span>
                  <br></br>
                </span>
                <br></br>
              </li>
              <li>
                Support Services
                <br></br>
                <span className="ml-2">
                  7.1 The Licensor shall provide the Support Services to the
                  User during the Term
                </span>
                <br></br>
                <span className="ml-2">
                  7.2 The Licensor shall provide the Support Services with
                  reasonable skill and care OR in accordance with the standards
                  of skill and care reasonably expected from a leading service
                  provider in the Licensor's industry.
                </span>
                <br></br>
                <span className="ml-2">
                  7.3 The Licensor may suspend the provision of the Support
                  Services if any amount due to be paid by the User to the
                  Licensor under this EULA is overdue, and the Licensor has
                  given to the User at least 30 days written notice, following
                  the amount becoming overdue, of its intention to suspend the
                  Support Services on this basis.
                </span>
                <br></br>
                <span className="ml-2">
                  7.4 Either party may terminate the Support Services by giving
                  to the other party OR The Licensor may terminate the Support
                  Services by giving to the User OR The User may terminate the
                  Support Services by giving to the Licensor at least 30 days
                  written notice expiring on or at any time after the first
                  anniversary of the Effective Date.
                </span>
                <br></br>
                <span className="ml-2">
                  7.5 If the Support Services are terminated in accordance with
                  the provisions of this Clause 7:
                  <br></br>
                  <span className="ml-4">
                    (a) the User must pay to the Licensor any outstanding
                    Charges in respect of Support Services provided to the User
                    before the termination of the Support Services
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) the Licensor must refund to the User any Charges paid by
                    the User to the Licensor in respect of Support Services that
                    were to be provided to the User after the termination of the
                    Support Services; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) the provisions of this Clause 7, excluding this Clause
                    7.5, shall cease to apply, but the other provisions of this
                    EULA will continue notwithstanding such termination.
                  </span>
                  <br></br>
                </span>
                <br></br>
              </li>
              <li>
                No assignment of Intellectual Property Rights
                <br></br>
                <span className="ml-2">
                  8.1 Nothing in this EULA shall operate to assign or transfer
                  any Intellectual Property Rights from the Licensor to the
                  User, or from the User to the Licensor.
                </span>
                <br></br>
              </li>
              <li>
                Charges
                <br></br>
                <span className="ml-2">
                  9.1 The User shall pay the Charges to the Licensor in
                  accordance with this EULA.
                </span>
                <br></br>
                <span className="ml-2">
                  9.2 All amounts stated in or in relation to this EULA are,
                  unless the context requires otherwise, stated inclusive of any
                  applicable value added taxes OR exclusive of any applicable
                  value added taxes, which will be added to those amounts and
                  payable by the User to the Licensor.
                </span>
                <br></br>
              </li>
              <li>
                Payments
                <br></br>
                <span className="ml-2">
                  10.1 The Licensor shall issue invoices OR an invoice OR
                  receipts OR a receipt for the Charges to the User when
                  services or software is OR are purchased.
                </span>
                <br></br>
                <span className="ml-2">
                  10.2 The User must pay the Charges to the Licensor in advance
                  OR within the period of 30 days following the issue of an
                  invoice in accordance with this Clause 10 OR the receipt of an
                  invoice issued in accordance with this Clause 10
                </span>
                <br></br>
                <span className="ml-2">
                  10.3 The User must pay the Charges by debit card, credit card,
                  direct debit, bank transfer or cheque using such payment
                  details as are notified by the Licensor to the User from time
                  to time
                </span>
                <br></br>
                <span className="ml-2">
                  10.4 If the User does not pay any amount properly due to the
                  Licensor under this EULA, the Licensor may:
                  <span className="ml-4">
                    (a) charge the User interest on the overdue amount at the
                    rate of 8% per annum above the Bank Australia base rate from
                    time to time which interest will accrue daily until the date
                    of actual payment and be compounded at the end of each
                    calendar month; or
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) claim interest and statutory compensation from the User
                    pursuant to the Late Payment of Commercial Debts.
                  </span>
                  <br></br>
                </span>
                <br></br>
              </li>
              <li>
                Warranties
                <br></br>
                <span className="ml-2">
                  11.1 The Licensor warrants to the User that it has the legal
                  right and authority to enter into this EULA and to perform its
                  obligations under this EULA.
                </span>
                <br></br>
                <span className="ml-2">
                  11.2 The Licensor warrants to the User that:
                  <br></br>
                  <span className="ml-4">
                    (a) the Software as provided will conform in all material
                    respects with the Software Specification;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) the Software will be supplied free from Software Defects
                    and will remain free from Software Defects for a period of
                    at least 12 months following the continued access of the
                    Software;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) the Software will be supplied free from viruses, worms,
                    Trojan horses, ransomware, spyware, adware and other
                    malicious software programs; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (d) the Software shall incorporate security features
                    reflecting the requirements of good industry practice.
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  11.3 The Licensor warrants to the User that the Software, when
                  used by the User in accordance with this EULA, will not breach
                  any laws, statutes or regulations applicable under Australian
                  laws.
                </span>
                <br></br>
                <span className="ml-2">
                  11.4 The Licensor warrants to the User that the Software, when
                  used by the User in accordance with this EULA, will not
                  infringe the Intellectual Property Rights of any person in any
                  jurisdiction and under any applicable law.
                </span>
                <br></br>
                <span className="ml-2">
                  11.5 If the Licensor reasonably determines, or any third party
                  alleges, that the use of the Software by the User in
                  accordance with this EULA infringes any person's Intellectual
                  Property Rights, the Licensor may acting reasonably at its own
                  cost and expense:
                  <br></br>
                  <span className="ml-4">
                    (a) modify the Software in such a way that it no longer
                    infringes the relevant Intellectual Property Rights,
                    providing that any such modification must not introduce any
                    Software Defects into the Software and must not result in
                    the Software failing to conform with the Software
                    Specification; or
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) procure for the User the right to use the Software in
                    accordance with this EULA.
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  11.6 The User warrants to the Licensor that it has the legal
                  right and authority to enter into this EULA and to perform its
                  obligations under this EULA.
                </span>
                <br></br>
                <span className="ml-2">
                  11.7 All of the parties' warranties and representations in
                  respect of the subject matter of this EULA are expressly set
                  out in this EULA. To the maximum extent permitted by
                  applicable law, no other warranties or representations
                  concerning the subject matter of this EULA will be implied
                  into this EULA or any related contract.
                </span>
                <br></br>
              </li>
              <li>
                Acknowledgements and warranty limitations
                <br></br>
                <span className="ml-2">
                  12.1 The User acknowledges that complex software is never
                  wholly free from defects, errors and bugs; and subject to the
                  other provisions of this EULA, the Licensor gives no warranty
                  or repres
                </span>
                <br></br>
                <span className="ml-2">
                  12.2 The User acknowledges that complex software is never
                  entirely free from security vulnerabilities; and subject to
                  the other provisions of this EULA, the Licensor gives no
                  warranty or representation that the Software will be entirely
                  secure.
                </span>
                <br></br>
                <span className="ml-2">
                  12.3 The User acknowledges that the Software is only designed
                  to be compatible with that software specified as compatible in
                  the Software Specification; and the Licensor does not warrant
                  or represent that the Software will be compatible with any
                  other software.
                </span>
                <br></br>
                <span className="ml-2">
                  12.4 The User acknowledges that the Licensor will not provide
                  any legal, financial, accountancy or taxation advice under
                  this EULA or in relation to the Software; and, except to the
                  extent expressly provided otherwise in this EULA, the Licensor
                  does not warrant or represent that the Software or the use of
                  the Software by the User will not give rise to any legal
                  liability on the part of the User or any other person.
                </span>
                <br></br>
              </li>
              <li>
                Indemnities
                <span className="ml-2">
                  13.1 The Licensor shall indemnify and shall keep indemnified
                  the User against any and all liabilities, damages, losses,
                  costs and expenses including legal expenses and amounts
                  reasonably paid in settlement of legal claims suffered or
                  incurred by the User and arising directly or indirectly as a
                  result of any breach by the Licensor of this EULA OR a
                  "Licensor Indemnity Event"
                </span>
                <br></br>
                <span className="ml-2">
                  13.2 The User must:
                  <span className="ml-4">
                    (a) upon becoming aware of an actual or potential Licensor
                    Indemnity Event, notify the Licensor;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) provide to the Licensor all such assistance as may be
                    reasonably requested by the Licensor in relation to the
                    Licensor Indemnity Event;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) allow the Licensor the exclusive conduct of all
                    disputes, proceedings, negotiations and settlements with
                    third parties relating to the Licensor Indemnity Event; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (d) not admit liability to any third party in connection
                    with the Licensor Indemnity Event or settle any disputes or
                    proceedings involving a third party and relating to the
                    Licensor Indemnity Event without the prior written consent
                    of the Licensor, without prejudice to the Licensor's
                    obligations under Clause 13.1 OR and the Licensor's
                    obligation to indemnify the User under Clause 13.1 shall not
                    apply unless the User complies with the requirements of this
                    Clause 13.2.
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  13.3 The User shall indemnify and shall keep indemnified the
                  Licensor against any and all liabilities, damages, losses,
                  costs and expenses including legal expenses and amounts
                  reasonably paid in settlement of legal claims suffered or
                  incurred by the Licensor and arising directly or indirectly as
                  a result of any breach by the User of this EULA OR a "User
                  Indemnity Event”.
                </span>
                <br></br>
                <span className="ml-2">
                  13.4 The Licensor must
                  <br></br>
                  <span className="ml-4">
                    (a) upon becoming aware of an actual or potential User
                    Indemnity Event, notify the User;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) provide to the User all such assistance as may be
                    reasonably requested by the User in relation to the User
                    Indemnity Event;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) allow the User the exclusive conduct of all disputes,
                    proceedings, negotiations and settlements with third parties
                    relating to the User Indemnity Event; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (d) not admit liability to any third party in connection
                    with the User Indemnity Event or settle any disputes or
                    proceedings involving a third party and relating to the User
                    Indemnity Event without the prior written consent of the
                    User,
                  </span>
                  <br></br>
                  without prejudice to the User's obligations under Clause 13.3
                  OR and the User's obligation to indemnify the Licensor under
                  Clause 13.3 shall not apply unless the Licensor complies with
                  the requirements of this Clause 13.4.
                </span>
                <br></br>
                <span className="ml-2">
                  13.5 The indemnity protection set out in this Clause 13 shall
                  OR shall not be subject to the limitations and exclusions of
                  liability set out in this EULA.
                </span>
                <br></br>
              </li>
              <li>
                Limitations and exclusions of liability
                <br></br>
                <span className="ml-2">
                  14.1 Nothing in this EULA will:
                  <br></br>
                  <span className="ml-4">(a) limit or exclude</span>
                  <br></br>
                  <span className="ml-4">
                    (b) limit or exclude any liability for fraud or fraudulent
                    misrepresentation;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) limit any liabilities in any way that is not permitted
                    under applicable law; or
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (d) exclude any liabilities that may not be excluded under
                    applicable law, and, if a party is a consumer, that party's
                    statutory rights will not be excluded or limited by this
                    EULA, except to the extent permitted by law.
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  14.2 The limitations and exclusions of liability set out in
                  this Clause 14 and elsewhere in this EULA:
                  <br></br>
                  <span className="ml-4">
                    (a) are subject to Clause 14.1; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) govern all liabilities arising under this EULA or
                    relating to the subject matter of this EULA, including
                    liabilities arising in contract, in tort (including
                    negligence) and for breach of statutory duty, except to the
                    extent expressly provided otherwise in this EULA.
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  14.3 The Licensor will not be liable to the User in respect of
                  any losses arising out of a Force Majeure Event.
                </span>
                <br></br>
                <span className="ml-2">
                  14.4 The Licensor will not be liable to the User in respect of
                  any loss of profits or anticipated savings.
                </span>
                <br></br>
                <span className="ml-2">
                  14.5 The Licensor will not be liable to the User in respect of
                  any loss of revenue or income.
                </span>
                <br></br>
                <span className="ml-2">
                  14.6 The Licensor will not be liable to the User in respect of
                  any loss of business, contracts or opportunities.
                </span>
                <br></br>
                <span className="ml-2">
                  14.7 The Licensor will not be liable to the User in respect of
                  any loss or corruption of any data, database or software.
                </span>
                <br></br>
                <span className="ml-2">
                  14.8 The Licensor will not be liable to the User in respect of
                  any special, indirect or consequential loss or damage.
                </span>
                <br></br>
                <span className="ml-2">
                  14.9 The liability of the Licensor to the User under this EULA
                  in respect of any event or series of related events shall not
                  exceed the greater of:
                  <br></br>
                  <span className="ml-4">(a) $10,000; and</span>
                  <br></br>
                  <span className="ml-4">
                    (b) the total amount paid and payable by the User to the
                    Licensor under this EULA in the 12 month period preceding
                    the commencement of the event or events.
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  14.10 The aggregate liability of the Licensor to the User
                  under this EULA shall not exceed the greater of:
                  <br></br>
                  <span className="ml-4">(a) $10,000; and</span>
                  <br></br>
                  <span className="ml-4">
                    (b) the total amount paid and payable by the User to the
                    Licensor under this EULA.
                  </span>
                  <br></br>
                </span>
                <br></br>
              </li>
              <li>
                Termination
                <br></br>
                <span className="ml-2">
                  15.1 The Licensor may terminate this EULA by giving to the
                  User not less than 30 days written notice of termination,
                  expiring at the end of any calendar month OR after the end of
                  the Minimum Term.
                </span>
                <br></br>
                <span className="ml-2">
                  15.2 The User may terminate this EULA by giving to the
                  Licensor not less than 30 days written notice of termination,
                  expiring at the end of any calendar month OR after the end of
                  the Minimum Term.
                </span>
                <br></br>
                <span className="ml-2">
                  15.3 Either party may terminate this EULA immediately by
                  giving written notice of termination to the other party if:
                  <br></br>
                  <span className="ml-4">
                    (a) the other party commits any breach OR material breach of
                    this EULA, and the breach is not remediable;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) the other party commits a breach OR material breach of
                    this EULA, and the breach is remediable but the other party
                    fails to remedy the breach within the period of 30 days
                    following the giving of a writt
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) the other party persistently breaches this EULA
                    irrespective of whether such breaches collectively
                    constitute a material breach.
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  15.4 Either party may terminate this EULA immediately by
                  giving written notice of termination to the other party if:
                  <br></br>
                  <span className="ml-4">
                    (a) the other party:
                    <br></br>
                    (i) is dissolved;
                    <br></br>
                    (ii) ceases to conduct all or substantially all of its
                    business;<br></br>
                    (iii) is or becomes unable to pay its debts as they fall
                    due;
                    <br></br>
                    (iv) is or becomes insolvent or is declared insolvent; or
                    <br></br>
                    (v) convenes a meeting or makes or proposes to make any
                    arrangement or composition with its creditors;<br></br>
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) an administrator, administrative receiver, liquidator,
                    receiver, trustee, manager or similar is appointed over any
                    of the assets of the other party;
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (c) an order is made for the winding up of the other party,
                    or the other party passes a resolution for its winding up
                    other than for the purpose of a solvent company
                    reorganisation where the resulting entity will assume all
                    the obligations of the other party under this EULA; or
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (d) if that other party is an individual:
                    <br></br>
                    (i) that other party dies;<br></br>
                    (ii) as a result of illness or incapacity, that other party
                    becomes incapable of managing his or her own affairs; or
                    <br></br>
                    (iii) that other party is the subject of a bankruptcy
                    petition or order.]
                  </span>
                  <br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  15.5 The Licensor may terminate this EULA immediately by
                  giving written notice to the User if:
                  <br></br>
                  <span className="ml-4">
                    (a) any amount due to be paid by the User to the Licensor
                    under this EULA is unpaid by the due date and remains unpaid
                    upon the date that that written notice of termination is
                    given; and
                  </span>
                  <br></br>
                  <span className="ml-4">
                    (b) the Licensor has given to the User at least 30 days
                    written notice, following the failure to pay, of its
                    intention to terminate this EULA in accordance with this
                    Clause 15.5.
                  </span>
                  <br></br>
                </span>
                <br></br>
              </li>
              <li>
                Effects of termination
                <br></br>
                <span className="ml-2">
                  16.1 Upon the termination of this EULA, all of the provisions
                  of this EULA shall cease to have effect, save that the
                  following provisions of this EULA shall survive and continue
                  to have effect in accordance with their express terms or
                  otherwise indefinitely: Clauses 1, 4.1, 10.2, 10.4, 13, 14,
                  16, 17 and 18.
                </span>
                <br></br>
                <span className="ml-2">
                  16.2 Except to the extent that this EULA expressly provides
                  otherwise, the termination of this EULA shall not affect the
                  accrued rights of either party.
                </span>
                <br></br>
                <span className="ml-2">
                  16.3 Within [30 days] following the termination of this EULA
                  for any reason
                  <br></br>
                  (a) the User must pay to the Licensor any Charges in respect
                  of Services provided to the User before the termination of
                  this EULA and in respect of licences in effect before the
                  termination of this EULA; and
                  <br></br>
                  (b) the Licensor must refund to the User any Charges paid by
                  the User to the Licensor in respect of Services that were to
                  be but are not provided to the User after the termination of
                  this EULA and in respect of licences that were to be but are
                  not in effect after the termination of this EULA, without
                  prejudice to the parties' other legal rights<br></br>
                </span>
                <br></br>
                <span className="ml-2">
                  16.4 For the avoidance of doubt, the licences of the Software
                  in this EULA shall terminate upon the termination of this
                  EULA; and, accordingly, the User must immediately cease to use
                  the Software upon the termination of this EULA.
                </span>
                <br></br>
                <span className="ml-2">
                  16.5 Within 10 Business Days following the termination of this
                  EULA, the User must:
                  <br></br>
                    (a) return to the Licensor or dispose of as the Licensor may
                    instruct all media in its possession or control containing
                    the Software or any and all aspects associated with the
                    software in any manner whatsoever; and
                 
                </span>
                <br></br>
              </li>
              <li>
                General
                <br></br>
                <span className="ml-2">
                  17.1 No breach of any provision of this EULA shall be waived
                  except with the express written consent of the party not in
                  breach.
                </span>
                <br></br>
                <span className="ml-2">
                  17.2 If any provision of this EULA is determined by any court
                  or other competent authority to be unlawful and/or
                  unenforceable, the other provisions of this EULA will continue
                  in effect. If any unlawful and/or unenforceable provision
                  would be lawful or enforceable if part of it were deleted,
                  that part will be deemed to be deleted, and the rest of the
                  provision will continue in effect (unless that would
                  contradict the clear intention of the parties, in which case
                  the entirety of the relevant provision will be deemed to be
                  deleted).
                </span>
                <br></br>
                <span className="ml-2">
                  17.3 This EULA may not be varied except by a written document
                  signed by or on behalf of each of the parties.
                </span>
                <br></br>
                <span className="ml-2">
                  17.4 The User hereby agrees that the Licensor may assign the
                  Licensor's contractual rights and obligations under this EULA
                  to any successor to all or a substantial part of the business
                  of the Licensor from time to time OR any third party. The User
                  must not without the prior written consent of the Licensor
                  assign, transfer or otherwise deal with any of the User's
                  contractual rights or obligations under this EULA.
                </span>
                <br></br>
                <span className="ml-2">
                  17.5 This EULA is made for the benefit of the parties, and is
                  not intended to benefit any third party or be enforceable by
                  any third party. The rights of the parties to terminate,
                  rescind, or agree any amendment, waiver, variation or
                  settlement under or relating to this EULA are not subject to
                  the consent of any third party
                </span>
                <br></br>
                <span className="ml-2">
                  17.6 Subject to Clause 14.1, this EULA shall constitute the
                  entire agreement between the parties in relation to the
                  subject matter of this EULA, and shall supersede all previous
                  agreements, arrangements and understandings between the
                  parties in respect of that subject matter.
                </span>
                <br></br>
                <span className="ml-2">
                  17.7 This EULA shall be governed by and construed in
                  accordance with Australian laws
                </span>
                <br></br>
                <span className="ml-2">
                  17.8 The courts of Australia shall have exclusive jurisdiction
                  to adjudicate any dispute arising under or in connection with
                  this EULA.
                </span>
                <br></br>
              </li>
              <li>
                Interpretation
                <br></br>
                <span className="ml-2">
                  18.1 In this EULA, a reference to a statute or statutory
                  provision includes a reference to:<br></br>
                  (a) that statute or statutory provision as modified,
                  consolidated and/or reenacted from time to time; and<br></br>
                  (b) any subordinate legislation made under that statute or
                  statutory provision.
                </span>
                <br></br>
                <span className="ml-2">
                  18.2 The Clause headings do not affect the interpretation of
                  this EULA.
                </span>
                <br></br>
                <span className="ml-2">
                  18.3 References in this EULA to "calendar months" are to the
                  12 named periods (January, February and so on) into which a
                  year is divided.
                </span>
                <br></br>
                <span className="ml-2">
                  18.4 In this EULA, general words shall not be given a
                  restrictive interpretation by reason of being preceded or
                  followed by words indicating a particular class of acts,
                  matters or things.
                </span>
                <br></br>
              </li>
            </ol>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EULA;
