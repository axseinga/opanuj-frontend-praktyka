import { SearchFormSelectInput } from './SearchFormSelectInput';
import { SearchFormTextInput } from './SearchFormTextInput';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <SearchFormTextInput
        label="Name"
        handleChange={setName}
        value={name}
        placeholder="Rick Sanchez.."
      />
      <SearchFormSelectInput
        label={'Gender'}
        handleChange={setGender}
        value={gender}
        options={[
          { value: '', label: 'Any Gender' },
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
          { value: 'genderless', label: 'Genderless' },
          { value: 'unknown', label: 'Unknown' },
        ]}
      />
      <SearchFormSelectInput
        label={'Sort by'}
        handleChange={setSortOption}
        value={sortOption}
        options={[
          { value: '', label: 'Initial' },
          { value: 'name', label: 'Name' },
          { value: 'created', label: 'Created Date' },
        ]}
      />
    </form>
  );
}

export default SearchForm;
