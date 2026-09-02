export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-500/5 text-red-500 border border-red-500 rounded-lg p-2 text-[10px] font-body">
      {message || 'An error occurred. Please try again later.'}
    </div>
  );
}
