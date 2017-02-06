export function addFile(content: string, filepath: string) {
  return monaco.languages.typescript.typescriptDefaults.addExtraLib(content, filepath);
}
