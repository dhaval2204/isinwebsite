// Loader.js
const Loader = ({ size = 'h-16 w-16', color = 'border-blue-500', text = 'Loading...' }) => {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className={`animate-spin rounded-full ${size} border-t-4 ${color} border-solid`}></div>
        <p className="text-gray-500 ml-4">{text}</p>
      </div>
    );
  };
  
  export default Loader;
  