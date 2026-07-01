import { Folder, FileText, Star, Heart, Tag, Pin, Image } from 'lucide-react';

export const icons = {
  folder: Folder,
  fileText: FileText,
  star: Star,
  heart: Heart,
  tag: Tag,
  pin: Pin,
  image: Image,
};

export type IconName = keyof typeof icons;

export type EntryIcon =
  | {
      type: 'lucide';
      value: IconName;
    }
  | {
      type: 'url';
      value: string;
    };
