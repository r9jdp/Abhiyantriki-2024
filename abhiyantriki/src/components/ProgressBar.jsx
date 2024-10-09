const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // Increment the progress
      });
    }, 100); // Adjust the interval time as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className="rounded-full bg-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
