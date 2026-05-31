interface Props {
    label: string;
    type: string;
    inputName: string;
    required: boolean;
    value: string;
    name?: (name: string) => void;
    emailAddress?: (email: string) => void;
    website?: (website: string) => void;
    tag?: (tag: string) => void;
    company?: (company: string) => void;
    phone?: (phone: string) => void;
    jobTitle?: (job: string) => void;
    location?: (location: string) => void;
}
declare const InputFields: ({ label, type, inputName, required, value, name, location, website, emailAddress, tag, jobTitle, phone, company, }: Props) => import("react/jsx-runtime").JSX.Element;
export default InputFields;
