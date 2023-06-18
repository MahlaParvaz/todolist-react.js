import Select from 'react-select';
import '../App.css';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Uncompleted', label: 'Uncompleted' },
];

const Header = () => {
  return (
    <header className="select">
      <Select options={options} />
    </header>
  );
};

export default Header;
