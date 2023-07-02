import React from 'react';

const Footer: React.FunctionComponent = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="text-light text-center py-3" style={{backgroundImage: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"}}>
            Copyright © {currentYear} Santiago Serrato. All Rights Reserved.
        </div>
    );
}

export default Footer;