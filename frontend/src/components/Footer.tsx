const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex justify-between mb-3 items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          Holidays
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </span>
      </div>
      <p className="text-center text-gray-400">
        © Copyright by {currentYear} Holidays All rights reserved
      </p>
    </div>
  );
};

export default Footer;
