export function mapToCSS(
  type: string[],
  lhs: {
    template: string;
    id: string;
  },
  rhs: {
    template: string;
    id: string;
  },
) {
  const atomic: Record<string, string> = {};

  // Margin and Padding for all spacing keys
  for (let i = 0; i < type.length; i++) {
    const key = type[i];
    atomic[lhs.template.replaceAll(lhs.id, key)] = rhs.template.replaceAll(
      rhs.id,
      key,
    );
  }

  return atomic;
}
