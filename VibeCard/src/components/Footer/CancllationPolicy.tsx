import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const CancellationPolicy = () => {
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
            <h1 className="font-bold text-2xl">Widerrufsbelehrung</h1>

            <h2 className="text-xl my-3 font-bold">Widerrufsrecht</h2>
            <p className="font-poppins leading-relaxed">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
              diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
              Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter,
              der nicht der Beförderer ist, die Waren in Besitz genommen haben
              bzw. hat.
            </p>
            <p className="font-poppins leading-relaxed">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (VibeCard, Neustr.
              21, 40468 Düsseldorf, E-Mail:{" "}
              <a href="mailto:info@vibecard.de">info@vibecard.de</a>, Telefon:{" "}
              <a href="tel:015906467215">0159 06467215</a>) mittels einer
              eindeutigen Erklärung (z. B. ein mit der Post versandter Brief
              oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu
              widerrufen, informieren.
            </p>

            <h2 className="text-xl my-3 font-bold">Wer trägt die Kosten?</h2>
            <p className="font-poppins leading-relaxed">
              Die Kosten der Rücksendung trägt der Käufer.
            </p>

            <h2 className="text-xl my-3 font-bold">
              Wann kann der Kunde mit einer Rückerstattung rechnen?
            </h2>
            <p className="font-poppins leading-relaxed">
              Eine Rückerstattung erfolgt innerhalb von 14 Tagen nach Erhalt der
              Rücksendung in Form einer Rückerstattung der ursprünglich
              gewählten Zahlungsmethode.
            </p>

            <h2 className="text-xl my-3 font-bold">Folgen des Widerrufs</h2>
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
              vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der
              Rücksendung der Waren. Sie müssen für einen etwaigen Wertverlust
              der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur
              Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der
              Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
            </p>
            <p className="font-poppins leading-relaxed">
              Wir akzeptieren nur Rücksendungen in einwandfreiem und unbenutztem
              Zustand.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-2xl">Cancellation policy</h1>

            <h2 className="text-xl my-3 font-bold">Right of cancellation</h2>
            <p className="font-poppins leading-relaxed">
              You have the right to cancel this contract within fourteen days
              without giving any reason. The cancellation period is fourteen
              days from the day on which you or a third party designated by you,
              who is not the carrier, takes possession of the goods.
            </p>
            <p className="font-poppins leading-relaxed">
              To exercise your right of withdrawal, you must inform us
              (VibeCard, Irenenstraße 66, 40468 Düsseldorf, Email:{" "}
              <a href="mailto:info@vibecard.de">info@vibecard.de</a>, Telephone:{" "}
              <a href="tel:015906467215">0159 06467215</a>) by means of a clear
              statement (e.g. a letter sent by post or an email) of your
              decision to withdraw from this contract.
            </p>

            <h2 className="text-xl my-3 font-bold">Who bears the costs?</h2>
            <p className="font-poppins leading-relaxed">
              The cost of return is borne by the buyer.
            </p>

            <h2 className="text-xl my-3 font-bold">
              When can the customer expect a refund?
            </h2>
            <p className="font-poppins leading-relaxed">
              A refund will be made within 14 days of receipt of the return in
              the form of a refund of the originally selected payment method.
            </p>

            <h2 className="text-xl my-3 font-bold">
              Consequences of cancellation
            </h2>
            <p className="font-poppins leading-relaxed">
              If you cancel this contract, we will refund all payments that we
              have received from you, including delivery costs (with the
              exception of the additional costs resulting from the fact that you
              have chosen a different type of delivery than the cheapest
              standard delivery offered by us), immediately and at the latest
              within fourteen days from the day on which we received
              notification of your cancellation of this contract. We can refuse
              to refund until we have received the goods back. This deadline is
              met if you send the goods before the expiry of the fourteen-day
              period. You will bear the direct cost of returning the goods. You
              only have to pay for any loss of value of the goods if this loss
              of value is due to handling of the goods which is not necessary to
              check their quality, properties and functioning.
            </p>
            <p className="font-poppins leading-relaxed">
              We only accept returns in perfect and unused condition.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CancellationPolicy;
