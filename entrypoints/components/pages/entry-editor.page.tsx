export default function EntryEditorPage({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  return (
    <div
      className={`absolute top-0 ${show ? 'left-0' : 'left-full'} bg-bg w-full transition-all duration-200`}
    >
      <button onClick={close}>Close</button>
      Entry Editor
    </div>
  );
}
