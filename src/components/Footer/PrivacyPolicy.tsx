import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="lg:container mx-auto lg:px-6 px-3 text-white lg:mt-32 mt-24">
        {/* GErman */}
        {i18n.language === "de" ? (
          <div>
            <h1 className="font-bold text-2xl">Datenschutzerklärung</h1>
            <h2 className="font-bold text-xl my-3">1. Einleitung</h2>
            <p className="font-poppins leading-relaxed">
              Willkommen bei VibeCard. Der Schutz Ihrer persönlichen Daten ist
              uns wichtig. Diese Datenschutzerklärung erläutert, wie wir Ihre
              persönlichen Daten erheben, verwenden und schützen, wenn Sie
              unsere Website besuchen und unsere Dienste nutzen.
            </p>
            <h2 className="font-bold text-xl my-3">
              2. Verantwortliche Stelle
            </h2>
            <p className="font-poppins leading-relaxed">
              {" "}
              Verantwortlich für die Datenverarbeitung ist:{" "}
            </p>
            <p className="font-poppins leading-relaxed">
              VibeCard
              <br /> Irenenstraße 66
              <br /> 40468 Düsseldorf
              <br /> Vertreten durch: Omar Awel und Sitra Amdehun
              <br /> Kontakt: <br /> Telefon:
              <a href="tel:015906467215">0159 06467215</a>
              <br /> E-Mail:
              <a href="mailto:kontakt@vibecard.de">kontakt@vibecard.de</a>
            </p>
            <h2 className="font-bold text-xl my-3">
              3. Erhebung und Verarbeitung von Daten
            </h2>
            <p className="font-poppins leading-relaxed">
              Wir erheben und verarbeiten Ihre personenbezogenen Daten zur
              Bereitstellung und Verbesserung unserer Dienste. Zu den erfassten
              Daten gehören:
            </p>
            <ul>
              <li>Kontaktdaten: Name, E-Mail-Adresse, Telefonnummer</li>
              <li>
                Nutzungsdaten: IP-Adresse, Browsertyp, besuchte Seiten,
                Zugriffszeiten
              </li>
              <li>Bestelldaten: Bestellverlauf, Zahlungsinformationen</li>
              <li>
                Abonnementinformationen: Details zu Ihren Abonnements und
                Affiliate-Marketing-Aktivitäten
              </li>
              <li>
                Chatbot-Daten: Gespräche, die Sie mit unserem Chatbot führen
              </li>
            </ul>
            <h2 className="font-bold text-xl my-3">
              4. Zwecke der Datenverarbeitung
            </h2>
            <p className="font-poppins leading-relaxed">
              Wir verwenden Ihre Daten für folgende Zwecke:{" "}
            </p>
            <ul>
              <li>
                Verarbeitung und Verwaltung Ihrer NFC- und digitalen
                Visitenkarten-Bestellungen
              </li>
              <li>
                Verwaltung und Verarbeitung von Abonnements und
                Affiliate-Marketing
              </li>
              <li>Verbesserung unserer Website und Dienste</li>
              <li>
                Kommunikation mit Ihnen, einschließlich Kundenservice und
                Marketing (sofern Sie zugestimmt haben)
              </li>
              <li>Bereitstellung und Verbesserung unseres Chatbots </li>
            </ul>
            <h2 className="font-bold text-xl my-3">5. Weitergabe von Daten</h2>
            <p className="font-poppins leading-relaxed">
              Ihre personenbezogenen Daten werden nur weitergegeben, wenn dies
              zur Erbringung unserer Dienste oder zur Einhaltung gesetzlicher
              Anforderungen erforderlich ist. Hierzu gehören:
            </p>
            <ul>
              <li>
                Dienstleister: Zahlungsgateways, Versanddienstleister,
                Marketingpartner
              </li>
              <li>
                Gesetzliche Anforderungen: Behörden, wenn gesetzlich
                vorgeschrieben
              </li>
            </ul>
            <h2 className="font-bold text-xl my-3">6. Ihre Rechte</h2>
            <p className="font-poppins leading-relaxed">
              Sie haben das Recht auf Zugriff, Korrektur oder Löschung Ihrer
              Daten. Darüber hinaus können Sie der Verarbeitung Ihrer Daten
              widersprechen oder Ihre Einwilligung widerrufen. Zur Ausübung
              Ihrer Rechte wenden Sie sich bitte an uns unter den angegebenen
              Kontaktdaten.
            </p>
            <h2 className="font-bold text-xl my-3">7. Sicherheit</h2>
            <p className="font-poppins leading-relaxed">
              Wir treffen technische und organisatorische Maßnahmen, um Ihre
              Daten vor unberechtigtem Zugriff und Missbrauch zu schützen. Eine
              absolute Sicherheit kann jedoch nicht garantiert werden.
            </p>
            <h2 className="font-bold text-xl my-3">
              8. Änderungen der Datenschutzrichtlinie
            </h2>
            <p className="font-poppins leading-relaxed">
              Wir behalten uns das Recht vor, diese Datenschutzrichtlinie zu
              ändern. Die aktuelle Version wird auf unserer Website
              veröffentlicht.
            </p>
            <h2 className="font-bold text-xl my-3">9. Kontakt</h2>
            <p className="font-poppins leading-relaxed">
              Wenn Sie Fragen oder Anliegen zum Datenschutz haben, können Sie
              sich jederzeit unter den angegebenen Kontaktdaten an uns wenden.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-2xl">Privacy Policy</h1>{" "}
            <h2 className="font-bold text-xl my-3">1. Introduction</h2>
            <p className="font-poppins leading-relaxed">
              Welcome to VibeCard. The protection of your personal data is
              important to us. This privacy policy explains how we collect, use
              and protect your personal data when you visit our website and use
              our services.
            </p>
            <h2 className="font-bold text-xl my-3">2. Responsible body</h2>
            <p className="font-poppins leading-relaxed">
              {" "}
              Responsible for data processing is:{" "}
            </p>
            <p className="font-poppins leading-relaxed">
              VibeCard
              <br /> Irenenstraße 66
              <br /> 40468 Düsseldorf
              <br /> Represented by: Omar Awel and Sitra Amdehun
              <br /> Contact: <br /> Telephone:
              <a href="tel:015906467215">0159 06467215</a>
              <br /> Email:
              <a href="mailto:kontakt@vibecard.de">kontakt@vibecard.de</a>
            </p>
            <h2 className="font-bold text-xl my-3">
              3. Collection and processing of data
            </h2>
            <p className="font-poppins leading-relaxed">
              We collect and process your personal data to provide and improve
              our services. The data collected includes:
            </p>
            <ul>
              <li>Contact information: name, email address, phone number</li>
              <li>
                Usage data: IP address, browser type, pages visited, access
                times
              </li>
              <li>Order data: order history, payment information</li>
              <li>
                Subscription information: details of your subscriptions and
                affiliate marketing activities
              </li>
              <li>Chatbot data: conversations you have with our chatbot</li>
            </ul>
            <h2 className="font-bold text-xl my-3">
              4. Purposes of data processing
            </h2>
            <p className="font-poppins leading-relaxed">
              We use your data for the following purposes:{" "}
            </p>
            <ul>
              <li>
                Processing and managing your NFC and digital business card
                orders
              </li>
              <li>
                Managing and processing subscriptions and affiliate marketing
              </li>
              <li>Improving our website and services</li>
              <li>
                Communicating with you, including customer service and marketing
                (if you have consented)
              </li>
              <li>Providing and improving our chatbot </li>
            </ul>
            <h2 className="font-bold text-xl my-3">5. Sharing of data</h2>
            <p className="font-poppins leading-relaxed">
              Your personal data will only be shared if this is necessary to
              provide our services or to comply with legal requirements. This
              includes:
            </p>
            <ul>
              <li>
                Service providers: payment gateways, shipping service providers,
                marketing partners
              </li>
              <li>Legal requirements: authorities when required by law</li>
            </ul>
            <h2 className="font-bold text-xl my-3">6. Your rights</h2>
            <p className="font-poppins leading-relaxed">
              You have the right to access, correct or delete your data. In
              addition, you can object to the processing of your data or
              withdraw your consent. Please contact us using the contact details
              provided to exercise your rights.
            </p>
            <h2 className="font-bold text-xl my-3">7. Security</h2>
            <p className="font-poppins leading-relaxed">
              We take technical and organizational measures to protect your data
              from unauthorized access and misuse. However, absolute security
              cannot be guaranteed.
            </p>
            <h2 className="font-bold text-xl my-3">
              8. Changes to the privacy policy
            </h2>
            <p className="font-poppins leading-relaxed">
              We reserve the right to change this privacy policy. The current
              version will be published on our website.
            </p>
            <h2 className="font-bold text-xl my-3">9. Contact</h2>
            <p className="font-poppins leading-relaxed">
              If you have any questions or concerns about data protection, you
              can contact us at any time using the contact details provided.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
