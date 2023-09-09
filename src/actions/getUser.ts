export default async function getUser(userId: string) {
  try {
    const user = await prisma?.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (e) {
    return null;
  }
}
