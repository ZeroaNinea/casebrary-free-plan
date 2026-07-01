export default function EntryEditorPage({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  return (
    <div
      className={`
        absolute inset-0
        bg-bg
        transition-transform duration-200
        ${show ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <button onClick={close}>Close</button>
      Entry Editor
    </div>
  );
}
