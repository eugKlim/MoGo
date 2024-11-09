"use client";
import { useEffect } from 'react';

const supportsAvif = async (): Promise<boolean> => {
  const avif =
    'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  return await new Promise<boolean>((resolve) => {
    const img = new Image();
    img.src = avif;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

const supportsWebp = async (): Promise<boolean> => {
  return await new Promise<boolean>((resolve) => {
    const img = new Image();
    img.src =
      'data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAABQAQCdASoDAAIAAgA2JQBOgC6gAP73M8eLuxHGTv3eIAAA';
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

const setLazyBackgrounds = async (): Promise<void> => {
  const lazyBgElements = document.querySelectorAll<HTMLElement>('.item-bg');
  for (let lazyBgElement of lazyBgElements) {
    let imageUrl = lazyBgElement.getAttribute('data-bg') ?? '';
    const baseImagePath = imageUrl.substring(0, imageUrl.lastIndexOf('.'));

    if (await supportsAvif()) {
      imageUrl = `${baseImagePath}.avif`;
    } else if (await supportsWebp()) {
      imageUrl = `${baseImagePath}.webp`;
    }

    lazyBgElement.style.backgroundImage = `url('${imageUrl}')`;
  }
};

const useBgCheckFormats = (): void => {
  useEffect(() => {
    setLazyBackgrounds();
  }, []);
};

export default useBgCheckFormats;