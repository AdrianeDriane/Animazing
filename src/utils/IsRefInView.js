import { useInView } from 'framer-motion';

export function IsRefInView(ref) {
  return useInView(ref);
}
