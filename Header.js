import React, { useState } from 'react';
import { SiAnaconda } from "react-icons/si";


const Header = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleHeaderClick = (item) => {
    setSelectedItem(item);
  };
  

  const firstHeaderItems = ['Overview', 'Reports', 'Projects', 'Users', 'Contactlists', 'Products', 'Inbound', 'GeneralSettings',];
  const secondHeaderItems = {
    
    'Overview':        ['Sub Item 1-1', 'Sub Item 1-2'],
    'Reports':         ['Sub Item 2-1', 'Sub Item 2-2','Sub Item 2-3', ],
    'Projects':        ['Sub Item 3-1', 'Sub Item 3-2','Sub Item 3-3','Sub Item 3-4', 'Sub Item 3-5' ,'sub Item 3-6','Sub Item 3-7'],
    'Users':           ['Sub Item 4-1', 'Sub Item 4-2','Sub Item 4-3','Sub Item 4-4', 'Sub Item 4-5' ],
    'Contactlists':    ['Sub Item 5-1', 'Sub Item 5-2','Sub Item 5-3','Sub Item 5-4', 'Sub Item 5-5' ,'sub Item 5-6','Sub Item 5-7','sub Item 5-8'],
    'Products':        ['Sub Item 6-1', 'Sub Item 6-2','Sub Item 6-3','Sub Item 6-4', 'Sub Item 6-5' ,'sub Item 6-6','Sub Item 6-7'],
    'Inbound':         ['Sub Item 7-1', 'Sub Item 7-2','Sub Item 7-3','Sub Item 7-4', 'Sub Item 7-5' ,'sub Item 7-6'],
    'GeneralSettings': ['Sub Item 8-1']

  };
  return (
    <div>
      <header className="header">
        <nav>
        <SiAnaconda />
          {firstHeaderItems.map(item => (
            <button key={item} onClick={() => handleHeaderClick(item)}>
              {item}
            </button>
          ))}
          <SiAnaconda />
        </nav>
      </header>
      <header className="sub-header">
        <nav>
          {selectedItem && secondHeaderItems[selectedItem].map(subItem => (
            <button key={subItem}>{subItem}</button>
          ))}
        </nav>
      </header>
    </div>
  );
};
export default Header;