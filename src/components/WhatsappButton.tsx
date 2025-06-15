// components/WhatsAppButton.js
 import React from 'react';
//import { FaWhatsapp } from 'react-icons/fa';

// const WhatsAppButton = () => {
//   return (
//     <a
//       href="https://wa.me/923001234567?text=Hello%2C%20I%20have%20a%20question%20about%20your%20services"
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         position: 'fixed',
//         bottom: '20px',
//         right: '20px',
//         backgroundColor: '#25D366',
//         color: 'white',
//         borderRadius: '50%',
//         width: '60px',
//         height: '60px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
//         zIndex: '1000',
//       }}
//     >
//       <FaWhatsapp size={30} />
//     </a>
//   );
// };

// export default WhatsAppButton;


// import 'react-floating-whatsapp/dist/index.css';


  import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/+923242822577?text=السلام%20علیکم،%20میں%20مزید%20معلومات%20چاہتا%20ہوں۔"
    className=" z-40 fixed bottom-5 right-25 bg-green-500 text-white p-2 rounded-full shadow-lg z-50"

    target="_blank"
    rel="noopener noreferrer"
  >
    <FaWhatsapp size={42} />
  </a>
);

export default WhatsAppButton;




// import React from 'react';
//  import { FloatingWhatsApp } from 'react-floating-whatsapp';

//  const WhatsAppButton = () => {
//   return (
//     <div>
//       {/* دیگر مواد */}
//       <FloatingWhatsApp phoneNumber="+923218751479" accountName="آپ کا نام" />
//     </div>
//   );
// };

// export default WhatsAppButton;




