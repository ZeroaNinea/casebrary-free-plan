import { ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import TransparentPillButton from '@/entrypoints/components/buttons/transparent-pill-button';
import TitleField from '@/entrypoints/components/search-field';

import CurrentPage from '@/types/current-page.alias';

export default function EntryEditorPage({
  show,
  close,
}: {
  show: boolean;
  type: CurrentPage;
  close: () => void;
}) {
  const { t } = useTranslation();

  return (
    <div
      className={`
        absolute inset-0
        bg-bg p-2
        transition-transform duration-200
      `}
      style={{
        transform: show ? 'translateX(0)' : 'translateX(100%)',
      }}
    >
      <TransparentPillButton isState={true} onClick={close}>
        <ChevronLeft size={18} color="var(--color-primary-on-container)" />
        <span className="text-primary-on-container">{t('back')}</span>
      </TransparentPillButton>
      <div className="px-3 py-3">
        <TitleField
          label={t('titleLabel')}
          placeholder={t('titlePlaceholder')}
          icon="type"
          // onChange={(value) => {
          //   // TODO: set title
          // }}
        />
      </div>
    </div>
  );
}
