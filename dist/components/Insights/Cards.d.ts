interface Styles {
    font_size: string;
    font_style: string;
    font_color: string;
}
export interface SocialMedia {
    link: string;
    color: string;
    icon: string;
}
export interface BusinessCardData {
    bio: string;
    card_layout: string;
    card_type: string;
    card_url: string;
    company_logo: string;
    company_name: string;
    covor_picture: string;
    email: string;
    full_name: string;
    job_title: string;
    location: string;
    main_picture: string;
    owner: string;
    phone: string;
    pronouns: string;
    qr_code: string;
    social_medias: SocialMedia[] | null;
    styles: {
        pronoun: Styles;
        jobTitle: Styles;
        bio: Styles;
        company: Styles;
        location: Styles;
        name: Styles;
        button: {
            text_color: string;
            bg_color: string;
        };
        cardBg: {
            bg_color: string;
        };
        coverBG: {
            bg_color: string;
        };
        contacts: SocialMedia[];
        socialMedia: SocialMedia[];
    };
    website: string | null;
}
declare const Cards: React.FC;
export default Cards;
