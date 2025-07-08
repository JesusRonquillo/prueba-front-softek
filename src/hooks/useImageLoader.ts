import { useState, useEffect } from "react";

interface UseImageLoaderOptions {
  images: string[];
  onAllLoaded?: () => void;
}

interface UseImageLoaderReturn {
  loadedImages: Set<string>;
  allImagesLoaded: boolean;
  loadingProgress: number;
}

export const useImageLoader = ({
  images,
  onAllLoaded,
}: UseImageLoaderOptions): UseImageLoaderReturn => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    if (images.length === 0) {
      setAllImagesLoaded(true);
      onAllLoaded?.();
      return;
    }

    const loadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => {
          setLoadedImages((prev) => new Set([...prev, src]));
          resolve();
        };

        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          setLoadedImages((prev) => new Set([...prev, src])); // Mark as loaded even if failed
          resolve(); // Don't reject to avoid blocking other images
        };

        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        await Promise.all(images.map(loadImage));
        setAllImagesLoaded(true);
        onAllLoaded?.();
      } catch (error) {
        console.error("Error loading images:", error);
        setAllImagesLoaded(true);
        onAllLoaded?.();
      }
    };

    loadAllImages();
  }, [images, onAllLoaded]);

  const loadingProgress =
    images.length > 0 ? (loadedImages.size / images.length) * 100 : 100;

  return {
    loadedImages,
    allImagesLoaded,
    loadingProgress,
  };
};
