export function mergeRefs<T = any>(refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): React.RefCallback<T> {
  return (node) => {
    refs.forEach((reference) => {
      if (typeof reference === 'function') {
        reference(node);
      } else if (reference != null) {
        // eslint-disable-next-line no-param-reassign
        (reference as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}
