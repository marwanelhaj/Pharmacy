import React from "react";

const TermsAndConditions = (props) => {
  return (
    <div
      className="modal fade show"
      id="comply_modal"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        {/* <h3>Terms And Conditions</h3> */}
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
            <ul>
              <li>
                1. About the Website
                <ul>
                  <li>
                    1.1. Welcome to www.virtupharma.com.au (the 'Website'). The
                    Website provides interactive training and education in
                    cloud-based science labs (the 'Services').
                  </li>
                  <li>
                    1.2. The Website is operated by VirtuPharma PTY. LTD. (ABN
                    37626248208). Access to and use of the Website, or any of
                    its associated Products or Services, is provided by
                    VirtuPharma. Please read these terms and conditions (the
                    'Terms') carefully. By using, browsing and/or reading the
                    Website, this signifies that you have read, understood and
                    agree to be bound by the Terms. If you do not agree with the
                    Terms, you must cease usage of the Website, or any of
                    Services, immediately.
                  </li>
                  <li>
                    1.3. VirtuPharma reserves the right to review and change any
                    of the Terms by updating this page at its sole discretion.
                    When VirtuPharma updates the Terms, it will use reasonable
                    endeavours to provide you with notice of updates to the
                    Terms. Any changes to the Terms take immediate effect from
                    the date of their publication. Before you continue, we
                    recommend you keep a copy of the Terms for your records.
                  </li>
                </ul>
              </li>
              <li>
                2. Acceptance of the Terms<br></br>
                You accept the Terms by remaining on the Website. You may also
                accept the Terms by clicking to accept or agree to the Terms
                where this option is made available to you by VirtuPharma in the
                user interface.
              </li>
              <li>
                3. Subscription to use the Services
                <ul>
                  <li>
                    3.1. In order to access the Services, you must first
                    purchase a subscription through the Website (the
                    'Subscription') and pay the applicable fee for the selected
                    Subscription (the 'Subscription Fee').
                  </li>
                  <li>
                    3.2. In purchasing the Subscription, you acknowledge and
                    agree that it is your responsibility to ensure that the
                    Subscription you elect to purchase is suitable for your use.
                  </li>
                  <li>
                    3.3. Once you have purchased the Subscription, you will then
                    be required to register for an account through the Website
                    before you can access the Services (the 'Account)'.
                  </li>
                  <li>
                    3.4. As part of the registration process, or as part of your
                    continued use of the Services, you may be required to
                    provide personal information about yourself (such as
                    identification or contact details), including:
                    <br></br>
                    (a) Email address<br></br>
                    (b) Preferred username
                  </li>
                  <li>
                    3.5. You warrant that any information you give to
                    VirtuPharma in the course of completing the registration
                    process will always be accurate, correct and up to date.
                    3.6. Once you have completed the registration process, you
                    will be a registered member of the Website ('Member') and
                    agree to be bound by the Terms.
                    <br></br>
                    As a Member, you will be granted immediate access to the
                    Services from the time you have completed the registration
                    process until the subscription period expires (the
                    'Subscription Period').
                  </li>
                  <li>
                    3.7. You may not use the Services and may not accept the
                    Terms if:
                    <br></br>
                    (a) you are not of legal age to form a binding contract with
                    VirtuPharma; or
                    <br></br>
                    (b) you are a person barred from receiving the Services
                    under the laws of Australia or other countries including the
                    country in which you are resident or from which you use the
                    Services.
                  </li>
                </ul>
              </li>
              <li>
                4. Your obligations as a Member
                <ul>
                  <li>
                    4.1. As a Member, you agree to comply with the following:
                    <br></br>
                    (a) you will use the Services only for purposes that are
                    permitted by: (i) the Terms; and (ii) any applicable law,
                    regulation or generally accepted practices or guidelines in
                    the relevant jurisdictions
                    <br></br>
                    (b) you have the sole responsibility for protecting the
                    confidentiality of your password and/or email address. Use
                    of your password by any other person may result in the
                    immediate cancellation of the Services;
                    <br></br>
                    (c) any use of your registration information by any other
                    person, or third parties, is strictly prohibited. You agree
                    to immediately notify VirtuPharma of any unauthorized use of
                    your password or email address or any breach of security of
                    which you have become aware;
                    <br></br>
                    (d) access and use of the Website is limited,
                    non-transferable and allows for the sole use of the Website
                    by you for the purposes of VirtuPharma providing the
                    Services
                    <br></br>
                    (e) you will not use the Services or the Website in
                    connection with any commercial endeavours except those that
                    are specifically endorsed or approved by the management of
                    VirtuPharma
                    <br></br>
                    (f) you will not use the Services or Website for any illegal
                    and/or unauthorized use which includes collecting email
                    addresses of Members by electronic or other means for the
                    purpose of sending unsolicited email or unauthorized framing
                    of or linking to the Website
                    <br></br>
                    (g) you agree that commercial advertisements, affiliate
                    links, and other forms of solicitation may be removed from
                    the Website without notice and may result in termination of
                    the Services. Appropriate legal action will be taken by
                    VirtuPharma for any illegal or unauthorized use of the
                    Website;
                    <br></br>
                    (h) you acknowledge and agree that any automated use of the
                    Website or its Services is prohibited.
                  </li>
                </ul>
              </li>
              <li>
                5. Payment
                <ul>
                  <li>
                    5.1. Where the option is given to you, you may make payment
                    of the Subscription Fee by way of:<br></br>
                    (a) Credit Card Payment ('Credit Card')
                    <br></br>
                    (b) PayPal ('PayPal')
                  </li>
                  <li>
                    5.2. All payments made in the course of your use of the
                    Services are made using Stripe. In using the Website, the
                    Services or when making any payment in relation to your use
                    of the Services, you warrant that you have read, understood
                    and agree to be bound by the Stripe terms and conditions
                    which are available on their website.
                  </li>
                  <li>
                    5.3. You acknowledge and agree that where a request for the
                    payment of the Subscription Fee is returned or denied, for
                    whatever reason, by your financial institution or is unpaid
                    by you for any other reason, then you are liable for any
                    costs, including banking fees and charges, associated with
                    the Subscription Fee.
                  </li>
                  <li>
                    5.4. You agree and acknowledge that VirtuPharma can vary the
                    Subscription Fee at any time and that the varied
                    Subscription Fee will come into effect following the
                    conclusion of the existing Subscription Period.
                  </li>
                </ul>
              </li>
              <li>
                6. Refund Policy
                <br></br>
                VirtuPharma will only provide you with a refund of the
                Subscription Fee in the event they are unable to continue to
                provide the Services or if the manager of VirtuPharma makes a
                decision, at its absolute discretion, that it is reasonable to
                do so under the circumstances. Where this occurs, the refund
                will be in the proportional amount of the Subscription Fee that
                remains unused by the Member (the 'Refund').
              </li>
              <li>
                7. Copyright and Intellectual Property
                <ul>
                  <li>
                    7.1. The Website, the Services and all of the related
                    products of VirtuPharma are subject to copyright. The
                    material on the Website is protected by copyright under the
                    laws of Australia and through international treaties. Unless
                    otherwise indicated, all rights (including copyright) in the
                    Services and compilation of the Website (including but not
                    limited to text, graphics, logos, button icons, video
                    images, audio clips, Website, code, scripts, design
                    elements, and interactive features) or the Services are
                    owned or controlled for these purposes and are reserved by
                    VirtuPharma or its contributors.
                  </li>
                  <li>
                    7.2. All trademarks, service marks and trade names are
                    owned, registered and/or licensed by VirtuPharma, who grants
                    to you a worldwide, non-exclusive, royalty-free, revocable
                    license whilst you are a Member to:
                    <br></br>
                    (a) use the Website pursuant to the Terms;
                    <br></br>
                    (b) copy and store the Website and the material contained in
                    the Website in your device's cache memory, and
                    <br></br>
                    (c) print pages from the Website for your own personal and
                    non-commercial use.
                    <br></br>
                    VirtuPharma does not grant you any other rights whatsoever
                    in relation to the Website or the Services. All other rights
                    are expressly reserved by VirtuPharma.
                  </li>
                  <li>
                    7.3. VirtuPharma retains all rights, title, and interest in
                    and to the Website and all related Services. Nothing you do
                    on or in relation to the Website will transfer any:
                    <br></br>
                    (a) business name, trading name, domain name, trademark,
                    industrial design, patent, registered design or copyright,
                    or
                    <br></br>
                    (b) a right to use or exploit a business name, trading name,
                    domain name, trademark or industrial design, or
                    <br></br>
                    (c) a thing, system or process that is the subject of a
                    patent, registered design or copyright (or an adaptation or
                    modification of such a thing, system or process), to you.
                  </li>
                  <li>
                    7.4. You may not, without the prior written permission of
                    VirtuPharma and the permission of any other relevant rights
                    owners: broadcast, republish, up-load to a third party,
                    transmit, post, distribute, show or play in public, adapt or
                    change in any way the Services or third party Services for
                    any purpose, unless otherwise provided by these Terms. This
                    prohibition does not extend to materials on the Website,
                    which are freely available for re-use or are in the public
                    domain.
                  </li>
                </ul>
              </li>
              <li>
                8. Privacy
                <ul>
                  <li>
                    8.1. VirtuPharma takes your privacy seriously and any
                    information provided through your use of the Website and/or
                    Services are subject to VirtuPharma's Privacy Policy, which
                    is available on the Website.
                  </li>
                </ul>
              </li>
              <li>
                9. General Disclaimer;
                <ul>
                  <li>
                    9.1. Nothing in the Terms limits or excludes any guarantees,
                    warranties, representations or conditions implied or imposed
                    by law, including the Australian Consumer Law (or any
                    liability under them) which by law may not be limited or
                    excluded.
                  </li>
                  <li>
                    9.2. Subject to this clause, and to the extent permitted by
                    law:
                    <br></br>
                    (a) all terms, guarantees, warranties, representations or
                    conditions which are not expressly stated in the Terms are
                    excluded; and
                    <br></br>
                    (b) VirtuPharma will not be liable for any special, indirect
                    or consequential loss or damage (unless such loss or damage
                    is reasonably foreseeable resulting from our failure to meet
                    an applicable Consumer Guarantee), loss of profit or
                    opportunity, or damage to goodwill arising out of or in
                    connection with the Services or these Terms (including as a
                    result of not being able to use the Services or the late
                    supply of the Services), whether at common law, under
                    contract, tort (including negligence), in equity, pursuant
                    to statute or otherwise.
                  </li>
                  <li>
                    9.3. Use of the Website and the Services is at your own
                    risk. Everything on the Website and the Services is provided
                    to you "as is" and "as available" without warranty or
                    condition of any kind. None of the affiliates, directors,
                    officers, employees, agents, contributors and licensors of
                    VirtuPharma make any express or implied representation or
                    warranty about the Services or any products or Services
                    (including the products or Services of VirtuPharma) referred
                    to on the Website. includes (but is not restricted to) loss
                    or damage you might suffer as a result of any of the
                    following:
                    <br></br>
                    (a) failure of performance, error, omission, interruption,
                    deletion, defect, failure to correct defects, delay in
                    operation or transmission, computer virus or other harmful
                    component, loss of data, communication line failure,
                    unlawful thirdparty conduct, or theft, destruction,
                    alteration or unauthorized access to records;
                    <br></br>
                    (b) the accuracy, suitability or currency of any information
                    on the Website, the Services, or any of its Services related
                    products (including third party material and advertisements
                    on the Website)
                    <br></br>
                    (c) costs incurred as a result of you using the Website, the
                    Services or any of the products of VirtuPharma; and
                    <br></br>
                    (d) the Services or operation in respect to links that are
                    provided for your convenience.
                  </li>
                </ul>
              </li>
              <li>
                10. Limitation of liability
                <ul>
                  <li>
                    10.1. VirtuPharma's total liability arising out of or in
                    connection with the Services or these Terms, however
                    arising, including under contract, tort (including
                    negligence), in equity, under statute or otherwise, will not
                    exceed the resupply of the Services to you.
                  </li>
                  <li>
                    10.2. You expressly understand and agree that VirtuPharma,
                    its affiliates, employees, agents, contributors, and
                    licensors shall not be liable to you for any direct,
                    indirect, incidental, special consequential or exemplary
                    damages which may be incurred by you, however caused and
                    under any theory of liability. This shall include, but is
                    not limited to, any loss of profit (whether incurred
                    directly or indirectly), any loss of goodwill or business
                    reputation and any other intangible loss.
                  </li>
                </ul>
              </li>
              <li>
                11. Termination of Contract
                <ul>
                  <li>
                    11.1. The Terms will continue to apply until terminated by
                    either you or by VirtuPharma as set out below.
                  </li>
                  <li>
                    11.2. If you want to terminate the Terms, you may do so by:
                    <br></br>
                    (a) not renewing the Subscription prior to the end of the
                    Subscription Period;
                    <br></br>
                    (b) providing VirtuPharma with 14 days days' notice of your
                    intention to terminate; and
                    <br></br>
                    (c) closing your accounts for all of the services which you
                    use, where VirtuPharma has made this option available to
                    you.
                    <br></br>
                    Your notice should be sent, in writing, to VirtuPharma via
                    the 'Contact Us' link on our homepage.
                  </li>
                  <li>
                    11.3.VirtuPharma may at any time, terminate the Terms with
                    you if:
                    <br></br>
                    (a) you do not renew the Subscription at the end of the
                    Subscription Period;
                    <br></br>
                    (b) you have breached any provision of the Terms or intend
                    to breach any provision;
                    <br></br>
                    (c) VirtuPharma is required to do so by law;
                    <br></br>
                    (d) the provision of the Services to you by VirtuPharma is,
                    in the opinion of VirtuPharma, no longer commercially
                    viable.
                    <br></br>
                  </li>
                  <li>
                    11.4. Subject to local applicable laws, VirtuPharma reserves
                    the right to discontinue or cancel your membership at any
                    time and may suspend or deny, in its sole discretion, your
                    access to all or any portion of the Website or the Services
                    without notice if you breach any provision of the Terms or
                    any applicable law or if your conduct impacts VirtuPharma's
                    name or reputation or violates the rights of those of
                    another party.
                  </li>
                </ul>
              </li>
              <li>
                12. Indemnity
                <ul>
                  <li>
                    12.1. You agree to indemnify VirtuPharma, its affiliates,
                    employees, agents, contributors, third party content
                    providers and licensors from and against:
                    <br></br>
                    (a) all actions, suits, claims, demands, liabilities, costs,
                    expenses, loss and damage (including legal fees on a full
                    indemnity basis) incurred, suffered or arising out of or in
                    connection with Your Content;
                    <br></br>
                    (b) any direct or indirect consequences of you accessing,
                    using or transacting on the Website or attempts to do so;
                    and/or
                    <br></br>
                    (c) any breach of the Terms.
                  </li>
                </ul>
              </li>
              <li>
                13. Dispute Resolution
                <ul>
                  <li>
                    13.1. Compulsory: If a dispute arises out of or relates to
                    the Terms, either party may not commence any Tribunal or
                    Court proceedings in relation to the dispute, unless the
                    following clauses have been complied with (except where
                    urgent interlocutory relief is sought).
                  </li>
                  <li>
                    13.2. Notice: A party to the Terms claiming a dispute
                    ('Dispute') has arisen under the Terms, must give written
                    notice to the other party detailing the nature of the
                    dispute, the desired outcome and the action required to
                    settle the Dispute.
                  </li>
                  <li>
                    13.3. Resolution: On receipt of that notice ('Notice') by
                    that other party, the parties to the Terms ('Parties') must:
                    <br></br>
                    (a) Within 14 days days of the Notice endeavour in good
                    faith to resolve the Dispute expeditiously by negotiation or
                    such other means upon which they may mutually agree;
                    <br></br>
                    (b) If for any reason whatsoever, 14 days days after the
                    date of the Notice, the Dispute has not been resolved, the
                    Parties must either agree upon selection of a mediator or
                    request that an appropriate mediator be appointed by the
                    President of the Australian Mediation Association or his or
                    her nominee;
                    <br></br>
                    (c) The Parties are equally liable for the fees and
                    reasonable expenses of a mediator and the cost of the venue
                    of the mediation and without limiting the foregoing
                    undertake to pay any amounts requested by the mediator as a
                    pre-condition to the mediation commencing. The Parties must
                    each pay their own costs associated with the mediation;
                    <br></br>
                    (d) The mediation will be held in NSW, Australia.
                    <br></br>
                  </li>
                  <li>
                    13.4. Confidential: All communications concerning
                    negotiations made by the Parties arising out of and in
                    connection with this dispute resolution clause are
                    confidential and to the extent possible, must be treated as
                    "without prejudice" negotiations for the purpose of
                    applicable laws of evidence.
                  </li>
                  <li>
                    13.5. Termination of Mediation: If 2 weeks have elapsed
                    after the start of a mediation of the Dispute and the
                    Dispute has not been resolved, either Party may ask the
                    mediator to terminate the mediation and the mediator must do
                    so
                  </li>
                </ul>
              </li>
              <li>
                14. Venue and Jurisdiction
                <br></br>
                The Services offered by VirtuPharma is intended to be viewed by
                residents of Australia. In the event of any dispute arising out
                of or in relation to the Website, you agree that the exclusive
                venue for resolving any dispute shall be in the courts of New
                South Wales, Australia.
              </li>
              <li>
                15. Governing Law
                <br></br>
                The Terms are governed by the laws of New South Wales,
                Australia. Any dispute, controversy, proceeding or claim of
                whatever nature arising out of or in any way relating to the
                Terms and the rights created hereby shall be governed,
                interpreted and construed by, under and pursuant to the laws of
                New South Wales, Australia, without reference to conflict of law
                principles, notwithstanding mandatory rules. The validity of
                this governing law clause is not contested. The Terms shall be
                binding to the benefit of the parties hereto and their
                successors and assigns.
              </li>
              <li>
                16. Independent Legal Advice
                <br></br>
                Both parties confirm and declare that the provisions of the
                Terms are fair and reasonable and both parties having taken the
                opportunity to obtain independent legal advice and declare the
                Terms are not against public policy on the grounds of inequality
                or bargaining power or general grounds of restraint of trade.
              </li>
              <li>
                17. Severance
                <br></br>
                If any part of these Terms is found to be void or unenforceable
                by a Court of competent jurisdiction, that part shall be severed
                and the rest of the Terms shall remain in force.
              </li>
            </ul>

            <div>
              <p className="mb-0">Approved by</p>
              <p className="mb-0">Company Name: VirtuPharma PTY LTD</p>
              <p className="mb-0">Date: 11/11/2019</p>
            </div>
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

export default TermsAndConditions;
