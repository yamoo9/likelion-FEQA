export default function getSlug(segment) {
  return segment.toLowerCase().replace(/\s+/g, '-');
}
