export function singletonActionsFilter(singletonTypes) {
  return (prev, { schemaType, documentId }) => {
    const isSingleton = singletonTypes.some(
      (type) => type.id === schemaType && type.id === documentId
    );

    return isSingleton
      ? prev.filter(
          (action) => !["delete", "duplicate", "unpublish"].includes(action.action)
        )
      : prev;
  };
}
