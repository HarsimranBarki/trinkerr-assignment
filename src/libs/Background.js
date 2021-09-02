const Background = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <div className="bg-white dark:bg-gray-800 dark:text-gray-100 h-screen transition-all">
      {children}
    </div>
  );
};
export default Background;
