export default async function getCakes(userId: string) {
  try {
    const cakes = await prisma?.cake.findMany({
      where: { userId },
    });

    if (!cakes) {
      return null;
    }

    return cakes;
  } catch (e) {
    return null;
  }
}
