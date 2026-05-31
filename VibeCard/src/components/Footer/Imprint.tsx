import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Imprint = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="lg:container mx-auto lg:mt-32 mt-24 lg:px-6 px-3 text-white">
        {i18n.language === "de" ? (
          <div>
            <h1 className="font-bold lg:text-3xl text-2xl mb-2">Impressum</h1>
            <h2 className="font-bold text-lg my-2">Angaben gemäß §5 TMG:</h2>
            <p className="font-poppins leading-relaxed">
              VibeCard
              <br />
              Irenenstraße 66
              <br />
              40468 Düsseldorf
            </p>
            <h3>Vertreten durch:</h3>
            <p className="font-poppins leading-relaxed">
              Omar Awel und Sitra Amdehun
            </p>
            <h3>Kontakt:</h3>
            <p className="font-poppins leading-relaxed">
              Telefon: <a href="tel:015906467215">0159 06467215</a>
              <br />
              E-Mail:{" "}
              <a href="mailto:kontakt@vibecard.de">kontakt@vibecard.de</a>
            </p>
            <h3>Inhaltlich verantwortlich gemäß § 55 Abs. 2 RStV:</h3>
            <p className="font-poppins leading-relaxed">
              Omar Awel und Sitra Amdehun
              <br />
              Irenenstraße 66
              <br />
              40468 Düsseldorf
            </p>
            <h2 className="font-bold text-xl my-2">Haftungsausschluss:</h2>
            <h3>Haftung für Inhalte</h3>
            <p className="font-poppins leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.{" "}
            </p>
            <h3>Haftung für Links</h3>
            <p className="font-poppins leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            <h3>Urheberrecht</h3>
            <p className="font-poppins leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>
            <h3>Streitbeilegung</h3>
            <p className="font-poppins leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank">
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              <br />
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
            <h2 className="font-bold text-xl my-2">Datenschutzerklärung</h2>
            <p className="font-poppins leading-relaxed">
              Um Ihre Rechte auszuüben, können Sie sich über die angegebenen
              Kontaktdaten an uns wenden.{" "}
            </p>
            <h3>7. Sicherheit</h3>
            <p className="font-poppins leading-relaxed">
              Wir treffen technische und organisatorische Maßnahmen, um Ihre
              Daten vor unberechtigtem Zugriff und Missbrauch zu schützen. Eine
              absolute Sicherheit kann jedoch nicht garantiert werden.
            </p>
            <h3>8. Änderungen der Datenschutzerklärung</h3>
            <p className="font-poppins leading-relaxed">
              Wir behalten uns das Recht vor, diese Datenschutzerklärung zu
              ändern. Die jeweils aktuelle Version wird auf unserer Website
              veröffentlicht.
            </p>
            <h3>9. Kontakt</h3>
            <p className="font-poppins leading-relaxed">
              Bei Fragen oder Anliegen zum Datenschutz können Sie uns jederzeit
              unter den angegebenen Kontaktdaten kontaktieren.
            </p>
            <h2 className="font-bold text-xl my-2">Widerrufsbelehrung</h2>
            <h3>Widerrufsrecht</h3>
            <p className="font-poppins leading-relaxed">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
              Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,
              der nicht der Beförderer ist, die Waren in Besitz genommen haben
              bzw. hat.{" "}
            </p>
            <p className="font-poppins leading-relaxed">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (VibeCard, Neustr.
              21, 40468 Düsseldorf, E-Mail:{" "}
              <a href="mailto:info@vibecard.de">info@vibecard.de</a>, Telefon:{" "}
              <a href="tel:015906467215">0159 06467215</a>) mittels einer
              eindeutigen Erklärung (z. B. ein mit der Post versandter Brief
              oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen,
              informieren.
            </p>
            <h3>Wer trägt die Kosten?</h3>
            <p className="font-poppins leading-relaxed">
              Die Kosten der Rücksendung trägt der Käufer.
            </p>
            <h3>Wann kann der Kunde mit einer Rückerstattung rechnen?</h3>
            <p className="font-poppins leading-relaxed">
              Eine Rückerstattung erfolgt innerhalb von 14 Tagen nach Erhalt der
              Rücksendung in Form einer Rückerstattung der ursprünglich
              gewählten Zahlungsmethode.{" "}
            </p>
            <h3>Folgen des Widerrufs</h3>
            <p className="font-poppins leading-relaxed">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
              Zahlungen, die wir von Ihnen erhalten haben, einschließlich der
              Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
              daraus ergeben, dass Sie eine andere Art der Lieferung als die von
              uns angebotene, günstigste Standardlieferung gewählt haben),
              unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
              Vertrags bei uns eingegangen ist. Wir können die Rückzahlung
              verweigern, bis wir die Waren wieder zurückerhalten haben. Die
              Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von
              vierzehn Tagen absenden.
            </p>
            <p className="font-poppins leading-relaxed">
              Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Sie
              müssen für einen etwaigen Wertverlust der Waren nur aufkommen,
              wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit,
              Eigenschaften und Funktionsweise der Waren nicht notwendigen
              Umgang mit ihnen zurückzuführen ist. Wir akzeptieren nur
              Rücksendungen in einwandfreiem und unbenutztem Zustand.{" "}
            </p>
            <h2 className="font-bold text-xl my-2">
              Allgemeine Geschäftsbedingungen (AGB)
            </h2>
            <h3>1. Geltungsbereich</h3>
            <p className="font-poppins leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge,
              die zwischen VibeCard (nachfolgend „Anbieter“) und dem Kunden
              (nachfolgend „Kunde“) über die Website{" "}
              <a href="http://www.vibecard.de">www.vibecard.de</a> (nachfolgend
              „Website“) geschlossen werden.
            </p>
            <h3>2. Vertragspartner</h3>
            <p className="font-poppins leading-relaxed">
              Der Vertrag kommt zustande mit:
            </p>
            <p className="font-poppins leading-relaxed">
              VibeCard
              <br />
              Irenenstraße 66
              <br />
              40468 Düsseldorf
              <br />
              Deutschland
              <br />
              E-Mail:{" "}
              <a href="mailto:kontakt@vibecard.de">kontakt@vibecard.de</a>
            </p>
            <h3>3. Vertragsschluss</h3>
            <p className="font-poppins leading-relaxed">
              Die Darstellung der NFC-Visitenkarten auf der Website stellt kein
              rechtlich verbindliches Angebot, sondern eine Aufforderung zur
              Abgabe eines Angebots dar. Mit dem Absenden der Bestellung gibt
              der Kunde ein verbindliches Angebot zum Abschluss eines
              Kaufvertrages ab. Der Anbieter bestätigt den Eingang der
              Bestellung per E-Mail. Der Vertrag kommt erst mit der Auslieferung
              der NFC-Visitenkarte zustande.
            </p>
            <h3>4. Preise und Zahlungsbedingungen</h3>
            <p className="font-poppins leading-relaxed">
              Die angegebenen Preise sind Endpreise und enthalten die
              gesetzliche Mehrwertsteuer. Die Zahlung kann per Kreditkarte,
              PayPal oder Banküberweisung erfolgen. Der Kunde verpflichtet sich,
              die Zahlung innerhalb von 14 Tagen nach Erhalt der Rechnung zu
              leisten.
            </p>
            <h3>5. Lieferung</h3>
            <p className="font-poppins leading-relaxed">
              Die Lieferung erfolgt an die vom Kunden angegebene Adresse. Die
              Lieferzeit beträgt in der Regel 5-7 Werktage, sofern nichts
              anderes vereinbart ist. Im Falle von Lieferverzögerungen wird der
              Kunde umgehend informiert.
            </p>
            <h3>6. Widerrufsrecht</h3>
            <p className="font-poppins leading-relaxed">
              Der Kunde hat das Recht, binnen 14 Tagen ohne Angabe von Gründen
              vom Vertrag zurückzutreten. Die Widerrufsfrist beträgt 14 Tage ab
              dem Tag, an dem der Kunde oder ein von ihm benannter Dritter die
              NFC-Visitenkarte in Besitz nimmt. Um das Widerrufsrecht auszuüben,
              muss der Kunde den Anbieter mittels einer eindeutigen Erklärung
              (z.B. per Post oder E-Mail) über seinen Entschluss, den Vertrag zu
              widerrufen, informieren. Der Kunde trägt die Kosten der
              Rücksendung.
            </p>
            <h3>7. Gewährleistung</h3>
            <p className="font-poppins leading-relaxed">
              Es gelten die gesetzlichen Gewährleistungsrechte. Bei Mängeln hat
              der Kunde das Recht auf Nacherfüllung, d.h. auf Nachbesserung oder
              Ersatzlieferung.
            </p>
            <h3>8. Haftung</h3>
            <p className="font-poppins leading-relaxed">
              Der Anbieter haftet nicht für Schäden, die durch unsachgemäßen
              Umgang mit den NFC-Visitenkarten entstehen. Für leicht fahrlässige
              Pflichtverletzungen haftet der Anbieter nur bei der Verletzung
              wesentlicher Vertragspflichten, nicht jedoch für Schäden, die
              nicht typischerweise vorhersehbar sind. Die Haftung ist auf den
              typischen, vorhersehbaren Schaden begrenzt.
            </p>
            <h3>9. Datenschutz</h3>
            <p className="font-poppins leading-relaxed">
              Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten
              erfolgt gemäß unserer Datenschutzerklärung, die auf der Website
              einsehbar ist. Der Kunde erklärt sich damit einverstanden, dass
              seine Daten zur Durchführung des Vertrages verarbeitet werden.{" "}
            </p>
            <h3>10. Schlussbestimmungen</h3>
            <p className="font-poppins leading-relaxed">
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
              Bestimmungen dieser Allgemeinen Geschäftsbedingungen unwirksam
              sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen
              davon unberührt.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="font-bold lg:text-3xl text-2xl mb-2">Imprint</h1>
            <h2 className="font-bold text-lg my-2">
              Information in accordance with §5 TMG:
            </h2>
            <p className="font-poppins leading-relaxed"></p>
            VibeCard
            <br />
            Irenenstraße 66
            <br />
            40468 Düsseldorf
            <p className="font-poppins leading-relaxed"></p>
            <h3>Represented by:</h3>
            <p className="font-poppins leading-relaxed">
              Omar Awel and Sitra Amdehun
            </p>
            <h3>Contact:</h3>
            <p className="font-poppins leading-relaxed">
              Telephone: <a href="tel:015906467215">0159 06467215</a>
              <br />
              E-mail:{" "}
              <a href="mailto:kontakt@vibecard.de">kontakt@vibecard.de</a>
            </p>
            <h3>
              Responsible for content in accordance with § 55 Para. 2 RStV:
            </h3>
            <p className="font-poppins leading-relaxed">
              Omar Awel and Sitra Amdehun
              <br />
              Irenenstraße 66
              <br />
              40468 Düsseldorf
            </p>
            <h2 className="font-bold text-xl my-2">Disclaimer:</h2>
            <h3>Liability for content</h3>
            <p className="font-poppins leading-relaxed">
              As service providers, we are responsible for our own content on
              these pages in accordance with § 7 Para. 1 TMG in accordance with
              general law. However, according to §§ 8 to 10 TMG, as service
              providers, we are not obligated to monitor submitted or stored
              third-party information or to search for circumstances that
              indicate illegal activity. Obligations to remove or block the use
              of information according to general law remain unaffected. In this
              case, liability is only possible at the time of knowledge about a
              specific violation of law. If we become aware of such violations
              of law, we will remove this content immediately.
            </p>
            <h3>Liability for links</h3>
            <p className="font-poppins leading-relaxed">
              Our offer contains links to external third-party websites over
              whose content we have no influence. We therefore cannot accept any
              liability for this external content. The respective provider or
              operator of the site is always responsible for the content of the
              linked pages. The linked pages were checked for possible
              violations of law at the time of linking. Illegal content was not
              recognizable at the time of linking. However, permanent control of
              the content of the linked pages is not reasonable without concrete
              evidence of a violation of law. If we become aware of violations
              of law, we will remove such links immediately.
            </p>
            <h3>Copyright</h3>
            <p className="font-poppins leading-relaxed">
              The content and works on these pages created by the site operators
              are subject to German copyright law. The reproduction, processing,
              distribution and any kind of exploitation outside the limits of
              copyright law require the written consent of the respective author
              or creator. Downloads and copies of this site are only permitted
              for private, non-commercial use. As far as the content on this
              site was not created by the operator, the copyrights of third
              parties are respected. In particular, third-party content is
              marked as such. Should you nevertheless become aware of a
              copyright infringement, please inform us accordingly. If we become
              aware of any violations of law, we will remove such content
              immediately.
            </p>
            <h3>Dispute resolution</h3>
            <p className="font-poppins leading-relaxed">
              The European Commission provides a platform for online dispute
              resolution (OS):
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank">
                https://ec.europa.eu/consumers/odr/
              </a>
              . You can find our email address above in the imprint.
              <br />
              We are not willing or obliged to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
            <h2 className="font-bold text-xl my-2">Privacy Policy</h2>
            <p className="font-poppins leading-relaxed">
              Contact us using the contact details provided to exercise your
              rights.
            </p>
            <h3>7. Security</h3>
            <p className="font-poppins leading-relaxed">
              We take technical and organizational measures to protect your data
              from unauthorized access and misuse. However, absolute security
              cannot be guaranteed.
            </p>
            <h3>8. Changes to the Privacy Policy</h3>
            <p className="font-poppins leading-relaxed">
              We reserve the right to change this privacy policy. The current
              version will be published on our website.
            </p>
            <h3>9. Contact</h3>
            <p className="font-poppins leading-relaxed">
              If you have any questions or concerns about data protection, you
              can contact us at any time using the contact details provided.
            </p>
            <h2 className="font-bold text-xl my-2">Cancellation Policy</h2>
            <h3>Right of Cancellation</h3>
            <p className="font-poppins leading-relaxed">
              You have the right to cancel this contract within fourteen days
              without giving any reason. The cancellation period is fourteen
              days from the day on which you or a third party other than the
              carrier designated by you takes possession of the goods.
            </p>
            <p className="font-poppins leading-relaxed">
              To exercise your right of withdrawal, you must inform us
              (VibeCard, Irenenstraße 66 , 40468 Düsseldorf, email:{" "}
              <a href="mailto:info@vibecard.de">info@vibecard.de</a>, phone:{" "}
              <a href="tel:015906467215">0159 06467215</a>) of your decision to
              withdraw from this contract by means of a clear statement (e.g., a
              letter sent by post or an email).
            </p>
            <h3>Who Bears the Costs?</h3>
            <p className="font-poppins leading-relaxed">
              The buyer bears the costs of return.
            </p>
            <h3>When Can the Customer Expect a Refund?</h3>
            <p className="font-poppins leading-relaxed">
              A refund will be made within 14 days of receipt of the return in
              the form of a refund of the originally chosen payment method.
            </p>
            <h3>Consequences of Withdrawal</h3>
            <p className="font-poppins leading-relaxed">
              If you withdraw from this contract, we will refund all payments
              that we have received from you, including delivery costs (with the
              exception of the additional costs resulting from the fact that you
              have chosen a different type of delivery than the cheapest
              standard delivery offered by us), immediately and at the latest
              within fourteen days from the day on which we received
              notification of your revocation of this contract. We may refuse
              repayment until we have received the goods back. This deadline is
              met if you send the goods before the expiry of the fourteen-day
              period.
            </p>
            <p className="font-poppins leading-relaxed">
              You will bear the direct cost of returning the goods. You only
              have to pay for any loss of value of the goods if this loss of
              value is due to handling of the goods which is not necessary to
              check their quality, properties, and functioning. We only accept
              returns in perfect and unused condition.
            </p>
            <h2 className="font-bold text-xl my-2">
              General Terms and Conditions (T&Cs)
            </h2>
            <h3>1. Scope</h3>
            <p className="font-poppins leading-relaxed">
              These General Terms and Conditions apply to all contracts
              concluded between VibeCard (hereinafter "provider") and the
              customer (hereinafter "customer") via the website{" "}
              <a href="http://www.vibecard.de">www.vibecard.de</a> (hereinafter
              "website").
            </p>
            <h3>2. Contracting Party</h3>
            <p className="font-poppins leading-relaxed">
              The contract is concluded with:
            </p>
            <p className="font-poppins leading-relaxed">
              VibeCard
              <br />
              Irenenstraße 66
              <br />
              40468 Düsseldorf
              <br />
              Germany
              <br />
              E-mail:{" "}
              <a href="mailto:kontakt@vibecard.de">kontakt@vibecard.de</a>
            </p>
            <h3>3. Conclusion of Contract</h3>
            <p className="font-poppins leading-relaxed">
              The presentation of the NFC business cards on the website does not
              constitute a legally binding offer, but an invitation to submit an
              offer. By submitting the order, the customer makes a binding offer
              to conclude a sales contract. The provider confirms receipt of the
              order by email. The contract is only concluded upon delivery of
              the NFC business card.
            </p>
            <h3>4. Prices and Payment Terms</h3>
            <p className="font-poppins leading-relaxed">
              The prices stated are final prices and include statutory VAT.
              Payment can be made by credit card, PayPal, or bank transfer. The
              customer undertakes to make payment within 14 days of receiving
              the invoice.
            </p>
            <h3>5. Delivery</h3>
            <p className="font-poppins leading-relaxed">
              Delivery is made to the address provided by the customer. The
              delivery time is usually 5-7 working days, unless otherwise
              agreed. In the event of delays in delivery, the customer will be
              informed immediately.
            </p>
            <h3>6. Right of Withdrawal</h3>
            <p className="font-poppins leading-relaxed">
              The customer has the right to withdraw from the contract within 14
              days without giving reasons. The withdrawal period is 14 days from
              the day on which the customer or a third party designated by him
              takes possession of the NFC business card. In order to exercise
              the right of withdrawal, the customer must inform the provider of
              his decision to withdraw from the contract by means of a clear
              declaration (e.g., by post or email). The customer bears the costs
              of the return shipment.
            </p>
            <h3>7. Warranty</h3>
            <p className="font-poppins leading-relaxed">
              The statutory warranty rights apply. In the event of defects, the
              customer has the right to subsequent performance, i.e., to repair
              or replacement.
            </p>
            <h3>8. Liability</h3>
            <p className="font-poppins leading-relaxed">
              The provider is not liable for damages caused by improper handling
              of the NFC business cards. The provider is only liable for
              slightly negligent breaches of duty if essential contractual
              obligations are violated, but not for damages that are not
              typically foreseeable. Liability is limited to the typical,
              foreseeable damage.
            </p>
            <h3>9. Data Protection</h3>
            <p className="font-poppins leading-relaxed">
              The collection, processing, and use of personal data take place in
              accordance with our data protection declaration, which can be
              viewed on the website. The customer agrees that their data will be
              processed to carry out the contract.
            </p>
            <h3>10. Final Provisions</h3>
            <p className="font-poppins leading-relaxed">
              The law of the Federal Republic of Germany applies. Should
              individual provisions of these terms and conditions be or become
              invalid, the validity of the remaining provisions remains
              unaffected.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Imprint;
