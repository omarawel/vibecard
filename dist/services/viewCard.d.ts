interface Pronoun {
    font_size: string;
    font_style: string;
    font_color: string;
}
interface Buttton {
    bg_color: string;
    text_color: string;
}
interface JobTitle {
    font_size: string;
    font_style: string;
    font_color: string;
}
interface Bio {
    font_size: string;
    font_style: string;
    font_color: string;
}
interface Company {
    font_size: string;
    font_style: string;
    font_color: string;
}
interface Location {
    font_size: string;
    font_style: string;
    font_color: string;
}
interface Name {
    font_size: string;
    font_style: string;
    font_color: string;
}
interface CardBg {
    bg_color: string;
}
interface CoverBg {
    bg_color: string;
}
interface Contacts {
    color: string;
    icon: string;
    link: string;
}
interface SocialMedia {
    color: string;
    icon: string;
    link: string;
    label: string;
}
export interface StyleData {
    pronoun: Pronoun;
    button: Buttton;
    jobTitle: JobTitle;
    bio: Bio;
    name: Name;
    company: Company;
    location: Location;
    coverBG: CoverBg;
    cardBg: CardBg;
    contacts: Contacts[];
    socialMedia: SocialMedia[];
}
export interface Data {
    owner: string;
    bio: string;
    card_url: string;
    company_logo: string;
    company_name: string;
    covor_picture: string;
    email: string;
    card_layout: string | number;
    location: string;
    full_name: string;
    job_title: string;
    main_picture: string;
    phone: string;
    pronouns: string;
    qr_code: string;
    watermark: boolean;
}
export {};
