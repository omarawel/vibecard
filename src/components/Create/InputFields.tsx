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

const InputFields = ({
  label,
  type,
  inputName,
  required,
  value,
  name,
  location,
  website,
  emailAddress,
  tag,
  jobTitle,
  phone,
  company,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    switch (inputName) {
      case "Name":
        name && name(value);
        break;
      case "Email":
        emailAddress && emailAddress(value);
        break;
      case "Website":
        website && website(value);
        break;
      case "Tag Line":
        tag && tag(value);
        break;
      case "Company":
        company && company(value);
        break;
      case "Phone":
        phone && phone(value);
        break;
      case "Job Title":
        jobTitle && jobTitle(value);
        break;
      case "Location":
        location && location(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="mb-3">
      <label className="text-xs lg:text-gray-600 block" htmlFor={label}>
        {inputName}
        {required ? (
          <span className="text-red-700 text-2xl">*</span>
        ) : (
          <span className="text-transparent text-2xl">*</span>
        )}
      </label>
      <input
        type={type}
        name={label}
        className={`lg:bg-gray-200 py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 text-black`}
        onChange={handleChange}
        value={value}
        // autoComplete="off"
      />
    </div>
  );
};

export default InputFields;
