// Utility functions that don't require server-side imports
// As an example, functions here should not require fs
export function getQuestionFullId(type: string, id: string) {
  return type + ':' + id;
}
