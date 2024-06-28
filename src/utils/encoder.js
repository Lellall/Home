export const encodeInterpolatedUrl = (basePath, ...interpolated) => {
  const encondedInterpolated = interpolated.map((i) => encodeURIComponent(i));
  return basePath
    .map((path, index) => `${path}${encondedInterpolated[index] ?? ""}`)
    .join("");
};
