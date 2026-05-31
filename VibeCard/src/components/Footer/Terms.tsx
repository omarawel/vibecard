import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Terms = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="lg:container mx-auto lg:px-6 px-3 text-white lg:mt-32 mt-24">
        {i18n.language === "de" ? (
          <div>
            <h1 className="font-bold text-xl">
              Allgemeine Geschäftsbedingungen (AGB) für VibeCard
            </h1>

            <h2 className="font-bold text-xl my-3">1. Geltungsbereich</h2>
            <p className="font-poppins leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge,
              die zwischen VibeCard (nachfolgend "Anbieter") und den Kunden
              (nachfolgend "Kunde") über die Website{" "}
              <a href="https://www.vibecard.de">www.vibecard.de</a> (nachfolgend
              "Website") abgeschlossen werden.
            </p>

            <h2 className="font-bold text-xl my-3">2. Vertragspartner</h2>
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

            <h2 className="font-bold text-xl my-3">3. Vertragsabschluss</h2>
            <p className="font-poppins leading-relaxed">
              Die Präsentation der NFC-Visitenkarten auf der Website stellt kein
              rechtlich bindendes Angebot dar, sondern eine Einladung zur Abgabe
              eines Angebots. Durch das Absenden der Bestellung gibt der Kunde
              ein verbindliches Angebot zum Abschluss eines Kaufvertrags ab. Der
              Anbieter bestätigt den Eingang der Bestellung per E-Mail. Der
              Vertrag kommt erst mit der Lieferung der NFC-Visitenkarte
              zustande.
            </p>

            <h2 className="font-bold text-xl my-3">
              4. Preise und Zahlungsbedingungen
            </h2>
            <p className="font-poppins leading-relaxed">
              Die angegebenen Preise sind Endpreise und verstehen sich inklusive
              der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt wahlweise per
              Kreditkarte, PayPal oder Banküberweisung. Der Kunde verpflichtet
              sich, die Zahlung innerhalb von 14 Tagen nach Erhalt der Rechnung
              zu leisten.
            </p>

            <h2 className="font-bold text-xl my-3">5. Lieferung</h2>
            <p className="font-poppins leading-relaxed">
              Die Lieferung erfolgt an die vom Kunden angegebene Adresse. Die
              Lieferzeit beträgt in der Regel 5-7 Werktage, sofern nicht anders
              vereinbart. Bei Lieferverzögerungen wird der Kunde umgehend
              informiert.
            </p>

            <h2 className="font-bold text-xl my-3">6. Widerrufsrecht</h2>
            <p className="font-poppins leading-relaxed">
              Der Kunde hat das Recht, binnen 14 Tagen ohne Angabe von Gründen
              den Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab
              dem Tag, an dem der Kunde oder ein von ihm benannter Dritter die
              NFC-Visitenkarte in Besitz genommen hat. Um das Widerrufsrecht
              auszuüben, muss der Kunde den Anbieter mittels einer eindeutigen
              Erklärung (z.B. per Post oder E-Mail) über seinen Entschluss, den
              Vertrag zu widerrufen, informieren. Der Kunde trägt die Kosten der
              Rücksendung.
            </p>

            <h2 className="font-bold text-xl my-3">7. Gewährleistung</h2>
            <p className="font-poppins leading-relaxed">
              Es gelten die gesetzlichen Gewährleistungsrechte. Bei Mängeln hat
              der Kunde das Recht auf Nacherfüllung, d.h. auf Nachbesserung oder
              Nachlieferung. Schlägt die Nacherfüllung fehl, kann der Kunde
              mindern oder vom Vertrag zurücktreten.
            </p>

            <h2 className="font-bold text-xl my-3">8. Haftung</h2>
            <p className="font-poppins leading-relaxed">
              Der Anbieter haftet nicht für Schäden, die durch unsachgemäße
              Handhabung der NFC-Visitenkarten entstehen. Für leicht fahrlässige
              Pflichtverletzungen haftet der Anbieter nur, wenn wesentliche
              Vertragspflichten verletzt werden, jedoch nicht für Schäden, die
              nicht typischerweise vorhersehbar sind. Die Haftung ist auf den
              typischen, vorhersehbaren Schaden begrenzt.
            </p>

            <h2 className="font-bold text-xl my-3">9. Datenschutz</h2>
            <p className="font-poppins leading-relaxed">
              Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten
              erfolgt gemäß unserer <a href="#">Datenschutzerklärung</a>, die
              auf der Website einsehbar ist. Der Kunde willigt ein, dass seine
              Daten zur Durchführung des Vertrages verarbeitet werden.
            </p>

            <h2 className="font-bold text-xl my-3">10. Schlussbestimmungen</h2>
            <p className="font-poppins leading-relaxed">
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
              Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die
              Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-xl">
              General Terms and Conditions (GTC) for VibeCard
            </h1>

            <h2 className="font-bold text-xl my-3">1. Scope</h2>
            <p className="font-poppins leading-relaxed">
              These General Terms and Conditions apply to all contracts
              concluded between VibeCard (hereinafter "Provider") and the
              customer (hereinafter "Customer") via the Website{" "}
              <a href="https://www.vibecard.de">www.vibecard.de</a> (hereinafter
              "Website").
            </p>

            <h2 className="font-bold text-xl my-3">2. Contracting party</h2>
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

            <h2 className="font-bold text-xl my-3">
              3. Conclusion of contract
            </h2>
            <p className="font-poppins leading-relaxed">
              The presentation of the NFC business cards on the website does not
              constitute a legally binding offer, but an invitation to submit an
              offer. By submitting the order, the customer makes a binding offer
              to conclude a purchase contract. The provider confirms receipt of
              the order by email. The contract is only concluded when the NFC
              business card is delivered.
            </p>

            <h2 className="font-bold text-xl my-3">
              4. Prices and payment terms
            </h2>
            <p className="font-poppins leading-relaxed">
              The prices stated are final prices and include statutory VAT.
              Payment can be made by credit card, PayPal or bank transfer. The
              customer undertakes to make payment within 14 days of receiving
              the invoice.
            </p>

            <h2 className="font-bold text-xl my-3">5. Delivery</h2>
            <p className="font-poppins leading-relaxed">
              Delivery is made to the address provided by the customer. The
              delivery time is usually 5-7 working days, unless otherwise
              agreed. In the event of delivery delays, the customer will be
              informed immediately.{" "}
            </p>

            <h2 className="font-bold text-xl my-3">6. Right of withdrawal</h2>
            <p className="font-poppins leading-relaxed">
              The customer has the right to withdraw from the contract within 14
              days without giving reasons. The withdrawal period is 14 days from
              the day on which the customer or a third party designated by him
              takes possession of the NFC business card. In order to exercise
              the right of withdrawal, the customer must inform the provider of
              his decision to withdraw from the contract by means of a clear
              declaration (e.g. by post or email). The customer bears the costs
              of the return shipment.
            </p>

            <h2 className="font-bold text-xl my-3">7. Warranty</h2>
            <p className="font-poppins leading-relaxed">
              The statutory warranty rights apply. In the event of defects, the
              customer has the right to subsequent performance, i.e. to repair
              or replacement. If subsequent performance fails, the customer can
              reduce the price or withdraw from the contract.
            </p>

            <h2 className="font-bold text-xl my-3">8. Liability</h2>
            <p className="font-poppins leading-relaxed">
              The provider is not liable for damages caused by improper handling
              of the NFC business cards. The provider is only liable for
              slightly negligent breaches of duty if essential contractual
              obligations are violated, but not for damages that are not
              typically foreseeable. Liability is limited to the typical,
              foreseeable damage.
            </p>

            <h2 className="font-bold text-xl my-3">9. Data protection</h2>
            <p className="font-poppins leading-relaxed">
              The collection, processing and use of personal data takes place in
              accordance with our <a href="#">Data protection declaration</a>,
              which can be viewed on the website. The customer agrees that his
              data will be processed to carry out the contract.
            </p>

            <h2 className="font-bold text-xl my-3">10. Final provisions</h2>
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

export default Terms;
