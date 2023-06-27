import Select from 'react-select';
import '../App.css';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Uncompleted', label: 'Uncompleted' },
];

const Header = ({ onChange, selectedOption }) => {
  return (
    <header className="select">
      <Select options={options} onChange={onChange} value={selectedOption} />
    </header>
  );
};

export default Header;
